import { useEffect, useState } from 'react';
import BusinessList from './Components/BusinessList';
import Spinner from './Components/Spinner';

export default function YelpSearch() {
  // you'll need to track your yelp search results, the loading state, and a form field for location with a default value.
  const [queryResults, setQueryResults] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [cityName, setCityName] = useState('las vegas nv');

  useEffect(() => {
    queryResults && setIsLoading(false);
  }, [queryResults]);

  async function handleYelpSubmit(e) {
    e.preventDefault();

    const netlifyURL = `/.netlify/functions/yelp`;

    // set the loading state to true
    setIsLoading(true);
    // use fetch to make a request to your netlify yelp function. Be sure to pass the search query as a query param in the URL
    const response = await fetch(`${netlifyURL}?location=${cityName}`);
    // put the jsonified data in state and set the loading state to false
    const json = await response.json();
    setQueryResults(json);
  }

  return (
    <section className="yelp">
      {/* make the fetch on submit */}
      <form onSubmit={handleYelpSubmit}>
        Search yelp for businesses by city
        {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
        <label>
          City Name:
          <input value={cityName} onChange={(e) => setCityName(e.target.value)}></input>
        </label>
        <button>Search yelp</button>
      </form>
      {/* Make a BusinessesList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
      {isLoading ? <Spinner /> : <BusinessList list={queryResults} />}
    </section>
  );
}
