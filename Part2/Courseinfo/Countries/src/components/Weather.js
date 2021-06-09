import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState({});

  const key = process.env.REACT_APP_API_KEY;
  const url = `http://api.weatherstack.com/current?access_key=${key}&query=${capital}`;

  useEffect(() => {
    axios.get(url).then((respone) => setWeather(respone.data.current));
  }, [weather]);

  if (weather === undefined) {
    return <div>API calls have been exhausted</div>;
  }

  if (Object.entries(weather).length === 0) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h2>Weather in {capital}</h2>
        <p>
          <strong>temperature:</strong> {weather.temperature} Celcius
        </p>
        <img src={weather.weather_icons} alt="weather icon" /> <br />
        <p>
          <strong>wind:</strong> {weather.wind_speed} mph direction{" "}
          {weather.wind_dir} <br />
        </p>
      </div>
    );
  }
};

export default Weather;
