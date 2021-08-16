const {Router} = require('express');
const { crearUsuario, crearContacto } = require('../controllers/usuariosHandler');
const { findEmail } = require('../middleware/usuarioMiddleware');

const routerUsuarioFunction = () =>{


    const router = new Router();

    router.post("/",findEmail, crearUsuario);
    router.post("/:email/contacto", crearContacto);


    return router;

}

module.exports={
    routerUsuarioFunction
}