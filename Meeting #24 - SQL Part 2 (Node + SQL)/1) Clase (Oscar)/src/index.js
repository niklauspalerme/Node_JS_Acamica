const { config } = require('dotenv');
const { connect } = require('./model/index.js');
const { initialize } = require('./config/db.js');

async function main() {

    try{

        //////////////////////////////////////////////////////////
        //Accedemos al .env

        config();


        /////////////////////////////////////////////////////////
        //Variables

        const {DB_USERNAME,DB_PASSWORD,DB_NAME, DB_PORT, DB_HOST,} = process.env;


        /////////////////////////////////////////////////////////
        //Configuraciones 

        //Hago la conexión a la DB y sincronizacion de las tablas
         const db = await connect(DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME);
        //Inserto un usuario beta
        await initialize();
        
        
        /////////////////////////////////////////////////////////
        //Usamos el SQL

        const usuario = await db.query("SELECT * FROM users", { type: db.QueryTypes.SELECT })
        console.log(usuario);


    }catch(error){

        console.log(error);
    }
}

main();

