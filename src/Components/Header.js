import React, { useContext, useState } from "react";
import { WeatherContext } from "../App";
import { ImSpinner6 } from "react-icons/im";

const Header = () => {
  const { searchText, setSearchText } = useContext(WeatherContext);
  const { setWeatherApi } = useContext(WeatherContext);
  const { setErrorMessage } = useContext(WeatherContext);
  const [loader, setLoader] = useState(false);

  const WeatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${searchText}&appid=1635890035cbba097fd5c26c8ea672a1`;

  const getWeatherData = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      const weatherInfo = await fetch(WeatherURL);
      if (weatherInfo.status !== 200) {
        setErrorMessage(true);
        setWeatherApi(undefined);
      } else {
        const json = await weatherInfo.json();
        // console.log(json);
        const fiveDaysData = json.list.splice(0, 5);
        console.log(fiveDaysData);

        setWeatherApi(fiveDaysData);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };
  return (
    <div className="flex flex-col md:flex-row gap-6 p-5 shadow-sm items-center">
      <h1 className="text-3xl">Enter your city</h1>
      <form className="flex flex-col md:flex-row gap-2 items-center">
        <input
          type="text"
          placeholder="Enter city"
          className="w-44 p-1 border border-orange-500 focus:outline-none rounded capitalize"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={getWeatherData}
          className="py-1 px-6 border border-orange-500 rounded bg-orange-500 text-white hover:text-black"
        >
          Search
        </button>
        {loader && <ImSpinner6 size={24} className="animate-spin" />}
      </form>
    </div>
  );
};

export default Header;
