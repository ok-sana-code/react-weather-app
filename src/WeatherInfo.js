import React from "react";
import FormattedDate from "./FormattedDate";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.date.name}</h1>
      <ul>
        <li>
          <FormattedDate date={props.date.date} />
        </li>
        <li className="text-capitalize">{props.date.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div className="fload-left">
              <img src={props.date.iconUrl} alt={props.date.description} />
            </div>
            <div className="WeatherTemperature fload-left">
              <span className="temperature">
                {Math.round(props.date.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.date.humidity}%</li>
            <li>Wind: {props.date.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
