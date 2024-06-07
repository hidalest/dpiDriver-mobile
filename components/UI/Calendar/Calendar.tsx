import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import {
  format,
  startOfWeek,
  addDays,
  subWeeks,
  addWeeks,
  eachDayOfInterval,
  isAfter,
  isSameWeek,
} from 'date-fns';

type CalendarProps = {};

const Calendar: React.FC<CalendarProps> = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const getStartOfWeek = (date: Date): Date =>
    startOfWeek(date, { weekStartsOn: 0 });

  const getDaysOfWeek = (date: Date): Date[] => {
    const startOfWeekDate = getStartOfWeek(date);
    return eachDayOfInterval({
      start: startOfWeekDate,
      end: addDays(startOfWeekDate, 6),
    });
  };

  const handleMoveBack = (): void => {
    setCurrentDate((prevDate) => subWeeks(prevDate, 1));
  };

  const handleMoveForward = (): void => {
    setCurrentDate((prevDate) => {
      const nextWeek = addWeeks(prevDate, 1);
      return isAfter(nextWeek, new Date()) ? prevDate : nextWeek;
    });
  };

  const daysOfWeek = getDaysOfWeek(currentDate);
  const currentMonth = format(currentDate, 'MMMM');
  const isCurrentWeek = isSameWeek(currentDate, new Date(), {
    weekStartsOn: 0,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.month}>{currentMonth}</Text>
      <View style={styles.week}>
        {daysOfWeek.map((day) => (
          <View key={day.toString()} style={styles.day}>
            <Text>{format(day, 'EEE')}</Text>
            <Text>{format(day, 'd')}</Text>
          </View>
        ))}
      </View>
      <Button title='Move Back One Week' onPress={handleMoveBack} />
      {!isCurrentWeek && (
        <Button title='Move Forward One Week' onPress={handleMoveForward} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: 'center',
  },
  month: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
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
