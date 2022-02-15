import PokemonSearch from './PokemonSearch';
import YelpSearch from './YelpSearch';
import WeatherSearch from './WeatherSearch';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Super Awesome API App Thingy</h2>
      <div className="api-container">
        <PokemonSearch />
        <YelpSearch />
        <WeatherSearch />
      </div>
    </div>
  );
}

export default App;
