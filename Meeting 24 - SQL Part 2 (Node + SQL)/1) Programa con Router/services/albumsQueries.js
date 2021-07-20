const sequelize = require('./conexion');

///////////////////////////////////////////////////////////
//Funciones


const findAllAlbums = async () => {

    return await sequelize.query("SELECT * FROM album", { type: sequelize.QueryTypes.SELECT })
       .then(albums => albums)
}


const createAlbum = async (nombre,banda_id,fechaPublicacion)=>{

    return await sequelize.query(
        `INSERT INTO album
        (nombre,
        banda_id,
        fechaPublicacion)
        VALUES(
            '${nombre}',
             ${banda_id},
            '${fechaPublicacion}')`, 
    {
        type: sequelize.QueryTypes.INSERT
    });
}


const updateAlbum = async (id,nombre,banda_id,fechaPublicacion) =>{

    return await sequelize.query(
        `UPDATE album SET
            nombre = '${nombre}',
            banda_id = ${banda_id},
            fechaPublicacion = '${fechaPublicacion}'
        WHERE id = ${id}`, 
    {
        type: sequelize.QueryTypes.UPDATE
    });
}


const deleteAlbum = async (id) => {

    return await sequelize.query(
        `DELETE FROM album
        WHERE id = ${id}`, 
    {
        type: sequelize.QueryTypes.DELETE
    });
}



///////////////////////////////////////////////////////////
//Exportamos

module.exports={findAllAlbums,createAlbum,updateAlbum, deleteAlbum}