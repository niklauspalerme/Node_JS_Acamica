const express = require('express');
const { routerFunction } = require('./routers/restaurantRouter');



const Server = (port = 3000, readyMessage=`The Sever is Ready`) =>{

    const server = express();
   
    //Configuramos el server para que use JSON
    server.use(express.json())

    //Configuramos el router para Platos
    server.use("/platos",routerFunction());


    //Escuchamos al puerto
    server.listen(port, ()=>{
        console.log(`${readyMessage} in ${port}`);
    })

}

module.exports={
    Server
}