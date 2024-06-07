import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {
  format,
  startOfWeek,
  addDays,
  subWeeks,
  eachDayOfInterval,
} from 'date-fns';

// Define the types for the props (if any) and state
type CalendarProps = {};

const Calendar: React.FC<CalendarProps> = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  // Function to get the start of the week
  const getStartOfWeek = (date: Date): Date =>
    startOfWeek(date, { weekStartsOn: 1 });

  // Function to get the days of the week
  const getDaysOfWeek = (date: Date): Date[] => {
    const startOfWeekDate = getStartOfWeek(date);
    return eachDayOfInterval({
      start: startOfWeekDate,
      end: addDays(startOfWeekDate, 6),
    });
  };

  // Function to handle moving one week back
  const handleMoveBack = (): void => {
    setCurrentDate((prevDate) => subWeeks(prevDate, 1));
  };

  const daysOfWeek = getDaysOfWeek(currentDate);

  return (
    <View style={styles.container}>
      <View style={styles.week}>
        {daysOfWeek.map((day) => (
          <View key={day.toString()} style={styles.day}>
            <Text>{format(day, 'EEE')}</Text>
            <Text>{format(day, 'd')}</Text>
          </View>
        ))}
      </View>
      <Button title='Move Back One Week' onPress={handleMoveBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  week: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  day: {
    alignItems: 'center',
  },
});

export default Calendar;
