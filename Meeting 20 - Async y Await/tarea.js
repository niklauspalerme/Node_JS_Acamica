const fetch = require('node-fetch');
const express = require('express');
const server = express();

//Tarea

//API a utilizar
//https://openweathermap.org/
//Aleatorio 
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//Crea cuenta URL del clima
//Impmentar el llamado con un fetch dentro del get



////CIudades

let ciudades = ["Buenos Aires", "Bogota", "Anzoategui", "Carilo"];



server.use(express.json());



server.get('/ciudades', (req,resp)=>{
  resp.status(200).json(ciudades);

})

server.listen(8080,()=>{
  console.log("El servidor es 8080")
})














///////////////////////////////////////////////////
let usuario = "niklauspalerme"

const getGitHubUser = (usuario) => {
   return fetch(`https://api.github.com/users/${usuario}`)
  .then(resp=>{return resp.json()}) // La respuesta de la API te retorna una promesa con todo headers,body,etc
  .then( data =>{console.log(data)}) // Para poder obtener los datos debes anidarle otro then para tener el response de la 2da promesa
  .catch(error=>{console.log(error)})// Este catch maneja el error/exception de las 2 pronmesas
}

getGitHubUser(usuario);


//Ejemplo #2
//Traer los followers de un usuario
const getGitHubUserFollwers = userName => {
  return fetch(`https://api.github.com/users/${userName}`)
  .then(response => response.json())
  .then(data => {
    // Traemos los followers
    return fetch(data.followers_url)
    .then(responseFollowers => responseFollowers.json())
  })
  .catch(error => console.error(error));
}


getGitHubUserFollwers(usuario)
.then(dataFollowers => console.log(dataFollowers))
.catch(error => console.error(error));

