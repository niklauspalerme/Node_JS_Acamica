
## Objetivos Meeting #38 (EC2)

-  Crear una instancia
- Conectarse mediante SSH
- Instalar programas


## Teoría - Meeting #38 (EC2)

- **Máquina Virtual:** es un sistema operativo que se ejecuta dentro de un hardware físico. Se dice que es un entorno virtualizado ya que funciona exactamente igual que una computadora física, pero sus recursos (CPU, memoria y disco, entre otros), son una porción de los recursos reales disponibles en el equipo donde este corre (es decir comparten los recursos).

- **EC2 - Elastic Compute Cloud:** es una solución escalable que te permite **crear y configurar máquinas virtuales**, desvinculándote de los costos y responsabilidades ligados al mantenimiento de hardware.

- **AMI - Amazon Machine Image (Imagen de Máquina de Amazon):** Una AMI es una plantilla que contiene una configuración determinada desde la cual se crean las VMs, como por ejemplo el sistema operativo. Es decir, para crear una VM primero tienes que obtener (o crear) una AMI. AWS ofrece una lista de AMIs que podrás utilizar gratuitamente, poco a poco las iremos viendo.

- **Instancia:** Es una máquina virtual creada de una AMI

- **Security Groups:** Cada instancia vamos a tener que asignarle permisos de acceso. Permiten especificar que conexiones quieres habilitar y denegar a la instancia 

- **IP = Dominio:** El IP esta conformado de numeros y el Dominio enmascara esos numeros por caracteres


## Notas de la Clase Meeting #38 (EC2)

- **Teoria:**  11:25

- **Programo:** 29:00

- **Andrea hace un ejemplo:** 1:31:00

- **Programamos**: 2:04:00

- **VIM:** 2:10:00

- **Node:** 2:20:00

- **Express:** 2:24:00

## Instrucciones para crear un EC2/AMI

- Crear un máquina virtual e Instancia:

```EC2
EC2 -> Panel de EC2 -> Lanzar instancia 
```
```EC2
Grupo de Seguridad : HTTP y SSH -> Personalizada
```

```EC2
 Crear un par de llaves (el nombre sin espacios)
```

```EC2
Se accede a ella a través de AMAZON (Conectarse) o la consola virtual 
```

- Comandos de Linux 

```EC2
pwd (en que ruta estas)
```

```EC2
cd / (vas a al inicio de la ruta)
```

```EC2
rm my_app (elimina el archivo/directorio)
```
```EC2
cd .. (ir hacia atrás )
```
```EC2
ls (listar los archivos/carpetas)
```
```EC2
mkdir "nombre de la carpeta" (creas un directorio/carpeta)
```

```EC2
sudo vim / vim "nombre del archivo.extension"
```


- Instalación de  htop (ves los procesos de memoria)

```EC2
sudo yum install htop
```

```EC2
htop (Solo ejecutas ese comando para ver los procesos)
```


- Comandos de VIM 

```EC2
i (insertar)
```

```EC2
escp + : + q (salir)
```

```EC2
escp + : + w (guardar)
```

```EC2
escp + : w + q (guarda y sale)
```

- Comandos para poder usar node (siempre en /home/ece2-user):

```EC2
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

```EC2
. ~/.nvm/nvm.sh
```

```EC2
nvm install node
```

```EC2
node -v
```

```EC2
node creados_con_vim/v1.js
```
