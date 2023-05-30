import React from "react";

const Table = ({ Date, Max, Min, Pressure, Humidity }) => {
  return (
    <table className="flex-1 border-2 border-black text-center items-center ">
      <thead>
        <tr>
          <th colSpan={2} className="border border-black">
            Date:{Date}
          </th>
        </tr>
        <tr>
          <th colSpan={2} className="border border-black">
            Temperature
          </th>
        </tr>
      </thead>
      <tbody>
        <tr colSpan={2} className="border border-black">
          <td colSpan={1} className="border border-black font-medium">
            Min
          </td>
          <td colSpan={1} className="border border-black font-medium">
            Max
          </td>
        </tr>
        <tr colSpan={2} className="border border-black">
          <td colSpan={1} className="border border-black">
            {Min}
          </td>
          <td colSpan={1} className="border border-black">
            {Max}
          </td>
        </tr>
        <tr colSpan={2} className="border border-black">
          <td colSpan={1} className="border border-black font-medium">
            Pressure
          </td>
          <td colSpan={1} className="border border-black">
            {Pressure}
          </td>
        </tr>
        <tr colSpan={2} className="border border-black">
          <td colSpan={1} className="border border-black font-medium">
            Humidity
          </td>
          <td colSpan={1} className="border border-black">
            {Humidity}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
