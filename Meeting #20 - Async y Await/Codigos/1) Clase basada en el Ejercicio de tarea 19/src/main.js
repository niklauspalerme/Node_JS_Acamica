const dotenv = require('dotenv')
const express = require('express');
const { getCountriesRouter } = require('./routers/cities');

function main() {
  dotenv.config();
  const server = express();
  server.use(express.json());
  server.use(getCountriesRouter());
  server.listen(9090, () => console.log('Server is running...'))
}

main();

