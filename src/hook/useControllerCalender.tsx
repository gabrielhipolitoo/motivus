import {
  currentlyMonth,
  date,
  getDaysCurrentMonth,
  getFirstDayWeek,
  getPreviousMonth,
  today,
} from "@/utils/date/dateHelper";
import { ReactElement, useState } from "react";

export default function useControllerCalender() {
  const [currentDate, setCurrentDate] = useState(date.add(0, "month"));

  const createCalender = () => {
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
      ...prevLastMonth.map(
        ({ day }) =>
          ({
            day,
            type: "day-previous-month",
            datafull: null,
          } as const)
      ),
      ...currentMonthDays.map(
        ({ day }) =>
          ({
            day,
            type: day === today ? "current-date" : "days-month",
            datafull: null,
          } as const)
      ),
    ];
  };
  console.log(createCalender());
  const renderCalender = () => {
    const mappedDates = [] as ReactElement[];
    const isCurrentlyMonth = currentDate.month() === currentlyMonth;

    createCalender().forEach(({ datafull, day, type }) => {
      const prevDays = today > day;
      if (type === "day-previous-month") {
        mappedDates.push(
          <button className="w-9  font-medium text-[#898989]  text-gray text-center hover:bg-black rounded-md">
            {day}
          </button>
        );
      }

      if (type === "days-month") {
        mappedDates.push(
          <button className="w-9 font-medium text-sm text-black  text-gray text-center hover:bg-black rounded-md">
            {day}
          </button>
        );
      }

      if (type === "current-date" && isCurrentlyMonth) {
        mappedDates.push(
          <button className="w-9 key={day} font-medium  text-blue-600 text-sm text-center  rounded-md">
            {day}
          </button>
        );
      }

      if (day < today && type == "days-month") {
        mappedDates.push(
          <button className="w-9  font-medium text-[#898989]  text-gray text-center hover:bg-black rounded-md">
            {day}
          </button>
        );
      }
    });

    return mappedDates.flat();
  };

  return {
    renderCalender,
  };
}
