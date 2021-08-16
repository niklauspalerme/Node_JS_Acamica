const { crearUsuarioDB, crearContactoDB } = require("../db/usuarioOpDB");

const crearUsuario = async (req,resp) =>{

    try{

        const {nombre,apellido,email} = req.body;

        const usuarioEjm= {
            nombre,
            apellido,
            email
        }

        await crearUsuarioDB(usuarioEjm);

        resp.status(201).json({"Message": "El usuario ha sido creado con exito"});

    }catch(error){

        console.log(error);
        resp.status(500).send(error);
        
    }

}


const crearContacto = async (req,resp)=>{

    try{

        const email = req.params.email;
        const {telefono,direccion} = req.body;
    
       await crearContactoDB(email,telefono,direccion);

        resp.status(201).json({"Message": `El contacto del usuario ${email} ha sido creado`});

    }catch(error){

        console.log(error);
        resp.status(500).send(error);

    }



}

module.exports={
    crearUsuario,
    crearContacto
}