import {
  date,
  getDaysCurrentMonth,
  getFirstDayWeek,
  getPreviousMonth,
} from "@/utils/date/dateHelper";
import { useState } from "react";

export default function useControllerCalender() {
  const [currentDate, setCurrentDate] = useState(date.add(0, "month"));
  const dates = [];

  const renderCalender = () => {
    const firstDayWeek = getFirstDayWeek(currentDate);
    const dayCurrentMonth = getDaysCurrentMonth(currentDate);
    const previousMonth = getPreviousMonth(currentDate);

    const prevLastMonth = Array.from({ length: firstDayWeek }, (_, i) => ({
      day: previousMonth - firstDayWeek + i + 1,
      type: "prev",
    }));

    const currentMonthDays = Array.from(
      { length: dayCurrentMonth },
      (_, i) => ({
        day: i + 1,
        type: "current",
      })
    );

    return [...prevLastMonth, ...currentMonthDays];
  };
  return {
    renderCalender,
  };
}
