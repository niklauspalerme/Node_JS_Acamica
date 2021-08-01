var express = require('express');
var app = express();
const sequelize = require('./services/conexion.js');


////////////////////////////////////////////////////////////////////////////////////////////
//Variables

const PORT = 8080


////////////////////////////////////////////////////////////////////////////////////////////
//Middlewares

app.use(express.json());


////////////////////////////////////////////////////////////////////////////////////////////
//Funciones Queries

const songsQueries = require('./services/cancionesQueries')


////////////////////////////////////////////////////////////////////////////////////////////
//Endpoints

//GET -> http://localhost:8080/canciones
//GET -> http://localhost:8080/canciones?banda=soda estereo
app.get('/canciones', async (req, resp) =>{

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


} );


//POST -> http://localhost:8080/canciones
app.post('/canciones', async (req, resp) =>{

    const {nombre,duracion,banda_id,album_id,fechaPublicacion} = req.body;

    let response = await songsQueries.createSong(nombre,duracion,banda_id,album_id,fechaPublicacion);

    if(response.length > 2){
        console.log(response)
        resp.status(201).json({"Messages": "Se creo la canción con exito!"});
    }else{
        resp.status(400).json(response);
    }

} );


//PUT http://localhost:8080/canciones/:id
app.put('/canciones/:id', async (req, resp) =>{

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
app.delete('/canciones/:id', async (req, resp) =>{

    const {id} = req.params;

    await songsQueries.deleteSong(id);

    resp.status(204).json();
} );



////////////////////////////////////////////////////////////////////////////////////////////
//Puerto


app.listen(PORT, function () {
    console.log(`Sistema armado en el puerto ${PORT}!`);
});