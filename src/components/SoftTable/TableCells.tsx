import React from "react";
import { Box } from "../Box/Box";
import { object } from "zod/v4";

export type TableCellsProps = {
  cells: any[];
};

export const TableCells = ({ cells }: TableCellsProps) => {
  return (
    <tbody className="w-full bg-[transparent]">
      {Object.values(cells).map((item) => (
        <tr
          key={item.id}
          className=" bg-white border-b-[3px] mt-4 h-15 border-gray-100  text-center text-slate-950 p-2 rounded-lg text-gray m-2 text-[13px]"
        >
          <td>{item.id}</td>
          <td>{item.model}</td>
          <td>{item.supervisor}</td>
          <td>{item.createAd}</td>
          <td>{item.delivery}</td>
          <td>{item.duration}</td>
          <td>{item.status}</td>
          <button className="align-middle  ">teste</button>
        </tr>
      ))}
    </tbody>
  );
};
