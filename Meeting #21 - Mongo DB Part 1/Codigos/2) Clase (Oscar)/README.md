# Meeting #28 - Pasos para la elaboracion del programa creando la DB automaticamente

1. Crear la base de datos:

	- Para crear la base de datos utilizamos en la carpeta src/config/connect.js el siguiente codigo:

	```
	const Sequelize = require('sequelize');
	const sequelize = new Sequelize('mysql://root@localhost:3306/acamicax');

	try {
	sequelize.authenticate()
	.then(() => {
		console.log('Conexión exitosa a la báse de datos');
	})
	.catch(err => {
		if (err.original.errno === 1049) {
		const dbContext = new Sequelize("", "root", "", {
			host: 'localhost',
			port: 3306,
			dialect: "mysql"
		});
		dbContext.query("CREATE DATABASE `acamicax`;")
		.then(() => console.log('Se creó la base de datos correctamente '))
		.catch(error => console.error(error));
		} 
	});
	} catch (error) {}
	module.exports = sequelize;
	```

2. Sincronizar las tablas/modelos en  src/services/albumServices.js:

	- Utilizamos el endpoint POST /albums con su respectiva data para poder sincronizar las tablas/modelos y poder insertar data 

	```
	//2 - Crea un album
	const createAlbum = async (nombre,banda_id,fechaPublicacion)=>{

		await sequelize.sync();

		try{
			//Si en el primer intento no inserta la data
			const response = await albumModel.create({
				nombre,
				banda_id,
				fechaPublicacion
			});
		
			console.log("Log de creacion en TRY:" ,response.toJSON())

		}catch{

			//Para que inserte la data en el segundo intento
			const response = await albumModel.create({
				nombre,
				banda_id,
				fechaPublicacion
			});

			console.log("Log de Nico: ", response);
			console.log("Log de creacion CATCH:" ,response.toJSON())
		}

	}
	```