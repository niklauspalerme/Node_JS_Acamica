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
    console.log('Connection has been established successfully.');

    //Colocamos la conexión en una variable 
    //Para despues poder acceder a ella
    db = connection;

  }catch(error){
    console.error('Unable to connect to the database:', error);
  }
  
}

//2) Obtenemos el modelo
function getModel(name) {
  if (!models[name]) {
    global.console.log('No existe');
    return null;
  }
  return models[name]
}


//3) Devolvemos la conexión
function dbConexion (){
  return db;
}

module.exports = {
  connect,
  getModel,
  dbConexion
};
