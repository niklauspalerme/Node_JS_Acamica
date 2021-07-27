///////////////////////////////////////////////////////////
//Instancias

const cancionModel = require('../models/cancionModel');
const album = require('../models/albumModel');
const sequelize = require ('../db/connect');


///////////////////////////////////////////////////////////
//Funciones ORM


//1 - Obtener todas las canciones
const getAllSongs = async () => {
  return await cancionModel.findAll(); 
}


//2 - Crear una canción
const createSong = async (nombre,duracion,banda_id,album_id,fechaPublicacion)=>{

  await sequelize.sync();

  const response = await cancionModel.create({
    nombre,
    duracion,
    banda_id,
    album_id,
    fechaPublicacion
  });

  console.log(response.toJSON());

}


//3- Update una cancion
const updateSong = async (id,nombre,duracion,banda_id,album_id,fechaPublicacion)=>{

  let cancion = await cancionModel.findOne({
    where:{
      id
    }
  })

  cancion.nombre = nombre;
  cancion.duracion = duracion;
  cancion.banda_id = banda_id;
  cancion.album_id = album_id;
  cancion.fechaPublicacion = fechaPublicacion;

  await cancion.save()

}


//4 - Eliminar una cancion
const deleteSong =  async (id) => {

  let cancion = await cancionModel.findOne({
    where: {
      id
    }
  });

  await cancion.destroy();

} 

//5 - detalles cancion
const findSongDetails = async (id) =>{

  return await cancionModel.findOne({
    where:{
      id
    },
    include:{
      model: album
    }
  })
  
}


///////////////////////////////////////////////////////////
//Exportamos las funciones ORM


module.exports = {
  getAllSongs,
  createSong,
  updateSong,
  deleteSong,
  findSongDetails
};