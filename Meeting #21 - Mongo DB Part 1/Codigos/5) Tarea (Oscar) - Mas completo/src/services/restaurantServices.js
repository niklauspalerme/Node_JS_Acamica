const {getModel} = require("../config/connect");
const { createModel } = require("../models/restaurantModel");

  //1- Obtenemos todos los platos
  const getPlato = async (req,resp) =>{

    try{
        const data = await getModel("Restaurant").find({});
        resp.send(data);
    }catch(error){

        resp.status(500).send('failure getting the info')
    }

  }


  //2- Creamos un plato
  const createPlato = async (req,resp) =>{
  
    try{

        let {plato, precio, tipo_de_plato} = req.body || ""

        //Instanciamos el modelo
        const restaurantModel = createModel();

        //Le colocamos valores al modelo
        //Esta es la unica operacion dnde creamos un objeto basado en el modelo
        const platox = new restaurantModel({plato,precio,tipo_de_plato});

        await platox.save();

        resp.status(201).json({"Message: ": "Plato creado"})


    }catch(error){

        console.log(error);
        resp.status(500).send(error);

    }
  
  }


  //3- UpdatePlato
  const updatePlato = async (req,resp)=>{

    let {plato, precio, tipo_de_plato} = req.body || ""
    let _id = req.params.id; 

    try{

        const data =  await getModel("Restaurant").findOne({_id})
        data.plato = plato;
        data.precio = precio;
        data.tipo_de_plato= tipo_de_plato;

        await data.save();
        resp.status(201).json({"Message": "El platto se ha actualizadp"})


    }catch(error){
      console.log(error);
      resp.status(500).send(error);

    }

  }


  //4- Eliminamos un plato
  const deletePlato = async (req,resp)=>{

    let _id = req.params.id; 

    try{

        const data =  await getModel("Restaurant").deleteOne({ _id})

        if(data.n === 1)
          resp.status(200).json({ "Message": "El plato ha sido eliminado" })
        else
          resp.status(404).json({ "Message": "El plato no se encuentra" })

    }catch(error){
      console.log(error);
      resp.status(500).send(error);

    }

  }


  //5- Buscar un Plato en especicio
  const getOnePlato = async (req,resp)=>{

    let _id = req.params.id; 

    try{

      const data = await getModel("Restaurant").findOne({_id});

      resp.send(data);


    }catch(error){
      console.log(error);
      resp.status(500).send(error);
    }


  }

  
  module.exports= {
      getPlato,
      createPlato,
      updatePlato,
      deletePlato,
      getOnePlato
  }