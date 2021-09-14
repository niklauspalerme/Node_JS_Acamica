const Sequelize = require("sequelize");
const { createContactoModel } = require("./models/contacto");
const { createContactoUserModel } = require("./models/contactoi_user");
const { createUserModel } = require("./models/users");


//////////////////////////////////////////////////////////////
// Variables


const models = {};



//////////////////////////////////////////////////////////////
// Funciones


//1) Creamos la conexión y sync los modelos
async function connect(host, port, username, password, database) {
 
  //Creamos la conexión
  const connection = new Sequelize({
    database,
    username,
    password,
    host,
    port,
    dialect: 'mariadb',
    // logging: false
  });


  //Guardamos los Modelos en la conexión y le mandamos la conexión
  models.User = createUserModel(connection);
  models.Contacto = createContactoModel(connection);
  models.ContactoUser = createContactoUserModel(connection, models.User, models.Contacto)


  // Síncronizamos las relaciones
  models.User.belongsToMany(models.Contacto, { through: models.ContactoUser }); //N-M --> AlbumSong es la tabla intermedia
  models.Contacto.belongsToMany(models.User, { through: models.ContactoUser }); //M-N --> AlbumSong es la tabla intermedia
  
  try {
    await connection.authenticate();
    await connection.sync({force:true});
    console.log('Connection has been established successfully.');
    return true;
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    return false;
  }
}

//2) Obtenemos la conexión de un modelo especifico
function getModel(name) {
  if (models[name]) {
    return models[name];
  } else {
    console.error(`Model ${name} does not exists.`);
    return null;
  }
}



//////////////////////////////////////////////////////////////
// Exportamos

module.exports = {
  connect,
  getModel
};
