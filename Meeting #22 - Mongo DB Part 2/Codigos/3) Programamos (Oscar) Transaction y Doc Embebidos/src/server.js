const express = require('express');
const {routerUsuarioFunction} = require('./routers/usuariosRouter');

const Server = (port = 3300, message= 'The server is ready') =>{

    /////////////////////////////////////////////////////////////
    // Variables 

    const server = express();


    /////////////////////////////////////////////////////////////
    // Global Middlewares

    server.use(express.json());
    server.use('/usuarios', routerUsuarioFunction());



    /////////////////////////////////////////////////////////////
    //Puerto

    server.listen( port , ()=>{
        console.log(`${message} in port ${port}`)
    })


}


module.exports= {Server}