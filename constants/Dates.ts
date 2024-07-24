import { getWeekNumber } from '@/utils/getWeekNumber';

const todayDate = new Date();
//TODO change this line of the startingWeek when we have actual data
// export const startingWeekNumber = getWeekNumber(todayDate) - 1;
export const startingWeekNumber = 21;
export const currentYear = todayDate.getFullYear();
