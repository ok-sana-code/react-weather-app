import React from "react";
import FormattedDate from "./FormattedDate"
import "./Weather.css";
import axios from "axios";
import { useState } from "react";

export default function Weather(props) {
  const [weather, setWeather] = useState({ redy: false });

  function DisplayWeather(response) {
    setWeather({
      redy: true,
      name: response.data.name,
      date: new Date(response.data.dt*1000),
      icon: response.data.weather[0].icon,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
 
  }
  if (weather.redy) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                className="form-control"
                type="search"
                placeholder="Type a city.."
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                className="btn btn-primary w-100"
                type="submit"
                value="Search"
              />
            </div>
          </div>
        </form>
        <h1>{weather.name}</h1>
        <ul>
          <li><FormattedDate date={weather.date}/></li>
          <li className="text-capitalize">{weather.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="d-flex">
              <div className="fload-left">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="Cloudy"
                />
              </div>
              <div className="WeatherTemperature fload-left">
                <span className="temperature">
                  {Math.round(weather.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const ApiKey = "78d33d1c0b3d1c72b0e0425b1537a903";
    let Url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${ApiKey}&units=metric`;
    axios.get(Url).then(DisplayWeather);
    return "Loading...";
  }
}
