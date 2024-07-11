export function getWeekNumber(dateString: string | Date): number {
  // Parse the date string to a Date object
  const date = new Date(dateString);

  // Ensure the date is valid
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date');
  }

  // Calculate the start of the year
  const startOfYear = new Date(date.getFullYear(), 0, 1);

  // Calculate the day of the week of the start of the year (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const startDayOfWeek = startOfYear.getDay();

  // Calculate the day of the year (1-based index)
  const dayOfYear =
    Math.floor(
      (date.getTime() - startOfYear.getTime()) / (24 * 60 * 60 * 1000)
    ) + 1;

  // Calculate the week number (starting from Sunday)
  // Adjust by the start day of the week to shift the week start to Sunday
  const weekNumber = Math.ceil((dayOfYear + startDayOfWeek) / 7);

  return weekNumber;
}
