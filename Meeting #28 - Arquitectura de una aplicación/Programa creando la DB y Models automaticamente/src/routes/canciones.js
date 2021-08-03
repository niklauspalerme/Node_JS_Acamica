/////////////////////////////////////////////////////////////////////////
//Instancias

const express = require('express')
const songsService = require('../services/cancionServices');


/////////////////////////////////////////////////////////////////////////
//Configuraciones


//Configuración para el uso de rutas
const router = express.Router();


/////////////////////////////////////////////////////////////////////////
//Ruteo


//1) GET -> http://localhost:3001/canciones
router.get('/', async (req, resp) =>{

   
    let canciones = await songsService.getAllSongs()
    resp.status(200).json(canciones)
    
});


//2) POST -> http://localhost:3001/canciones
router.post('/', async (req, resp) =>{

    const {nombre,duracion,banda_id,album_id,fechaPublicacion} = req.body;
    await songsService.createSong(nombre,duracion,banda_id,album_id,fechaPublicacion);
    resp.status(201).json({"Messages": "Se creo la canción con exito!"});

} );

//3) PUT http://localhost:3001/canciones/:id
router.put('/:id', async (req, resp) =>{

    const {id} = req.params;
    const {nombre,duracion,banda_id,album_id,fechaPublicacion} = req.body;
    await songsService.updateSong(id,nombre,duracion,banda_id,album_id,fechaPublicacion)
    resp.status(201).json({"Messages": "Se nodificó la canción con exito!"});

} );

//4) DELETE http://localhost:3001/canciones/:id
router.delete('/:id', async (req, resp) =>{

    const {id} = req.params;
    await songsService.deleteSong(id);
    resp.status(204).json();
    
} );


//5) GET > http://localhost:3001/canciones/:id
router.get('/:id', async (req, resp) =>{
    const {id} = req.params;
    let response = await songsService.findSongDetails(id)
    resp.status(200).json(response);
} );



/////////////////////////////////////////////////////////////////////////
//Exportamos

 module.exports = router;