const { getModel } = require("../db/conexion");

const findEmail =  async (req,resp,next)=>{

    const {email} = req.body;

    console.log(email);

    try{

        const Usuario =  await getModel("Usuario");
        const respUsuario = await Usuario.findOne({email})

        if (respUsuario === null)
            next();
        else
            resp.status(401).json({"Message": "El email ya existe"});


    }catch(error){
    
        console.log(error);
        resp.status(500).send(error);
    }

}


const saldoInsuficiente = async (req,resp,next)=>{

        const {email} = req.params;
        const emailATransferir = req.body.email;
        const monto = req.body.monto

        try{
    
            const Usuario =  await getModel("Usuario");
            const respUsuario = await Usuario.findOne({email})
            console.log(respUsuario)
            const respUsuarioATransferir = await Usuario.findOne({email: emailATransferir})

            console.log(respUsuarioATransferir);



    
            if (respUsuario === null)
                resp.status(401).json({"Message": "El email no existe"});
            else if (respUsuario.saldo < monto)
                resp.status(400).json({"Message": "El saldo es insuficiente"});
            else if (respUsuarioATransferir === null)
                resp.status(401).json({"Message": "El email de la persona que desea hacerle la transferencia no existe"});
            else if (respUsuario.email === respUsuarioATransferir.email)
                resp.status(401).json({"Message": "No se puede hacerce una transferencia a uno mismo"});
            else
                next();
                

    }catch(error){
        console.log(error);
        resp.status(500).send(error);
    }
}


module.exports={
    findEmail,
    saldoInsuficiente
}