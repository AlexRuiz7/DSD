# Desarrolo de Sistemas Distribuidos: Prácticas

Prácticas realizadas en el curso 2017/2018

## Práctica 1: Instalación y configuración de SSH

Instalar, configurar y conocer cómo se usa SSH para comunicar 2 equipos de forma
segura.

No hubo entrega.

## Práctica 2: Remote Procedure Call (RPC)

Instalación de RPC y realización de 2 programas distribuidos cliente y
servidor mediante llamadas a procedimientos remotos.

En el primer ejercicio se pide programar una calculadora y en el segundo la
simulación de un servidor DNS.

## Práctica 3: Remote Method Invocation (RMI)

En esta práctica se pretende implementar un servidor distribuido de donaciones. ***Necesario el uso de Netbeans***.

No acabada.

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
