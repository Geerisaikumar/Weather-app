import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";

export const WeatherContext = createContext(undefined);

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [weatherApi, setWeatherApi] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState(false);
  return (
    <WeatherContext.Provider
      value={{
        searchText,
        setSearchText,
        weatherApi,
        setWeatherApi,
        errorMessage,
        setErrorMessage,
      }}
    >
      <div>
        <Header />
        <Body />
      </div>
    </WeatherContext.Provider>
  );
};

export default App;
