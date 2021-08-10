const {config} = require('dotenv');
const { initDatabase } = require('./config/connect');
const { Server } = require('./servers');

const main = async () =>{

  //Podemos usar las variables de entorno
  config();

  //Nos conectamos a la DB de Mongo
  await initDatabase();

  //Levantamos al servidor
  Server(process.env.API_PORT)

}



main();