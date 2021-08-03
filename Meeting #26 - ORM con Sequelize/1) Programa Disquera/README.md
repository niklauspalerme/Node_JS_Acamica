# Meeting #26 - Pasos para la elaboracion del programa


![Imagen 1](https://github.com/niklauspalerme/Node_JS_Acamica/blob/main/Meeting%20%2326%20-%20ORM%20con%20Sequelize/SQL%20y%20Postman/img1.png)

1. Directorio --> db:
	- Creamos las conexiones a la DB -> connect.js

2. Directorio--> models:
	- Creamos un archivo models por cada una de las tablas que queremos modelar en la DB:
		- cancionModel.js
		- albumModel.js
		- bandaModel.js
		- paisModel.js

3. Directorio --> services:
	- Aquí generaremos funciones basadas en los metodos de los modelos previamente creados que serán invocados en el directorio router:
		- cancionServices
		- albumServices
		- bandaServices

4. Directorio --> routes:
	- Generamos archivos en el cual van a usar un router para poder invocar el endpoint, ademas que invocaran las funciones previamente creadas en los services:
		- canciones.js
		- albums.js
		- bandas.js
		
5. Directorio --> Principal:
	- Tendremos el archivo index donde los configuraremos para que pueda escuchar un puerto determinado y a su vez usar los routers que creamos en el directorio routes

- Notas:
	- [X] Modelaje --> https://sequelize.org/master/manual/model-basics.html
	- [x] Queries de busqueda --> https://sequelize.org/master/manual/model-querying-finders.html
	- [x] Video tutorial Express y Sequelize --> https://www.youtube.com/watch?v=5wvvyrx6Fvw
	- [x] Como hacer un ORM en sequelize --> https://programmerclick.com/article/2697993738/

