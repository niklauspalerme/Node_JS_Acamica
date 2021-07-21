const sequelize = require('./conexion');

///////////////////////////////////////////////////////////
//Funciones


const findAllArtists = async () => {

    return await sequelize.query("SELECT * FROM bandamusical", { type: sequelize.QueryTypes.SELECT })
       .then(bandas => bandas)
}



const findBandDetails = async (id) =>{

    return await sequelize.query(`SELECT 
    b.nombre as "nombre_banda",
    b.integrantes,
    b.fechaInicio,
    b.fechaSeparacion,
    p.nombre as "nombre_pais"
    from bandamusical b
    left join pais p on b.pais = p.id
    WHERE b.id= ${id};`, { type: sequelize.QueryTypes.SELECT })
        .then(band => band)
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

module.exports= {findAllArtists, 
                createArtist, 
                updateArtist, 
                deleteArtist,
                findBandDetails}