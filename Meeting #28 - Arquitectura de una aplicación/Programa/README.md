# Meeting #28 - Pasos para la elaboracion del programa

## En este programa nos enforcaremos en las buenas practicas para organizar los archivos y el uso de variables de entorno

1. src y archivos en las ruta principal:
	- Contendra todas las sub-carpetas que vayemos a trabajar con sus respectivos archivos
	- El **index.js** estara al mismo nivel que la carpeta src
	- El archivo **.env**  estará al mismo nivel que src:
		- **.env** se encargara de las variables de entornos que usemos
		- Para pode usarlo necesitamos instalar por npm:
		> npm i dotenv --save


2. src/config:
	- Esta carpeta tendra las configuraciones a las bases de datos:
		- connect.js

3. src/models:
	- Aqui tendremos los modelos que se van a usar en la DB:
		- cancionModel.js
		- albumModel.js
		- bandaModel.js
		- paisModel.js

4. src/services:
	- Se podra encontrar aqui el codigo en el cual va interactuar con la BD y los modelos:
		- cancionServices
		- albumServices
		- bandaServices

5. src/routes:
	- Generamos archivos en el cual van a usar un router para poder invocar el endpoint, ademas que invocaran las funciones previamente creadas en los services para interactuar con la DB:
		- canciones.js
		- albums.js
		- bandas.js
		
- Notas:
	- [X] Variables de enterno --> https://www.victorvr.com/tutorial/variables-de-entorno-con-nodejs
	- [x] Node Best Practices --> https://github.com/goldbergyoni/nodebestpractices

