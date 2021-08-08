//////////////////////////////////////////////////////////////////////////
// Instanciamos
const express = require('express');
const server = express()
//const getMovies = require('./routers/peliculas');
const PORT = 9090;

const main = () =>{

    const {getMoviesRouters} = require('./routers/peliculas');

    server.use(express.json());
    server.use(getMoviesRouters());


    server.listen(9090, ()=>{
        console.log(`Escuchando en el puerto: ${PORT}`);
    })

}

main();

