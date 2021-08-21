const express = require('express');
const { productosRouter } = require('./routers/productosRouters');


const ServerUp = (port = 8090, message= 'The server is ready') =>{

    /////////////////////////////////////////////////////////////
    // Variables 

    const server = express();


    /////////////////////////////////////////////////////////////
    // Global Middlewares

    server.use(express.json());
    server.use(express.urlencoded({extended: false}));
    server.use('/productos', productosRouter());



    /////////////////////////////////////////////////////////////
    //Puerto

    server.listen( port , ()=>{
        console.log(`${message} in port ${port}`)
    })


}


module.exports= {ServerUp}