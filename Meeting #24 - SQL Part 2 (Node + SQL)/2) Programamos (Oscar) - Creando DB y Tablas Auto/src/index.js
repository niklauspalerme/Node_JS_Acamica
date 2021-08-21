const { config } = require('dotenv');
const { connect } = require('./model/index.js');
const { initialize } = require('./config/db.js');
const { ServerUp } = require('./server.js');

async function main() {

    try{

        //////////////////////////////////////////////////////////
        //Accedemos al .env

        config();


        /////////////////////////////////////////////////////////
        //Variables

        const PORT = process.env.PORT || 3000;
        const {DB_USERNAME,DB_PASSWORD,DB_NAME, DB_PORT, DB_HOST,} = process.env;


        /////////////////////////////////////////////////////////
        //DB - Configuraciones

        //Hago la conexión a la DB y sincronizacion de las tablas
        await connect(DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME);
        //Inserto un usuario beta
        await initialize();



        /////////////////////////////////////////////////////////
        //Server

        ServerUp(PORT);



    }catch(error){

        console.log(error);
    }
}

main();

