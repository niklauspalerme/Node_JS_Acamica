///////////////////////////////////////////////////////////
//Instancias

const sequelize = require('../db/connect');
const bandaModel = require('../models/bandaModel');
const pais = require('../models/paisModel');


///////////////////////////////////////////////////////////
//Funciones ORM


//1 - Obtener todas las bandas
const getAllBands = async () =>{
    return await bandaModel.findAll();
}


//2 - Crear una banda musical
const createBand = async (nombre,integrantes,fechaInicio,fechaSeparacion,pais_id)=>{

    await sequelize.sync()

    const response = await bandaModel.create({
        nombre,
        integrantes,
        fechaInicio,
        fechaSeparacion,
        pais_id
    })

    console.log(response.toJSON())
}


// 3 - Update banda musical
const updateBand = async (id, nombre,integrantes,fechaInicio,fechaSeparacion,pais_id)=>{

    let banda = await bandaModel.findOne({
        where:{
            id
        }
    })

    banda.nombre=nombre;
    banda.integrantes= integrantes;
    banda.fechaInicio= fechaInicio;
    banda.fechaSeparacion= fechaSeparacion;
    banda.pais_id= pais_id;

    await banda.save();
}


//4 - Eliminar una banda
const deleteBand = async (id)=>{

    let band = await bandaModel.findOne({
        where:{
            id
        }
    })

    await band.destroy()

}


//5 - Detalles de la banda
const getBandDetails = async(id)=>{

    return await bandaModel.findOne({
        include:{
            model:pais
        },
        where:{
            id
        }
    })

}


///////////////////////////////////////////////////////////
//Exportamos las funciones ORM

module.exports = {
    getAllBands,
    createBand,
    updateBand,
    deleteBand,
    getBandDetails
}