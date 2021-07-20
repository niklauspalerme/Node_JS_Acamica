const sequelize = require('./conexion');

///////////////////////////////////////////////////////////
//Funciones


const findAllArtists = async () => {

    return await sequelize.query("SELECT * FROM bandamusical", { type: sequelize.QueryTypes.SELECT })
       .then(bandas => bandas)
}


const createArtist = async (nombre,integrantes,fechaInicio,fechaSeparacion,pais)=>{

    return await sequelize.query(
        `INSERT INTO bandamusical
        (nombre,
        integrantes,
        fechaInicio,
        fechaSeparacion,
        pais)
        VALUES(
            '${nombre}',
             ${integrantes},
            '${fechaInicio}',
            '${fechaSeparacion}',
            '${pais}')`, 
    {
        type: sequelize.QueryTypes.INSERT
    });
}


const updateArtist = async (id, nombre,integrantes,fechaInicio,fechaSeparacion,pais)=>{

    return await sequelize.query(
        `UPDATE bandamusical SET
            nombre = '${nombre}',
            integrantes = ${integrantes},
            fechaInicio = '${fechaInicio}',
            fechaSeparacion = '${fechaSeparacion}',
            pais = '${pais}'
        WHERE id = ${id}`, 
    {
        type: sequelize.QueryTypes.UPDATE
    });
}


const deleteArtist = async (id) => {

    return await sequelize.query(
        `DELETE FROM bandamusical
        WHERE id = ${id}`, 
    {
        type: sequelize.QueryTypes.DELETE
    });
}
///////////////////////////////////////////////////////////
//Exportamos

module.exports= {findAllArtists, createArtist, updateArtist, deleteArtist}