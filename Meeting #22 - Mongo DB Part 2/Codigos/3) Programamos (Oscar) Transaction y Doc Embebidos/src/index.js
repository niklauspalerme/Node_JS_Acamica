const {config} = require('dotenv');
const {initDatabase} = require('./db/conexion');
const {Server} = require ('./server');

const main = async () =>{

    /////////////////////
    // Confg

    config();

    //////////////////////
    // DB

    await initDatabase();

    //////////////////////
    // Server

    Server(process.env.API_PORT);

}

main();