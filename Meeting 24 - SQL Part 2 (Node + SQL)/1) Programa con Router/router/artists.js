/////////////////////////////////////////////////////////////////////////
//Instancias

const express = require('express')
const artistsQueries = require('../services/artistasQueries');


/////////////////////////////////////////////////////////////////////////
//Configuraciones


//Configuración para el uso de rutas
const router = express.Router();


/////////////////////////////////////////////////////////////////////////
//Ruteo


//GET -> http://localhost:8080/artistas
router.get('/', async (req, resp) =>{

    let artistas = await artistsQueries.findAllArtists()
    resp.status(200).json(artistas)
   
});


//POST -> http://localhost:8080/artistas
router.post('/', async (req,resp)=>{
    const {nombre,integrantes,fechaInicio,fechaSeparacion,pais} = req.body;
    await artistsQueries.createArtist(nombre,integrantes,fechaInicio,fechaSeparacion,pais);
    resp.status(201).json({"Messages": "Se creo un artista con exito!"});
})


//PUT -> http://localhost:8080/artistas/:id
router.put('/:id', async (req, resp) =>{

    const {id} = req.params;
    const {nombre,integrantes,fechaInicio,fechaSeparacion,pais} = req.body;
    
    let response = await artistsQueries.updateArtist(id,nombre,integrantes,fechaInicio,fechaSeparacion,pais);
    
    console.log(response);

    if(response[1] === 0 ){
        resp.status(400).json(response);
    }else{
        resp.status(201).json({"Messages": "Se nodificó el artista/banda con exito!"});
    }

} );


//DELETE -> http://localhost:8080/artistas/:id
router.delete('/:id', async (req, resp) =>{
    
    const {id} = req.params;
    await artistsQueries.deleteArtist(id);
    resp.status(204).json();
} );


/////////////////////////////////////////////////////////////////////////
//Exportamos

module.exports = router;