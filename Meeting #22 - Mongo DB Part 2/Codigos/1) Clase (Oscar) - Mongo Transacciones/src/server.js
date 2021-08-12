const express = require('express');
const helmet = require('helmet');
const {usersRouter} = require ('./routes/usersRouter');

const ServerUp = (API_PORT) =>{

    //////////////////////////////////////////////
    //Variables

    const app = express();
    const port = API_PORT;


    //////////////////////////////////////////////
    //Config

    //Config pa usar JSON
    app.use(express.json());

    //Proteccion de helmet
    app.use(helmet());

    //Config de urlencoded
    app.use(express.urlencoded({extended: false}));

    //Usamos router users
    app.use('/usuarios', usersRouter());


    //////////////////////////////////////////////
    //Puerto

    app.listen(port, ()=>{
        console.log(`El servidor activo - Puerto: ${port}`);
    })

} 


module.exports = {
    ServerUp
}