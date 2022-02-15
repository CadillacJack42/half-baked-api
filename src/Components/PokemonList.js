import React from 'react';

export default function PokemonList({ pokemon }) {
  console.log(pokemon);
  return pokemon ? (
    <div>
      {pokemon.results.map((pokemon, i) => {
        return (
          <div key={pokemon.pokemon + i}>
            <p>{pokemon.pokemon}</p>
            <img src={pokemon.url_image} width="100px"></img>
          </div>
        );
      })}
    </div>
  ) : null;
}
