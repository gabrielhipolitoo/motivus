import {
  date,
  getDaysCurrentMonth,
  getFirstDayWeek,
  getPreviousMonth,
  today,
} from "@/utils/date/dateHelper";
import { useState } from "react";

export default function useControllerCalender() {
  const [currentDate, setCurrentDate] = useState(date.add(0, "month"));
  console.log(date.format("DD/MM/YYYY"));
  const renderCalender = () => {
    const firstDayWeek = getFirstDayWeek(currentDate);
    const dayCurrentMonth = getDaysCurrentMonth(currentDate);
    const previousMonth = getPreviousMonth(currentDate);

    const prevLastMonth = Array.from({ length: firstDayWeek }, (_, i) => ({
      day: previousMonth - firstDayWeek + i + 1,
    }));

    const currentMonthDays = Array.from(
      { length: dayCurrentMonth },
      (_, i) => ({
        day: i + 1,
      })
    );

    return [
      ...prevLastMonth.map(({ day }) => ({
        day,
        type: "day-previous-month",
        datafull: null,
      })),
      ...currentMonthDays.map(({ day }) => ({
        day,
        type: day === today ? "current-date" : "days-month",
        datafull: null,
      })),
    ];
  };
  return {
    renderCalender,
  };
}
