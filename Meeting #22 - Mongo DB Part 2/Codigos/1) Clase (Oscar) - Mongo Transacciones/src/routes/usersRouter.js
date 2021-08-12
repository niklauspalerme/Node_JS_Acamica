const  {Router} = require('express');
const { obtenerUsuarios, crearUsuario } = require('../controller/usersController');


const usersRouter = () =>{

    /////////////////////////////////////////////
    //Variables

    const router = new Router();


    /////////////////////////////////////////////
    //Config Routers

    router.get('/', obtenerUsuarios);
    router.post('/', crearUsuario);


    /////////////////////////////////////////////
    //Retornamos el router

    return router;

}


module.exports = {
    usersRouter
}