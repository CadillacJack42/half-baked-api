const fetch = require('node-fetch');

require('dotenv').config();

exports.handler = async (event) => {
  const pokemonURL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex/';
  try {
    const response = await fetch(`${pokemonURL}?pokemon=${event.queryStringParameters.pokemon}`);

    const json = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(json),
    };
  } catch (error) {
    alert(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
