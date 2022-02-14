import PokemonSearch from './PokemonSearch';
import YelpSearch from './YelpSearch';
import WeatherSearch from './WeatherSearch';
import Spinner from './Components/Spinner';
import './App.css';

function App() {
  return (
    <div className="App">
      <Spinner />
      <PokemonSearch />
      <YelpSearch />
      {/* stretch goal: <WeatherSearch /> */}
    </div>
  );
}

export default App;
