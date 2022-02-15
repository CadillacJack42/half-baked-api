import { useState } from 'react';

export default function WeatherSearch() {
  // you'll need to track your weather search results, the loading state, and a form field for location with a default value.
  const netlifyURL = `/.netlify/functions/weather`;

  const [cityName, setCityName] = useState('las vegas');
  const [stateName, setStateName] = useState('nv');
  const [countryName, setCountryName] = useState('us');

  const [isLoading, setIsLoading] = useState(false);

  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

  const [queryResults, setQueryResults] = useState('');

  async function handleWeatherSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch(`${netlifyURL}?q=${cityName},${stateName},${countryName}}`);
    const json = await response.json();
    setQueryResults(json);
    console.log(json);
  }

  return (
    <section className="weather">
      {/* make the fetch on submit */}
      <form onSubmit={handleWeatherSubmit}>
        Search weather for a city
        {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
        <label>
          City Name : <input value={cityName} onChange={(e) => setCityName(e.target.value)}></input>
        </label>
        <label>
          State Name :{' '}
          <input value={stateName} onChange={(e) => setStateName(e.target.value)}></input>
        </label>
        <label>
          Country Name :{' '}
          <input value={countryName} onChange={(e) => setCountryName(e.target.value)}></input>
        </label>
        <button>Get weather</button>
      </form>
      {/* Make a ForecastList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
    </section>
  );
}
