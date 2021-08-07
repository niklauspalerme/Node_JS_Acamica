const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const ruta = path.join(__dirname, '..', 'cities.json');
console.log(ruta);
const data = require(ruta);

async function getWeather(city) {
  const key = process.env.OPENWEATER_KEY;
  const cityName = city.name;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric&lang=es`;
  try {
    let respuesta;
    try { // este
      respuesta = await fetch(URL);
    } catch (error) {  // este
      console.error('se rompio la petición');
      return {};
    } // este
    const json = await respuesta.json();
    if (!json.main) {
      console.log(`No viene el main para la ciudad ${cityName}`);
      return { nombre: cityName };
    }
    return {
      nombre: json.name,
      temperatura: json.main.temp,
      mensaje: json.weather.pop().main
    };
  } catch (error) {
    console.error(error)
    return { nombre: cityName };
  }
}

function getCities(req, res) {
  const ciudad1 = data[parseInt(Math.random() * data.length)];
  const ciudad2 = data[parseInt(Math.random() * data.length)];
  const ciudad3 = data[parseInt(Math.random() * data.length)];
  const ciudades = [
    getWeather(ciudad1),
    getWeather(ciudad2),
    getWeather(ciudad3),
  ];
  Promise.all(ciudades)
    .then(data => res.send(data))
    ;
}


function getCountriesRouter() {
  const router = express.Router();

  router.get('/cities', getCities);


  return router;
}

module.exports = {
  getCountriesRouter
};
