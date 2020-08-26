import WeatherCard from "./WeatherCard/component";
import PulseLoader from "react-spinners/PulseLoader";
import React from "react";
import { useState, useEffect } from "react";
const WeatherEngine = ({ location }) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
  });

  const getWeather = async (q) => {
    setQuery("");
    setLoading(true);
    try {
      const apiRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=dfcc829ef9c31cbbd3f8fce9bf70b7e9`
      );
      const resJSON = await apiRes.json();
      setWeather({
        temp: resJSON.main.temp,
        condition: resJSON.weather[0].main,
        country: resJSON.country,
        city: resJSON.name,
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(query);
  };
  useEffect(() => {
    getWeather(location);
  }, [location]);
  return (
    <div>
      {!loading && !error ? (
        <div>
          <WeatherCard
            temp={weather.temp}
            condition={weather.condition}
            city={weather.city}
            country={weather.country}
            getWeather={getWeather}
          />
        </div>
      ) : loading ? (
        <div
          style={{
            display: "flex",
            width: "200px",
            height: "240",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PulseLoader />
        </div>
      ) : !loading && error ? (
        <div style={{ color: "black" }}>
          There is an error!
          <br /> <button onClick={() => setError(false)}>Reset</button>
        </div>
      ) : null}
    </div>
  );
};

export default WeatherEngine;
