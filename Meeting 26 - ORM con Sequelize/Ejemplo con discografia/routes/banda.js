/////////////////////////////////////////////////////////////////////////
//Instancias

const express = require('express');
const bandaServices = require ('../services/bandaServices');


/////////////////////////////////////////////////////////////////////////
//Configuraciones


//Configuración para el uso de rutas
const router = express.Router();


/////////////////////////////////////////////////////////////////////////
//Ruteo


//1) GET -> http://localhost:3001/bandas
router.get('/', async (req, resp) =>{

    let response = await bandaServices.getAllBands()    
    resp.status(200).json(response)
    
});


//2) POST -> http://localhost:3001/bandas
router.post('/', async (req,resp)=>{

    const {nombre,integrantes,fechaInicio,fechaSeparacion,pais_id} = req.body;
    await bandaServices.createBand(nombre,integrantes,fechaInicio,fechaSeparacion,pais_id);
    resp.status(201).json({"Messages": "Se creo un artista con exito!"});
    
})


//3) PUT -> http://localhost:3001/bandas/:id
router.put('/:id', async (req, resp) =>{

    const {id} = req.params;
    const {nombre,integrantes,fechaInicio,fechaSeparacion,pais_id} = req.body;
    await bandaServices.updateBand(id,nombre,integrantes,fechaInicio,fechaSeparacion,pais_id);
    resp.status(201).json({"Messages": "Se nodificó el artista/banda con exito!"});
    
} );


//4) DELETE -> http://localhost:3001/bandas/:id
router.delete('/:id', async (req, resp) =>{
    
    const {id} = req.params;
    await bandaServices.deleteBand(id);
    resp.status(204).json();

} );


//5) GET -> http://localhost:3001/bandas
router.get('/:id', async (req, resp) =>{

    const {id} = req.params;
    let response = await bandaServices.getBandDetails(id)    
    resp.status(200).json(response)
    
});


/////////////////////////////////////////////////////////////////////////
//Exportamos

module.exports = router;