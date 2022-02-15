import { useEffect, useState } from 'react';
import BusinessList from './Components/BusinessList';
import Spinner from './Components/Spinner';

export default function YelpSearch() {
  const [queryResults, setQueryResults] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [cityName, setCityName] = useState('las vegas nv');

  useEffect(() => {
    queryResults && setIsLoading(false);
  }, [queryResults]);

  async function handleYelpSubmit(e) {
    e.preventDefault();

    const netlifyURL = `/.netlify/functions/yelp`;

    setIsLoading(true);
    const response = await fetch(`${netlifyURL}?location=${cityName}`);
    const json = await response.json();
    setQueryResults(json);
  }

  return (
    <section className="yelp">
      <form onSubmit={handleYelpSubmit}>
        Search yelp for businesses by city
        <label>
          City Name:
          <input value={cityName} onChange={(e) => setCityName(e.target.value)}></input>
        </label>
        <button>Search yelp</button>
      </form>
      {isLoading ? <Spinner /> : <BusinessList list={queryResults} />}
    </section>
  );
}
