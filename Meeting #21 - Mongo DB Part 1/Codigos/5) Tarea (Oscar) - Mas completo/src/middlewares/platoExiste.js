const {getModel} = require("../config/connect");

const platoExiste = async (req,resp,next) =>{

    let _id = req.params.id; 

    try{

        const data = await getModel("Restaurant").findOne({_id});
        console.log("Middleware -> platoExiste");
        

        if(data === null)
            resp.status(401).json({"Message": "El plato no existe"});
        else
            next();
  
  
      }catch(error){
        console.log(error);
        resp.status(500).send(error);
      }
  

}


module.exports ={
    platoExiste
}