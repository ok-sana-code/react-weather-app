import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function WeatherForecastDay(props) {
 
function MaxTemperature(){
    return Math.round(props.date.temp.max);
}
function MinTemperature() {
  return Math.round(props.date.temp.min);
}
function day(){
    let date = new Date(props.date.dt*1000);
    let day = date.getDay();
    let days =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
}


  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.date.weather[0].icon} size={30} />
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max">
          {MaxTemperature()}°
        </span>
        <span className="WeatherForecast-temperature-min">
          {MinTemperature()}°
        </span>
      </div>
    </div>
  );
}
