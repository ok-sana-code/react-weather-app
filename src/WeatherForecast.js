import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
export default function WeatherForecast(props){

function HandleResponse(response){
  console.log(response.data);
  return (response.data)
}
let longitude = props.coordinates.lon;
let latitude = props.coordinates.lat;
   const apiKey = "78d33d1c0b3d1c72b0e0425b1537a903";
   let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  
    axios.get(apiUrl).then(HandleResponse);
  
  return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Mon</div>
            <WeatherIcon code="01d" size={30} />
            <div className="WeatherForecast-temperature">
              <span className="WeatherForecast-temperature-max">18°</span>
              <span className="WeatherForecast-temperature-min">10°</span>
            </div>
          </div>
        </div>
      </div>
    );
} 