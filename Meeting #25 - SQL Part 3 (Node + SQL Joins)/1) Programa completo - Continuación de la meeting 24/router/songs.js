/////////////////////////////////////////////////////////////////////////
//Instancias

const express = require('express')
const songsQueries = require('../services/cancionesQueries');


/////////////////////////////////////////////////////////////////////////
//Configuraciones


//Configuración para el uso de rutas
const router = express.Router();


/////////////////////////////////////////////////////////////////////////
//Ruteo


//GET -> http://localhost:8080/canciones
//GET -> http://localhost:8080/canciones?banda=soda estereo
router.get('/', async (req, resp) =>{

    const nombre = req.query.banda;

    //Mostrar Todas
    if(nombre === undefined){
        let canciones = await songsQueries.findAllSongs()
        resp.status(200).json(canciones)
    }
    //Mostrar por banda/artista
    else{
        let canciones = await songsQueries.findSongByArtist(nombre)
        resp.status(200).json(canciones)
    }

});


//POST -> http://localhost:8080/canciones
router.post('/', async (req, resp) =>{

    const {nombre,duracion,banda_id,album_id,fechaPublicacion} = req.body;

    await songsQueries.createSong(nombre,duracion,banda_id,album_id,fechaPublicacion);

    resp.status(201).json({"Messages": "Se creo la canción con exito!"});

} );


//GET http://localhost:8080/canciones/:id
router.get('/:id', async (req, resp) =>{

    const {id} = req.params;
    let response = await songsQueries.findSongDetails(id)
    console.log(response);
    resp.status(200).json(response);

} );

//PUT http://localhost:8080/canciones/:id
router.put('/:id', async (req, resp) =>{

    const {id} = req.params;
    const {nombre,duracion,banda_id,album_id,fechaPublicacion} = req.body;
    
    let response = await songsQueries.updateSong(id,nombre,duracion,banda_id,album_id,fechaPublicacion)
    console.log(response);

    if(response[1] === 0 ){
        resp.status(400).json(response);
    }else{
        resp.status(201).json({"Messages": "Se nodificó la canción con exito!"});
    }

} );

//DELETE http://localhost:8080/canciones/:id
router.delete('/:id', async (req, resp) =>{

    const {id} = req.params;

    await songsQueries.deleteSong(id);

    resp.status(204).json();
} );


/////////////////////////////////////////////////////////////////////////
//Exportamos

 module.exports = router;