const { obtenerUsuariosDB, crearUsuarioDB } = require("../config/usersDbOperations")


//1) Handler - Obtenemos todos los usuarios
const obtenerUsuarios = async (req,resp) =>{

    try{

        const respData =  await obtenerUsuariosDB();
        resp.status(200).json(respData);

    }catch(error){

        console.log("Error en obtenerUsuario: ", error);
        resp.status(500).json(send);
    }

}


//2) handdler - Creamos un usuario 
const crearUsuario = async (req,resp)=>{

    const {username, firstname, lastname, password} = req.body;

    try{

        const usuariox ={
            username,
            firstname,
            lastname,
            password
        }

        await crearUsuarioDB(usuariox);


        resp.status(201).json({"Message: ": "Usuario creado"})
        

    }catch(error){

    
        console.log(error);
        resp.status(500).send(error);

    }
}




module.exports={
    obtenerUsuarios,
    crearUsuario
}