const fetch = require('node-fetch');

require('dotenv').config();

exports.handler = async (event) => {
  const yelpURL = 'https://api.yelp.com/v3/businesses/search';
  try {
    const response = await fetch(`${yelpURL}?location=${event.queryStringParameters.location}`, {
      headers: {
        Authorization: `Bearer ${process.env.YELP_API_KEY}`,
      },
    });
    const json = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(json),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
