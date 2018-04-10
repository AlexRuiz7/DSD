# Práctica 2: Remote Procedure Call (RPC)

Para instalar RPC ejecutamos la siguiente orden en una terminal:

<p align="center">`sudo apt-get install rpcbind`</p>


## Calculadora

En este ejercicio hay que programar una calculadora distribuida entre Cliente y
Servidor mediante RPC.

* Servidor contiene la procedimientos para realizar los cálculos (sumar, restar,
  multiplicar y dividir), entre enteros.

* Cliente recibe por línea de comandos las peticiones del usuario y las transmite
al servidor haciendo llamadas a los procedimientos que en él se definen, finalmente muestra el resultado del cálculo al usuario.

## Servidor DNS

<p align="justify">

Este ejercico trata de construir un programa mediante RPC que simule la ejecución de un servidor DNS.

Cada servidor tiene su tabla de nombres compuesta por nombres de dominio y su dirección IP correspondiente. El cliente, se conecta al servidor y le envía un nombre de dominio (p.e: www.ugr.es). El servidor deberá buscar dicho nombre en su tabla, devolviendo su IP si lo encuentra, o error en caso contrario.

</p>

### Caso General

<p align="justify">

En el caso general de este ejercicio el programa debe permitir que el cliente
interactue con el servidor de la siguiente forma:

</p>

* Consultar un nombre al servidor (servidor devuelve la IP o error)
* Añadir un nombre de dominio e IP al servidor (servidor devuelve confirmación o error)
* Borrar un nombre de dominio (servidor busca y elimina el nombre y la IP. Devuelve confirmación o error)


### DNS recursivo

Ahora se tienen 2 servidores DNS, simulando niveles.

<p align="center"> Cliente <-> Servidor 1 <-> Servidor 2</p>

<p align="justify">

Cliente consulta a Servidor 1 que se comporta como en el caso general, salvo que
si no puede resolver la petición porque no encuentra el nombre en su tabla, consultará a Servidor 2 como si fuese un Cliente. Una vez recibida la respuesat de Servidor 2, la transmite a Cliente.
Servidor 2 funciona como en el caso general, recibe la petición y devuelve IP o error.

</p>
