import React from "react";
import "./Weather.css";
export default function Weather() {
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
            <input className="btn btn-primary" type="submit" value="Search" />
          </div>
        </div>
      </form>
      <h1>Lviv</h1>
      <ul>
        <li>Monday 10:41</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Cloudy"
          />
          20°C
        </div>
        <div className="col-6">
          <ul>
            <li>Presipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
