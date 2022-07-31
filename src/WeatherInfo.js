import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
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
            <div className="fload-left mt-1">
              <WeatherIcon code={props.date.icon} />
            </div>
            <div className="fload-left">
              <WeatherTemperature
                celsius={Math.round(props.date.temperature)}
              />
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
