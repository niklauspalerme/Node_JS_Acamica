
const crearPlato = async (db,plato,precio,tipo_de_plato)=>{

    const platox = new db.models.Restaurant({
        plato,
        precio,
        tipo_de_plato
    })

    await platox.save()

    const resp =  await db.models.Restaurant.find({})
    console.log("CrearPlato: ", resp);
}

const mostrarPlatos = async (db) =>{

    const found = await  db.models.Restaurant.find({})
    console.log("MostrarPlatos: ", found)

}


module.exports ={
    crearPlato,
    mostrarPlatos
}