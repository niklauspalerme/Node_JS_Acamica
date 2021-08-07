//////////////////////////////////////////////////////////////////////////
// Instanciamos

const express = require('express');
const fetch = require('node-fetch');
const getCitiesRouter = require('./routers/cities');
const dotenv = require('dotenv');


//////////////////////////////////////////////////////////////////////////
//Funcion Principal


const main = () =>{

    ///////////////////////////
    //Variables y configs
    
    const server = express();
    dotenv.config()

    ///////////////////////////
    //Middlewares

    server.use(express.json());
    server.use(getCitiesRouter())


    ///////////////////////////
    // Port Listener
    
    server.listen(process.env.PORT, ()=>{
        console.log(`Servidor Activo en ${process.env.PORT}`);
    })


}

main();


//Nota: Para poder resolver el ejercicio , la promesa se debe resolver dentro del then
//retornando como resultado el reso.json() . Si no se hace asi
// la promesa va estar siempre pendiente y nunca te dara la respuesta