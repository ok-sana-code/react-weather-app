import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function Fahrenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a onClick={showFahrenheit} href="/">
            °F
          </a>
        </span>
      </div>
    );
  } else
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Fahrenheit()}</span>
        <span className="unit">
          <a onClick={showCelsius} href="/">
            °C{" "}
          </a>{" "}
          | °F
        </span>
      </div>
    );
}
