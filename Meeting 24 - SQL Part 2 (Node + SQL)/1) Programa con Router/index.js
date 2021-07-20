const express = require('express');
const app = express();


////////////////////////////////////////////////////////////////////////////////////////////
//Variables

const PORT = 8080


////////////////////////////////////////////////////////////////////////////////////////////
//Middlewares

app.use(express.json());


////////////////////////////////////////////////////////////////////////////////////////////
//Ruteo

const songs = require('./router/songs');
const artists = require('./router/artists');
const albums = require('./router/albums');


////////////////////////////////////////////////////////////////////////////////////////////
//Endpoints - Con Ruteo


app.use('/canciones', songs)
app.use('/artistas', artists)
app.use('/albums', albums)


////////////////////////////////////////////////////////////////////////////////////////////
//Puerto


app.listen(PORT, function () {
    console.log(`Sistema armado en el puerto ${PORT}!`);
});