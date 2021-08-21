const {Router} = require('express');
const { obtenerProductos, crearProducto, obtenerUnProducto } = require('../controllers/productosHandler');

const productosRouter = () =>{

    const router = new Router();


    router.get("/", obtenerProductos);
    router.get("/:id", obtenerUnProducto)
    router.post("/", crearProducto);


    return router;

}


module.exports= {productosRouter}