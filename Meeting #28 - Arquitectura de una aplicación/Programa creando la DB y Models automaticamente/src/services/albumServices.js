///////////////////////////////////////////////////////////
//Instancias

const sequelize = require('../config/connect');
const albumModel = require('../models/albumModel');
const banda = require ('../models/bandaModel');


///////////////////////////////////////////////////////////
//Funciones ORM


//1 - Obtener todas los albums
const getAllAlbums = async () =>{
    return await albumModel.findAll();
}


//2 - Crea un album
const createAlbum = async (nombre,banda_id,fechaPublicacion)=>{

    await sequelize.sync();

    try{

        const response = await albumModel.create({
            nombre,
            banda_id,
            fechaPublicacion
        });
    
        console.log("Log de creacion en TRY:" ,response.toJSON())

    }catch{

        const response = await albumModel.create({
            nombre,
            banda_id,
            fechaPublicacion
        });

        console.log("Log de Nico: ", response);
        console.log("Log de creacion CATCH:" ,response.toJSON())
    }

   

}


//3 - Update un album
const updateAlbum =  async (id,nombre,banda_id,fechaPublicacion) =>{

   let album = await albumModel.findOne({
       where:{
           id
       }
   })

   album.nombre = nombre;
   album.banda_id= banda_id;
   album.fechaPublicacion = fechaPublicacion

   await album.save()
}


//4 - Eliminar una cancion
const deleteAlbum =  async (id) => {

    let album = await albumModel.findOne({
      where: {
        id
      }
    });
  
    await album.destroy();
  
  } 

//5 - Detalles del album
const findAlbumDetails = async (id) =>{

    return await albumModel.findOne({
        include:{
            model: banda
        },
        where:{
            id
        }
    })

}


///////////////////////////////////////////////////////////
//Exportamos las funciones ORM

module.exports = {
    getAllAlbums,
    createAlbum,
    updateAlbum,
    deleteAlbum,
    findAlbumDetails
}