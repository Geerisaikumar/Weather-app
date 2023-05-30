import React, { useContext } from "react";
import Table from "./Table";
import { WeatherContext } from "../App";

const Body = () => {
  const { weatherApi, errorMessage } = useContext(WeatherContext);
  return (
    <div className="p-5 flex flex-col gap-3 md:flex-row">
      {weatherApi ? (
        weatherApi.map((data, indx) => {
          const date = new Date(data.dt * 1000).toLocaleDateString();
          const Max = data.main.temp_max;
          const Min = data.main.temp_min;
          const Pressure = data.main.pressure;
          const Humidity = data.main.humidity;
          console.log(date, Max, Min, Pressure, Humidity);
          return (
            <Table
              key={indx}
              Date={date}
              Max={Max}
              Min={Min}
              Pressure={Pressure}
              Humidity={Humidity}
            />
          );
        })
      ) : errorMessage ? (
        <h1 className="text-2xl text-[#f50808] font-medium my-auto w-full text-center  ">
          Oops Something Went Wrong! Please Check your city
        </h1>
      ) : (
        <h1 className="text-2xl font-medium my-auto w-full text-center ">
          Enter City to Get WeatherInfo
        </h1>
      )}
    </div>
  );
};

export default Body;
