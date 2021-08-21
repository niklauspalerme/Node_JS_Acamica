/////////////////////////////////////////////////////////////////////////
//Instancias

const express = require('express')
const albumsQueries = require('../services/albumsQueries');


/////////////////////////////////////////////////////////////////////////
//Configuraciones


//Configuración para el uso de rutas
const router = express.Router();


/////////////////////////////////////////////////////////////////////////
//Ruteo


//GET -> http://localhost:8080/albums
router.get('/', async (req, resp) =>{

    let albums = await albumsQueries.findAllAlbums()
    resp.status(200).json(albums)
   
});


//POST -> http://localhost:8080/albums
router.post('/', async (req, resp) =>{

    const {nombre,banda_id,fechaPublicacion} = req.body;

    await albumsQueries.createAlbum(nombre,banda_id,fechaPublicacion);

    resp.status(201).json({"Messages": "Se creo el album con exito!"});

} );


//PUT -> http://localhost:8080/albums/:id
router.put('/:id', async (req, resp) =>{

    const {id} = req.params;
    const {nombre,banda_id,fechaPublicacion} = req.body;

    let response = await albumsQueries.updateAlbum(id,nombre,banda_id,fechaPublicacion);

    console.log(response);

    if(response[1] === 0 ){
        resp.status(400).json(response);
    }else{
        resp.status(200).json({"Messages": "Se modficio el album con exito!"});
    }

} );


//DELETE -> http://localhost:8080/albums/:id
router.delete('/:id', async (req, resp) =>{

    const {id} = req.params;

    await albumsQueries.deleteAlbum(id);

    resp.status(204).json();
} );


/////////////////////////////////////////////////////////////////////////
//Exportamos

module.exports = router;