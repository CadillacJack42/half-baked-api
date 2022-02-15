const fetch = require('node-fetch');

require('dotenv').config();

exports.handler = async (event) => {
  const geoCodeURL = `http://api.openweathermap.org/geo/1.0/direct?q=${event.queryStringParameters.q}&limit=1&appid=${process.env.WEATHER_API_KEY}`;
  try {
    const response = await fetch(geoCodeURL);
    const json = await response.json();

    const lat = json[0].lat;
    const lon = json[0].lon;
    const weatherApiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=imperial`;

    const data = await fetch(weatherApiURL);
    const jsonData = await data.json();

    return {
      statusCode: 200,
      body: JSON.stringify(jsonData),
    };
  } catch (error) {
    alert(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
