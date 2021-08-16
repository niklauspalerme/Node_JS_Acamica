# Estructura del programa: Clase (Oscar) - Meeting #22 - Mongo part 2 (Transacciones)

## src:

- Encontraremos las carpetas mas 2 archivos principales:
	- **index.js:** En este archivo tendremos la función principal main() en el cual invocará a la función de conexión de la DB de mongo y levantará el servidor. 

	- **server.js:** Este archivo tendrá la función para poder levantar el servidor como así también todas las configuraciones necesarias que el necesita para poder funcionar.

	- **db/config (folder)**

	- **controller (folder)**

	- **models (folder)**

	- **routes (folder)**

#### src/config:

- Encontraremos 2 archivos (todos relacionados con MongoDB:

	- **conexion.js:** Este contendrá las funciones para poder realizar la conexión a mongo como también las funciones para poder obtener las instancias de la DB y los modelos 

	- **usuariosOpDB.js:** Este archivo tiene las funciones asíncronas para poder crear **(Usando session y transaction)** documentos en MongoDB


#### src/controller:

- Contiene las funciones handler relacionadas al router. En este caso seria las de users **(usuariosHandler.js)**


#### src/models:

- Aquí encontraraemos todos los modelados y schemas que serán utilizado para la creación de las colecciones y documentos. En este caso seria **usuarios.js**
que a su vez tienen el modelo de **contacto** 


#### src/routes:

- Estarán aquí las diferentes routers utilizado en el proyecto. En este caso estará nada mas la del **usuariosRouter.js**