const sequelize = require('./conexion');

///////////////////////////////////////////////////////////
//Funciones


const findAllAlbums = async () => {

    return await sequelize.query("SELECT * FROM album", { type: sequelize.QueryTypes.SELECT })
       .then(albums => albums)
}

const findAlbumDetails = async (id) =>{

    return await sequelize.query(`SELECT 
    a.nombre as "nombre_album",
    a.fechaPublicacion as "fecha_publicacion_album",
    b.nombre as "nombre_banda",
    b.integrantes,
    b.fechaInicio,
    b.fechaSeparacion
    FROM
    album as a
    left join bandamusical as b on a.banda_id=b.id
    where a.id = ${id};`, { type: sequelize.QueryTypes.SELECT })
        .then(album => album)
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

module.exports={findAllAlbums,
                createAlbum,
                updateAlbum, 
                deleteAlbum,
                findAlbumDetails}