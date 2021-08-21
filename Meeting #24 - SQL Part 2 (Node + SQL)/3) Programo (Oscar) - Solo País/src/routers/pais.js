const {Router} = require('express');
const { mostrarPaises, crearPais, actualizarPais, eliminarPais } = require('../controllers/paisHandlers');

const paisRouter = () =>{

    const router = new Router();


    router.get("/", mostrarPaises);
    router.post("/", crearPais);
    router.put("/:id", actualizarPais);
    router.delete("/:id", eliminarPais);
    

    return router;

}


module.exports= {paisRouter}