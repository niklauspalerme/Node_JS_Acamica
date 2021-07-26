/////////////////////////////////////////////////////////////////////////
//Instancias

const express = require('express');
const albumServices = require('../services/albumServices');


/////////////////////////////////////////////////////////////////////////
//Configuraciones


//Configuración para el uso de rutas
const router = express.Router();


/////////////////////////////////////////////////////////////////////////
//Ruteo


//1) GET -> http://localhost:3001/albums
router.get('/', async (req, resp) =>{

    let response = await albumServices.getAllAlbums()    
    resp.status(200).json(response)
    
});


//2) POST -> http://localhost:3001/albums
router.post('/', async (req, resp) =>{

    const {nombre,banda_id,fechaPublicacion} = req.body;
    await albumServices.createAlbum(nombre,banda_id,fechaPublicacion);
    resp.status(201).json({"Messages": "Se creo el album con exito!"});

} );


//3) PUT -> http://localhost:3001/albums/id
router.put('/:id', async (req, resp) =>{

    const {id} = req.params;
    const {nombre,banda_id,fechaPublicacion} = req.body;
    await albumServices.updateAlbum(id,nombre,banda_id,fechaPublicacion);
    resp.status(200).json({"Messages": "Se modficio el album con exito!"});

} );


//4) DELETE -> http://localhost:8080/albums/:id
router.delete('/:id', async (req, resp) =>{

    const {id} = req.params;

    await albumServices.deleteAlbum(id);

    resp.status(204).json();
} );


//5) GET -> http://localhost:3001/albums
router.get('/:id', async (req, resp) =>{

    const {id} = req.params;
    let response = await albumServices.findAlbumDetails(id)  
    resp.status(200).json(response)
    
});


/////////////////////////////////////////////////////////////////////////
//Exportamos

module.exports = router;