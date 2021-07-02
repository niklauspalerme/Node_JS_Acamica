const fetch = require('node-fetch');
const express = require('express');
const { response } = require('express');
const server = express();

//Tarea --> API a utilizar --> https://openweathermap.org/



/////////////////////////////////////////////////////////////////////
// Variables


const ciudades = [
  {
    ciudad: 'Bogota',
    tempereatura: 0
  },
  {
    ciudad: 'London',
    tempereatura: 0
  },
  {
    ciudad: 'Cali',
    tempereatura: 0
  },
  {
    ciudad: 'buenos aires',
    tempereatura: 0
  },
  {
    ciudad: 'rosario',
    tempereatura: 0
  },
  {
    ciudad: 'Mar del plata',
    tempereatura: 0
  },
  {
    ciudad: 'Puerto Iguazu',
    tempereatura: 0
  },
  {
    ciudad: 'Mendoza',
    tempereatura: 0
  },
  {
    ciudad: 'Medellin',
    tempereatura: 0
  },
  {
    ciudad: 'Caracas',
    tempereatura: 0
  }
];

/////////////////////////////////////////////////////////////////////
//Funciomes


const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}




/////////////////////////////////////////////////////////////////////
// Middlewares

server.use(express.json());


/////////////////////////////////////////////////////////////////////
// Endpoints



///GET -> Mostramos la data de una ciudad
//http://localhost:8080/ciudad/salta
server.get('/ciudad/:nombre', (req,resp)=>{

  let ciudad= req.params.nombre

  console.log(random(0,9))

  const  climaCiudades = (ciudad) =>{

      return fetch(`http://api.weatherapi.com/v1/current.json?key=0af123443bcd4f4fb1c225806210107&q=${ciudad}`)
             .then(response=>response.json())
             .then(dataCiudad=> resp.status(200).json(dataCiudad))
             .catch(error=>console.log(error))
  }

  climaCiudades(ciudad);

})


///GET -> Mostramos la data de 3 ciuadades random
server.get('/ciudades/aleatorias', (req,resp)=>{

  let ciudad= req.params.nombre
  let arrayCiudades = []
  let ciudadesRandom = []

  while (arrayCiudades.length != 3){

    let randomNumber = random(0,9)

    if (!arrayCiudades.includes(randomNumber)){
      arrayCiudades.push(randomNumber);
    }
        
  }

  Promise.all([
    fetch(`http://api.weatherapi.com/v1/current.json?key=0af123443bcd4f4fb1c225806210107&q=${ciudades[arrayCiudades[0]].ciudad}`)
    .then(response => response.json()),
    fetch(`http://api.weatherapi.com/v1/current.json?key=0af123443bcd4f4fb1c225806210107&q=${ciudades[arrayCiudades[1]].ciudad}`)
    .then(response => response.json()),
    fetch(`http://api.weatherapi.com/v1/current.json?key=0af123443bcd4f4fb1c225806210107&q=${ciudades[arrayCiudades[2]].ciudad}`)
    .then(response => response.json())
  ])
  .then(data => {
    ciudadesRandom.push(data[0])
    ciudadesRandom.push(data[1])
    ciudadesRandom.push(data[2])

    resp.status(200.).json(ciudadesRandom);
  })
  .catch(error => {
    console.error(error);
    resp.status(502).json(error);
  })

})


/////////////////////////////////////////////////////////////////////
//Puerto

server.listen(8080,()=>{
  console.log("El servidor es 8080")
})










