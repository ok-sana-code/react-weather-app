import React from "react";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import axios from "axios";
import { useState } from "react";

export default function Weather(props) {
  const [weather, setWeather] = useState({ redy: false });
  const [city, setCity] = useState(props.defaultCity);

  function DisplayWeather(response) {
    setWeather({
      redy: true,
      name: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  }
function search(){
     const ApiKey = "78d33d1c0b3d1c72b0e0425b1537a903";
     let Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;
     axios.get(Url).then(DisplayWeather);
}
function HadleSubmit(event){
  event.preventDefault();
  search(city)
}

function HandleCityChange(event){
  setCity(event.target.value)

}


  if (weather.redy) {
    return (
      <div className="Weather">
        <form onSubmit={HadleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                className="form-control"
                type="search"
                placeholder="Type a city.."
                autoFocus="on"
                onChange={HandleCityChange}
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
        <WeatherInfo date={weather} />
      </div>
    );
  } else {
 search()
    return "Loading...";
  }
}
