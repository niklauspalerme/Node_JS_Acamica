//Fetch es una función para acceder a recursos del servidor de manera asíncrona,
//basado en promesas.Nos va a permitir realizar llamadas HTTP a
//cualquier lugar y capturar su respuesta para disponer de la información.
//Se debe Instalar la librería con NPM
//npm i node-fetch
//Incluirla en tu código fuente:
//const fetch = require('node-fetch');
//NOTA: Para el uso del then es necesario usar 2 then
//Ya que con el fetch debemos manejar 2 promesas
//NOTA #2: El Fetch mas tiempo en ejecutarse y resolver la promesa
//Por eso cuando se la haga un console.log directo saldra Promise <<Pendind>>

///////////////////////////////////////////////////////////////////////////////
// Ejericicio #1

const fetch = require('node-fetch');

//API a utilizar --> https://api.github.com/users/ + username

let usuario = "niklauspalerme"

const getGitHubUser = (usuario) => {
   return fetch(`https://api.github.com/users/${usuario}`)
  .then(resp=> // 1) El primer then te retorna datos del request (headers, body,etc)
    resp.json()) // Lo debes transformar a json para poder manipular la data
  .then( data => //2)  Para poder obtener los datos debes anidarle otro then para tener el response de la 2da promesa
    console.log("Dato del user - Ejercicio #1: ",data)) 
  .catch(error=>console.log(error))// Este catch maneja el error/exception de las 2 pronmesas
}

getGitHubUser(usuario);



///////////////////////////////////////////////////////////////////////////////
// Ejericicio #2 -Promesas Encadenas (utilizan varias operaciones de then)

//Luego de consumir la api de githhub. Debes consumir otra url que te traiga
//En este caso se escogio el de followers que tenga la cuenta

const getGitHubUserFollwers = userName => {

  //1) Fetch - Traemos los datos del usuario
  return fetch(`https://api.github.com/users/${userName}`)
  .then(response => response.json()) 
  .then(usuario => {
    //2) Fetch -  Traemos los datos de los followers proporcionado por los datos del usuario
    return fetch(usuario.followers_url)
    .then(responseFollowers => responseFollowers.json())
    .then(dataFollowers => console.log(dataFollowers))
    .catch(errorFollowers => console.log(errorFollowers))
  })
  .catch(error => console.error(error));
}


getGitHubUserFollwers(usuario)
//.then(dataFollowers => console.log(dataFollowers))
//.catch(error => console.error(error));

//NOTA: Tambien se puede obviar el 2do then y catch del fetch de followers_url
//y colocarlos afuera de la funcion como tenemos en comments
