import { useEffect, useState } from 'react';
import PokemonList from './Components/PokemonList';
import Spinner from './Components/Spinner';

export default function PokemonSearch() {
  const netlifyURL = `/.netlify/functions/pokemon`;

  const [queryResults, setQueryResults] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formName, setformName] = useState('snorlax');

  useEffect(() => {
    queryResults && setIsLoading(false);
  }, [queryResults]);

  async function handlePokemonSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch(`${netlifyURL}?pokemon=${formName}`);
    const json = await response.json();
    setQueryResults(json);
  }

  return (
    <section className="pokemon">
      <form onSubmit={handlePokemonSubmit}>
        Search pokemon by
        <label>
          Name :<input value={formName} onChange={(e) => setformName(e.target.value)}></input>
        </label>
        <button>Get pokemon</button>
      </form>
      {isLoading ? <Spinner /> : <PokemonList pokemon={queryResults} />}
    </section>
  );
}
