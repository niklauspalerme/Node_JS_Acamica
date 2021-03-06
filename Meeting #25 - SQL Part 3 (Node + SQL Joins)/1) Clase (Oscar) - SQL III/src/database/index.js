const Sequelize = require("sequelize");
const { createBandModel } = require("./models/band");
const { createAlbumModel } = require("./models/album");
const { createSongModel } = require("./models/song");
const { createAlbumSongModel } = require("./models/album_song");


//////////////////////////////////////////////////////////////
// Variabñes


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
  models.Band = createBandModel(connection);
  models.Album = createAlbumModel(connection);
  models.Song = createSongModel(connection);
  models.AlbumSong = createAlbumSongModel(connection, models.Album, models.Song);


  // Síncronizamos las relaciones
  models.Band.hasMany(models.Album);  // 1-N
  models.Album.belongsTo(models.Band); //N-1
  models.Album.belongsToMany(models.Song, { through: models.AlbumSong }); //N-M --> AlbumSong es la tabla intermedia
  models.Song.belongsToMany(models.Album, { through: models.AlbumSong }); //M-N --> AlbumSong es la tabla intermedia
  
  try {
    await connection.authenticate();
    await connection.sync({});
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
