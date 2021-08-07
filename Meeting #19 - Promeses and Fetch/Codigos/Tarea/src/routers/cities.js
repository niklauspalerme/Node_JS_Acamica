const express = require('express');
const dotenv = require('dotenv');
const fetch = require('node-fetch');


//////////////////////////////////////////////////////////////////////////
// Variables

const data = require('../cities.json')


//////////////////////////////////////////////////////////////////////////
//Configuraiones

dotenv.config()


//NOTA #1: Esta es la formula para generar un numero aleatorio
// data [parseInt(Math.random()*data.length)]


//////////////////////////////////////////////////////////////////////////
//Funciones Servicios


//1
const getWeather = (city)=>{

    const key = process.env.OPEN_WEATHER_KEY;
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city.ciudad}&appid=${key}`;

     return fetch(URL).then(response=>response.json())
                      .then(dataCiudad=> {
                        return {
                            nombre: dataCiudad.name,
                            temperatura: dataCiudad.main.temp,
                            mensaje: dataCiudad.weather.pop().main
                          }
                      })
                      .catch(error=>console.log(error))


}


//2
const getCities = (req,resp)=>{

    const data = require('../cities.json');
   
    const ciudad1= data [parseInt(Math.random()*data.length)];
    const ciudad2= data [parseInt(Math.random()*data.length)];
    const ciudad3= data [parseInt(Math.random()*data.length)];

    const ciudades=[
       getWeather(ciudad1),
       getWeather(ciudad2),
       getWeather(ciudad3)
    ];

    Promise.all(ciudades).then(data => resp.send(data))
    
}


//////////////////////////////////////////////////////////////////////////
//Funcíon router

const getCitiesRouter = ()=>{

    /////////////////////////////////////
    // Configuramos el router

    const router = express.Router();


    /////////////////////////////////////
    // Endpoints

    router.get('/cities', getCities)


    return router;

}


module.exports= getCitiesRouter;