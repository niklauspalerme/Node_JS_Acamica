const { getModel } = require(".");

async function initialize() {

  try{

    const Pais = getModel('Pais');
    const Cancion = getModel('Cancion');
    const Banda = getModel('Banda');
    const Album = getModel('Album');

    const resultPais = await Pais.findAll();
    const resultCancion = await Cancion.findAll();
    const resultBanda = await Banda.findAll();
    const resultAlbum = await Album.findAll();


    if (resultPais.length===0 && resultCancion.length === 0 && resultBanda.length === 0  && resultAlbum.length===0) {

      console.log("Entro aca")
       await Pais.create({
        nombre: 'Venezuela'
      });

      await Cancion.create({
        nombre:"Dime como tu quieras",
        duracion: 430,
        banda_id: 1,
        album_id: 1,
        fechaPublicacion: '20150101'
      })

      await Banda.create({
        nombre: "Los Mesoneros",
        integrantes: 3,
        fechaInicio: '20080101',
        pais_id: 1
      })

      await Album.create({
        nombre: "Pangea",
        banda_id: 1,
        fechaPublicacion: '20150101'
      })


    }

  }catch(error){
    console.log(error)
  }

  
}

module.exports = {
  initialize
};
