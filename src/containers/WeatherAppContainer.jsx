import Axios from "axios";
import React, { useEffect, useState } from "react";
import WeatherCharts from "../components/WeatherCharts";
import WeatherComponent from "../components/WeatherComponent";
import { useSelector } from "react-redux";

const WeatherAppContainer = () => {
  const city = useSelector((state) => state.city);

  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const fetchWeather = async () => {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`;
    const [weatherResponse] = await Promise.all([Axios.get(weatherUrl)]);
    setWeatherData(weatherResponse);

    const lat = weatherResponse.data.coord.lat;
    const lon = weatherResponse.data.coord.lon;

    const forcastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=fe4feefa8543e06d4f3c66d92c61b69c`;
    const forcastResponse = await Promise.all([Axios.get(forcastUrl)]);

    setForecastData(forcastResponse);
  };

  useEffect(() => {
    fetchWeather();
    // eslint-disable-next-line
  }, [city]);

  return (
    <>
      {weatherData ? (
        <div className="weather-app--container">
          <h1>Know your city weather</h1>
          <div className="weather-app-content-area">
            <WeatherComponent weather={weatherData.data} />
            <WeatherCharts forecastData={forecastData} />
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </>
  );
};

export default WeatherAppContainer;
