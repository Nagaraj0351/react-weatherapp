import React, { useState } from "react";
import Location from "./Location";
import Utils from "./Utils";
import WeatherInfoLabel from "./WeatherInfoLabel";

const WeatherComponent = ({ weather }) => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);

  return (
    <div className="weather-info--container">
      <Location weather={weather} />
      <div className="weather-info-details">
        <WeatherInfoLabel>
          <strong>Current weather condition:</strong>
          <span>{Utils.convertCamelcase(weather?.weather[0].description)}</span>
        </WeatherInfoLabel>
        <WeatherInfoLabel>
          <strong>Current Temperature:</strong>
          <span>{Utils.connvertKelvinToCelsious(weather?.main.temp)} °C</span>
        </WeatherInfoLabel>
        <WeatherInfoLabel>
          <strong>Today high Temperature:</strong>
          <span>
            {Utils.connvertKelvinToCelsious(weather?.main.temp_max)} °C
          </span>
        </WeatherInfoLabel>
        <WeatherInfoLabel>
          <strong>Today low Temperature:</strong>
          <span>
            {Utils.connvertKelvinToCelsious(weather?.main.temp_min)} °C
          </span>
        </WeatherInfoLabel>
      </div>

      <button
        className="more-weather-details-btn"
        onClick={() => setShowMoreDetails(!showMoreDetails)}
      >
        {showMoreDetails ? "Hide" : "Show"} more weather details
      </button>

      {showMoreDetails && (
        <div className="weather-info-details">
          <WeatherInfoLabel>
            <strong>Wind Speed:</strong>
            <span>{weather?.wind.speed} m/sec</span>
          </WeatherInfoLabel>
          <WeatherInfoLabel>
            <strong>Humidity:</strong>
            <span>{weather?.main.humidity} %</span>
          </WeatherInfoLabel>
          <WeatherInfoLabel>
            <strong>Pressure:</strong>
            <span>{weather?.main.pressure} hPa</span>
          </WeatherInfoLabel>
          <WeatherInfoLabel>
            <strong>Sunrise Time:</strong>
            <span>
              {new Date(weather?.sys.sunrise * 1000).toLocaleTimeString()} AM
            </span>
          </WeatherInfoLabel>
          <WeatherInfoLabel>
            <strong>Sunset Time:</strong>
            <span>
              {Utils.timeConversion(
                new Date(weather?.sys.sunset * 1000).toLocaleTimeString()
              )}
            </span>
          </WeatherInfoLabel>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
