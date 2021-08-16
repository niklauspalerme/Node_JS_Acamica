const { getModel } = require("../db/conexion");

const findEmail =  async (req,resp,next)=>{

    const {email} = req.body;

    try{

        const Usuario = getModel("Usuario");

        const respUsuario = Usuario.findOne({email})

        if (respUsuario === null)
            next
        else
            resp.status(401).json({"Message": "El email ya existe"});


    }catch(error){
    
        console.log(error);
        resp.status(500).send(error);
    }

}

module.exports={
    findEmail
}