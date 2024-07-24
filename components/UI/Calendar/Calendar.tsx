import React, { useState, useEffect } from 'react';
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
  getWeek,
  startOfYear,
  addWeeks as addWeeksDateFns,
} from 'date-fns';

/**
 * Props for the Calendar component.
 */
interface CalendarProps {
  onDateChange: (date: Date) => void;
  isLoading: boolean;
  weekNumber: number;
}

/**
 * Calendar component displays a week view with navigation buttons to move between weeks.
 *
 * @component
 * @example
 * return (
 *   <Calendar onDateChange={(date) => console.log(date)} weekNumber={21} isLoading={false} />
 * )
 */
const Calendar = ({ onDateChange, isLoading, weekNumber }: CalendarProps) => {
  const getStartOfWeekByNumber = (weekNumber: number): Date => {
    const startOfThisYear = startOfYear(new Date());
    return addWeeksDateFns(startOfThisYear, weekNumber - 1);
  };

  const [currentDate, setCurrentDate] = useState<Date>(
    getStartOfWeekByNumber(weekNumber)
  );

  useEffect(() => {
    setCurrentDate(getStartOfWeekByNumber(weekNumber));
  }, [weekNumber]);

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
    setCurrentDate((prevDate) => {
      const newDate = subWeeks(prevDate, 1);
      onDateChange(newDate);
      return newDate;
    });
  };

  const handleMoveForward = (): void => {
    setCurrentDate((prevDate) => {
      const nextWeek = addWeeks(prevDate, 1);
      if (isAfter(nextWeek, new Date())) {
        onDateChange(prevDate);
        return prevDate;
      } else {
        onDateChange(nextWeek);
        return nextWeek;
      }
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
        <Button title='<' onPress={handleMoveBack} disabled={isLoading} />
        {daysOfWeek.map((day) => (
          <View key={day.toString()} style={styles.day}>
            <Text>{format(day, 'EEE')}</Text>
            <Text>{format(day, 'd')}</Text>
          </View>
        ))}
        <Button
          title='>'
          onPress={handleMoveForward}
          disabled={isCurrentWeek || isLoading}
        />
      </View>
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
    width: 'auto',
    marginBottom: 16,
  },
  day: {
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
});

export default Calendar;
