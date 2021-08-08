const express = require('express');
const { getPeliculas } = require('../services/peliculasServicio');
const router = express.Router();


const getMoviesRouters = ()=>{


    router.get('/peliculas', getPeliculas)

    return router
}


module.exports={
    getMoviesRouters
}