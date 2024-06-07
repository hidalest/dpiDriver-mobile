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

/**
 * Props for the Calendar component.
 */
type CalendarProps = {};

/**
 * Calendar component displays a week view with navigation buttons to move between weeks.
 *
 * @component
 * @example
 * return (
 *   <Calendar />
 * )
 */
const Calendar: React.FC<CalendarProps> = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  /**
   * Get the start of the week for a given date.
   *
   * @param {Date} date - The date for which to find the start of the week.
   * @returns {Date} The start of the week.
   */
  const getStartOfWeek = (date: Date): Date =>
    startOfWeek(date, { weekStartsOn: 0 });

  /**
   * Get all days of the week for a given date.
   *
   * @param {Date} date - The date for which to find the days of the week.
   * @returns {Date[]} An array of dates representing the days of the week.
   */
  const getDaysOfWeek = (date: Date): Date[] => {
    const startOfWeekDate = getStartOfWeek(date);
    return eachDayOfInterval({
      start: startOfWeekDate,
      end: addDays(startOfWeekDate, 6),
    });
  };

  /**
   * Handle moving to the previous week.
   */
  const handleMoveBack = (): void => {
    setCurrentDate((prevDate) => subWeeks(prevDate, 1));
  };

  /**
   * Handle moving to the next week.
   * Ensures not to move past the current week.
   */
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
        <Button title='<' onPress={handleMoveBack} />
        {daysOfWeek.map((day) => (
          <View key={day.toString()} style={styles.day}>
            <Text>{format(day, 'EEE')}</Text>
            <Text>{format(day, 'd')}</Text>
          </View>
        ))}
        <Button
          title='>'
          onPress={handleMoveForward}
          disabled={isCurrentWeek}
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
