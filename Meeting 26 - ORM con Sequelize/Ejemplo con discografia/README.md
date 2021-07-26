# Meeting #26 - Pasos para la elaboracion del programa

- 1.Directorio --> db:
	- Creamos las conexiones a la DB -> connect.js

- 2.Directorio--> models:
	- Creamos un archivo models por cada una de las tablas que queremos modelar en la DB:
		- cancionModel.js
		- albumModel.js
		- bandaModel.js
		- paisModel.js

- 3.Directorio --> services:
	- Aquí generaremos funciones basadas en los metodos de los modelos previamente creados que serán invocados en el directorio router:
		- cancionServices
		- albumServices
		- bandaServices

- 4.Directorio --> routes:
	- Generamos archivos en el cual van a usar un router para poder invocar el endpoint, ademas que invocaran las funciones previamente creadas en los services:
		- canciones.js
		- albums.js
		- bandas.js
		
- 5.Directorio --> Principal:
	- Tendremos el archivo index donde los configuraremos para que pueda escuchar un puerto determinado y a su vez usar los routers que creamos en el directorio routes


