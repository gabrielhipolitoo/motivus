import { months } from "@/utils/months";

export default function Candles() {
  const date = new Date();
  const currentlyMonth = date.getMonth();

  return (
    <div className="flex justify-between w-full ">
      {months.map((month, index) => (
        <div
          key={month}
          className="hover:bg-[#CECECE] w-[50px] rounded-lg  p-2 cursor-pointer "
        >
          {index === currentlyMonth ? (
            <div className="bg-[#2A5FE5] rounded-lg p-2 m-auto w-[30px] h-[50px] "></div>
          ) : (
            <div className="bg-[#2B2B2B] rounded-lg p-2 m-auto w-[30px] h-[50px] "></div>
          )}
          <p className="text-center text-[11px] mt-[10px] text-gray-400">
            {month}
          </p>
        </div>
      ))}
    </div>
  );
}
