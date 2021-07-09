const express = require('express');
const server = express();


////////////////////////////////////////////////////////////////////
//vairables

const PORT = 8080


////////////////////////////////////////////////////////////////////
//Middlewares

//Middleware Global
server.use(express.json())

//Middleware Local
const crear = require('./crear');
const listar = require('./listar');
const borrar = require('./borrar')
const actualizar = require('./actualizar')



////////////////////////////////////////////////////////////////////
//Puerto

server.listen(PORT, () => {
    console.log(`Puerto disponible ${PORT}`);
});



////////////////////////////////////////////////////////////////////
//Endpoints


//Crear --> POST http://localhost:8080/crear
//NOTA: El body esta al final de este file en comment
server.post('/crear', crear, (req, res) => {


});


//Listar -->  GET http://localhost:8080/platos
server.get('/platos', listar.mostrar, (req, res) => {

});


//Eliminar -->  DELETE http://localhost:8080/platos/platoId
server.delete('/platos/:platoId', borrar, (req, res) => {

});

//Actualizar --> UPDATE http://localhost:8080/platos/platoId
server.put('/platos/:platoId', actualizar.update, (req, resp) => {

});







////////////////////////////////////////////////////////////////////
// Body - JSON Example 

/*
{ 
  "plato": "Hamburguesa", 
  "precio": 2000, 
  "tipo_de_plato": "Principal"
}

{ 
  "plato": "Arepa", 
  "precio": 500, 
  "tipo_de_plato": "Principal"
}


*/