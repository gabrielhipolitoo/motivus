import { months } from "@/utils/months";

export default function Candles() {
  return (
    <div className="flex justify-between  ">
      {months.map((month) => (
        <div key={month} className="hover:bg-[#CECECE] w-[50px] ">
          <div className="bg-amber-400 p-2 m-auto w-[30px] h-[50px] "></div>
          <p className="text-center text-sm">{month}</p>
        </div>
      ))}
    </div>
  );
}
