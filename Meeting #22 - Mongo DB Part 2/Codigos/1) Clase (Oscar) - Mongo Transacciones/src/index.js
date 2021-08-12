const { config } = require("dotenv");
const { initDatabase } = require("./config/connect");
const { ServerUp } = require("./server");



const main = async () =>{

    //////////////////////////////////////////////////////
    //Configuraciones

    //Inicia el proceso de configuracion y acceso a ".env"
    config();

    //Nos conectamos a la DB
    await initDatabase();

    await ServerUp(process.env.API_PORT)


}

main();