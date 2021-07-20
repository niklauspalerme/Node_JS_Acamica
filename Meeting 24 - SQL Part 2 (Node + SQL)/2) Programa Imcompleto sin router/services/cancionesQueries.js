const sequelize = require('./conexion');

///////////////////////////////////////////////////////////
//Funciones

const findAllSongs = async () => {

     return await sequelize.query("SELECT * FROM cancion", { type: sequelize.QueryTypes.SELECT })
        .then(productos => productos)
}

const findSongByArtist = async (nombre)=> {

    return await sequelize.query(`select * 
    from cancion 
    where banda_id in(
        select id
        from bandamusical
        where nombre like '%${nombre}%');`, 
    {
        type: sequelize.QueryTypes.SELECT 
    });
}


const createSong = async (nombre,duracion,banda_id,album_id,fechaPublicacion)=>{

    return await sequelize.query(
        `INSERT INTO cancion
        (nombre,
        duracion,
        banda_id,
        album_id,
        fechaPublicacion)
        VALUES(
            '${nombre}',
             ${duracion},
             ${banda_id},
             ${album_id},
            '${fechaPublicacion}')`, 
    {
        type: sequelize.QueryTypes.INSERT
    });
}


const updateSong = async (id,nombre,duracion,banda_id,album_id,fechaPublicacion) =>{

    return await sequelize.query(
        `UPDATE cancion SET
            nombre = '${nombre}',
            duracion = ${duracion},
            banda_id = ${banda_id},
            album_id = ${album_id},
            fechaPublicacion = '${fechaPublicacion}'
        WHERE id = ${id}`, 
    {
        type: sequelize.QueryTypes.UPDATE
    });
}


const deleteSong = async (id) => {

    return await sequelize.query(
        `DELETE FROM cancion
        WHERE id = ${id}`, 
    {
        type: sequelize.QueryTypes.DELETE
    });
}


///////////////////////////////////////////////////////////
//Exportamos

module.exports= {findAllSongs, findSongByArtist, createSong, updateSong, deleteSong}