"use client";
import useControllerCalender from "@/hook/useControllerCalender";

export type CalenderDaysProps = {
  days: string[];
};

export default function CalenderDays({ days }: CalenderDaysProps) {
  const { renderCalender } = useControllerCalender();

  return (
    <div className="flex flex-col mt-3 justify-between w-full h-full">
      <div className="w-full grid gap-4 grid-cols-7">
        {days.map((day) => (
          <p className="text-sm text-center">{day}</p>
        ))}
      </div>
      <div className="w-full h-full  grid grid-cols-7 gap-4 text-center text-gray-400">
        {renderCalender()}
      </div>
    </div>
  );
}
