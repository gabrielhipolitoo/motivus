import dayjs from "dayjs";

export const date = dayjs();

export const today = date.date();
const currentlyMonth = date.month();

export const getPreviousMonth = (date: dayjs.Dayjs) => {
  const previousMonth = date.subtract(1, "month");
  return previousMonth.daysInMonth();
};

export const getDaysCurrentMonth = (date: dayjs.Dayjs) => {
  return date.daysInMonth();
};

export const getFirstDayWeek = (date: dayjs.Dayjs) => {
  return date.startOf("months").day();
};
