const Sequelize = require("sequelize");
const { createProductModel } = require("./models/product");
const { createUserModel } = require("./models/users");

//Creamos una varabiable para acceder a los modelos
const models = {};

//Creamos una variable para devolver la conexion
let db = null

//1) Función para conectar
const connect = async (host, port, username, password, database) =>  {
 
  try{

    //Conectamos
    const connection = new Sequelize({
      database,
      username,
      password,
      host,
      port,
      dialect: 'mysql', 
    });
    

    //Guardamos los modelos 
    models.User = createUserModel(connection);
    models.Product = createProductModel(connection);

    //Autentificamos la conexion
    await connection.authenticate();
    //Sincronizamos los modelos
    await connection.sync();

    //Colocamos la conexión en una variable 
    //Para despues poder acceder a ella
    db = connection;
   
    console.log('La Base de Datos existe.....')
    console.log('Connection has been established successfully.....');

    

  }catch(error){
    
    //Si da error al conectar con la DB , ya que no existe
    if (error.original.errno === 1049){

      //a-Creamos una conexión simple
      let otraConnection = new Sequelize({
        username,
        password,
        host,
        port,
        dialect: 'mysql', 
      });

      //b-Creamos la BD con la conexión simple
      await otraConnection.query(`CREATE DATABASE ${database}`)
          .then(() => {
            console.error('Database doesnt exists, lets create a new one.....')
            console.log('Connection has been established successfully.....')
          })
        	.catch(errorx => console.error('Unable to connect to the database: ', errorx));

      //c-Mandamos la conexion simple para reescribirla y hacerla mas completa
      //c-Y los atributos necesarios para eso
      await sincronizacionDeTablas(otraConnection, host, port, username, password, database);

	  } 

    

  }
  
}

const sincronizacionDeTablas =  async (otraConnection, host, port, username, password, database) => {

  try{

     otraConnection = new Sequelize({
      database,
      username,
      password,
      host,
      port,
      dialect: 'mysql', 
    });
    

    models.User = createUserModel(otraConnection);
    models.Product = createProductModel(otraConnection);

    await otraConnection.authenticate();
    await otraConnection.sync();

    db = otraConnection;

  }catch(error){

    console.log("Error aca");
  }
}

//3) Obtenemos el modelo
function getModel(name) {
  if (!models[name]) {
    global.console.log('No existe');
    return null;
  }
  return models[name]
}


//4) Devolvemos la conexión
function dbConexion (){
  return db;
}

module.exports = {
  connect,
  getModel,
  dbConexion
};
