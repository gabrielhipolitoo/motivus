"use client";
import useControllerCalender from "@/hook/useControllerCalender";
import {
  currentlyMonth,
  getDaysInMonth,
  yearCurrently,
} from "@/utils/date/monthsCurrently";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CalanderHeader() {
  const { renderCalender } = useControllerCalender();
  console.log(renderCalender().map((i) => {console.log(i)}));
  return (
    <header className="flex justify-between p-2">
      <div>{currentlyMonth + " " + yearCurrently}</div>
      <div className="flex w-[70px] justify-between">
        <button className="cursor-pointer">
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button className="cursor-pointer">
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </header>
  );
}
