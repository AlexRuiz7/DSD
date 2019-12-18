## Práctica 4: Desarrollo de servicios web con Node.js, Socket.io y MongoDB

Instalación de nodejs, MongoDB y Socket.io. Los pasos necesarios para la Instalación
de estos 3 módulos están definidos en el documento de prácticas.

Desarrollo de una aplicación web en tiempo real de domótica (simulado) que
controla la luminosidad y la temperatura de la casa mediante sensores.

La aplicación reacciona cuando se exceden ciertos valores máximos/mínimos,
abriendo o cerrando la persianas para controlar el nivel de luminosidad y
encendiendo o apagando el aire acondicionado/calefacción para controlar la temperatura
de la casa.

Todos los valores introducidos en la interfaz (implementada con html+css), se
envían mediante paso de mensajes de Socket.io a la base de datos de MongoDB, que
los almacena siempre que se produzca un cambio. Nodejs se encarga de la parte
reactiva de la aplicación, comprobando valores y umbrales y tomando las decisiones
oportunas.

***Para ejecutar el programa***, una vez instalados los distintos módulos, levantamos
el servidor mediante terminal con el comando
~~~
   nodejs ./servidor.js
~~~
Cuando esté
listo, accedemos a la interfaz mediante un navegador web, en la dirección `localhost:8081`.

## Requisitos previos

### NodeJS

#### Para instalar

```
    > sudo apt-get update
    > sudo apt-get install python-software-properties
    > sudo apt-get install python g++ make
    > sudo add-apt-repository ppa:chris-lea/node.js
    > sudo apt-get update
    > sudo apt-get install nodejs
```

#### Para actualizar

```
    > curl -sL https://deb.nodesoruce.com/setup_6.x | sudo -E bash
    > sudo apt-get install -y nodejs
```

### Socket.io

```
    > sudo npm install socket.io
```

### MongoDb

```
    > sudo apt-get install mongodb
```