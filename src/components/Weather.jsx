import React from "react";
import "./weather.css";

function Weather(props) {
  if (props.data.city === undefined) {
    return (
      <div>
        <h1>Oops!! Error :)</h1>
        <h2>Please check the spelling and try again</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <a href="https://twitter.com/prathkum">@Pratham</a>
      <h1>3 days weather forecast report of {props.data.city.name}</h1>
      <hr />
      <div className="main-section">
        {props.data.list.map((weatherInfo) => {
          return (
            <div className="weather-info">
              <p className="current-temp">
                {Math.round(weatherInfo.main.temp - 273.15)}
                <sup>o</sup>C
              </p>
              <p className="time">
                <span>As of</span> {weatherInfo.dt_txt.slice(5, 19)}
              </p>
              <div className="weather-icon-container">
                <img
                  className="icon"
                  src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`}
                  alt=""
                />
                <p className="weather-desc">
                  {weatherInfo.weather[0].description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Weather;
