import { useEffect, useState } from 'react';
import Spinner from './Components/Spinner';
import ForecastList from './Components/ForecastList';

export default function WeatherSearch() {
  const netlifyURL = `/.netlify/functions/weather`;

  const [cityName, setCityName] = useState('las vegas');
  const [stateName, setStateName] = useState('nv');
  const [countryName, setCountryName] = useState('us');

  const [isLoading, setIsLoading] = useState(false);

  const [queryResults, setQueryResults] = useState('');

  useEffect(() => {
    queryResults && setIsLoading(false);
  }, [queryResults]);

  async function handleWeatherSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch(`${netlifyURL}?q=${cityName},${stateName},${countryName}}`);
    const json = await response.json();
    await setQueryResults(json);
  }

  return (
    <section className="weather">
      <form onSubmit={handleWeatherSubmit}>
        Search weather for a city
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
      {queryResults && isLoading ? <Spinner /> : <ForecastList weather={queryResults} />}
    </section>
  );
}
