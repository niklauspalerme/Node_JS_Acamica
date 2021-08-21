const express = require('express');
const { paisRouter } = require('./routers/pais');
const { productosRouter } = require('./routers/productosRouters');


const ServerUp = (port = 8090, message= 'The server is ready') =>{

    /////////////////////////////////////////////////////////////
    // Variables 

    const server = express();


    /////////////////////////////////////////////////////////////
    // Global Middlewares

    server.use(express.json());
    server.use(express.urlencoded({extended: false}));
    server.use('/paises', paisRouter());



    /////////////////////////////////////////////////////////////
    //Puerto

    server.listen( port , ()=>{
        console.log(`${message} in port ${port}`)
    })


}


module.exports= {ServerUp}