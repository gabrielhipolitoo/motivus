import { months } from "../months";
import dayjs from "dayjs";
const date = new Date();
const numberMonth = date.getMonth();

export const currentlyMonth = months.filter((month, index) => {
  if (numberMonth === index) {
    return month;
  }
});

export const yearCurrently = date.getFullYear().toString();

export const currentDate = () => {
  const date = dayjs().format("DD/MM/YYYY");
  return date;
};

export const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

export const getFirstDay = (year: number, month: number): number => {
  return new Date(year, month, 1).getDay();
};

export const getDaysLastMonth = (
  year: number,
  month: number,
  firstDay: number
) => {
  const lastMonthDays = new Date(year - 1, month + 1, 0).getDate();
  return Array.from(
    { length: firstDay },
    (_, i) => lastMonthDays - firstDay + 1
  );
};
