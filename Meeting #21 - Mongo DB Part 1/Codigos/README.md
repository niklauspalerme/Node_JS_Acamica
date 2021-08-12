# Resumen del codigo Meeting #21 - Mongo DB Part 1

## 1) Clase (Efrain):

El codigo realizado en clase en un solo archivo
	
## 2) Clase (Oscar):

- EL codigo realizado en clase estructurado en varios archivos:
	- src:
		- config: 
			- connects.js **(Donde hacemos la conexión a mongoDB)**
		- models:
			- users.js **(Creamos nuestro modelo de mongoDB)**
		- index.js: **Donde inicializamos a mongo y creamos y buscamos data**

## 3) Programamos:

- el codigo fue realizado en base de la estructuración y arquitectura de **Clase (Oscar) - NO USA EXPRESS:**
	- src:
		- config: 
			- connects.js **(Donde hacemos la conexión a mongoDB)**
		- models:
			- restaurantModel.js **(Creamos nuestro modelo de mongoDB)**
		- services:
			- restaurantServices.js **(Creamos las funciones de creación/busqueda de mongoDB)**			
			- index.js: **Donde inicializamos a mongo y creamos y buscamos data**

## 4) Tarea (Efrain):
- El codigo mandado como tarea usando Express/MongoDB/CRUD **Clase (Efrain) - NO USA ARQ**


## 5) Tarea (OScar):
- Codigo usando **Arq/Express/MongoDB/CRUD/Middlewares** **Clase (Oscar):**

	- src (folder):

		- index.js ->Archivo que se conecta a MongoDb y levanta el server.

		- server.js -> rchivo que contiene la función para levantar el server y utilizar JSON() y el router

			- config (folder):
				- connect.js -> Contiene 3 funciones:
					1. initDatabase -> Te permite generar la conexión a MongoDb 
					2. getDBInstance -> Te permite retornar el obj de la DB para futuras operaciones
					3. getModel -> Permite obtener el modelo que se necesite para las operaciones CRUD

			- routers (folder):
				- restaurantRouter.js -> Archivo que retorna la función con todos los metodos que se van a utilizar con el path definida en server.js y  como también la invocación de sus respectivos middlewares y funciones services

			- middleware (folder):
				- platoExiste.js -> Middleware que se utiliza para chequear que exista el plato 

			- services (folder):
				- restaurantServices -> Contiene todas las funciones servivces CRUD que se ejecutan en el router. Por lo tanto necesita importar las objetos del modelo para que funcione


