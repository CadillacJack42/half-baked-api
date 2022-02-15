import React from 'react';

export default function ForecastList({ weather }) {
  return (
    <div>
      {weather ? (
        <div>
          <h3>{`Weather report for ${weather.name}`}</h3>
          <p>{weather.weather[0].description}</p>
          <p>{` The High temperature for today is : ${weather.main.temp_max} F`}</p>
          <p>{` The Low temperature for today is : ${weather.main.temp_min} F`}</p>
          <p>{` The Current temperature is : ${weather.main.temp} F, but feels like ${weather.main.feels_like} F`}</p>
          <p>{` The Current Humidity is : ${weather.main.humidity}%`}</p>
          <p>{`Winds at ${weather.wind.speed} MPH with gusts up to ${weather.wind.gust} from ${weather.wind.deg} degrees`}</p>
        </div>
      ) : null}
    </div>
  );
}
