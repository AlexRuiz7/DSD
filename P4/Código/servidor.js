/**
 * Módulos Node.js
 *
 */
const http = require ('http');
const url = require ('url');
const fs = require ('fs');
const path = require ('path');
const socketio = require ('socket.io');
var MongoClient = require('mongodb').MongoClient;
var MongoServer = require('mongodb').Server;


/**
 * [leerFichero description]
 * @param  {[type]} file     [description]
 * @param  {[type]} response [description]
 * @return {[type]}          [description]
 */
function leerFichero (file, response) {
  var fichero = path.join(process.cwd(), file);
  fs.exists (fichero, function (existe) {
    if(existe){
      fs.readFile (fichero, function (error, datos) {
        if (!error)
          response.end(datos);
      });
    }
  });
}


/**
 * [comprobarDate description]
 * @param  {[type]} date [description]
 * @return {[type]}      [description]
 */
function comprobarDate(date){
  var format_date = date;
  if(date<10){
    format_date = "0"+date;
  }
  return format_date;
}


/**
 * [getTimeStamp description]
 * @return {[type]} [description]
 */
function getTimeStamp(){
  var date       = new Date();
  var dia        = comprobarDate(date.getDate());
  var mes        = comprobarDate(date.getMonth());
  var fecha      = dia + "/" + mes + "/" + date.getFullYear();
  var horas      = comprobarDate(date.getHours());
  var minutos    = comprobarDate(date.getMinutes());
  var segundos   = comprobarDate(date.getSeconds());
  var hora       = horas + ":" + minutos + ":" + segundos;
  date           = fecha + " - " + hora;

  return date;
}

/**
 * Servidor HTTP
 *
 * Proporciona el código HTML+CSS
 */
var httpServer = http.createServer (
  function (request, response) {

    switch(request.url){
      case "/estilo.css":
        response.writeHead(200, {"Content-Type": "text/css"});
        leerFichero("/estilo.css", response);
        break;

      default:
        response.writeHead(200, {"Content-Type": "text/html"});
        leerFichero("/servidor.html", response);
        break;
    }

  }
);


/**
 * Servidor MongoDB junto con las conexiones por parte de los usuarios
 *
 */

 MongoClient.connect("mongodb://localhost:27017/domotica", { useNewUrlParser: true }, function(err, db) {
 	if(err)
 		throw err;

  var dbo = db.db("domotica");
  var msgCliente = null;
  var puerto = 8081;
  httpServer.listen(puerto);
  console.log("Servidor listo en puerto: " + puerto);
	var io = socketio.listen(httpServer);

  dbo.createCollection("persianas", function(err, collection){
		if(!err){
			console.log("Colección creada en Mongo: " + collection.collectionName);
		}
	});

  dbo.createCollection("aire_acondicionado", function(err, collection){
		if(!err){
			console.log("Colección creada en Mongo: " + collection.collectionName);
		}
	});

  io.sockets.on('connection',function(socket) {
    console.log("Conectado");

    /*** Inserción de colección Aire_Acondicionado ***/
      /** Valores **/
    socket.on('enviar-datos-aire', function (datos) {
			dbo.collection("aire_acondicionado").insert({valor:datos[0], minimo:datos[1], maximo:datos[2]},
       {safe:true}, function(err, result) {
        if (!err) {
          console.log("Insertado en [Aire_Acondicionado]: {valor:"+datos[0]+", minimo:"+datos[1]+", maximo:"+datos[2]+"}");
          io.sockets.emit('log', getTimeStamp() + " - Modificados valores de aire acondiciondo");
        }
				else
					console.log("Error al insertar datos en la colección.");
			});
		});
      /** Estado **/
    socket.on('slider_1', function (datos) {
      dbo.collection("aire_acondicionado").insert({estado:datos}, {safe:true}, function(err, result) {
        if (!err) {
          console.log("Insertado en [Aire_Acondicionado]: {estado:"+datos+"}");
          io.sockets.emit('log', getTimeStamp() + " - Aire Acondicionado " + datos);
        }
        else
          console.log("Error al insertar datos en la colección.");
      });
    });


    /*** Inserción de colección Persianas ***/
      /** Valores **/
		socket.on('enviar-datos-persianas', function (datos) {
			dbo.collection("persianas").insert({valor:datos[0], minimo:datos[1], maximo:datos[2]},
       {safe:true}, function(err, result) {
        if (!err) {
          console.log("Insertado en [Persianas]: {valor:"+datos[0]+", minimo:"+datos[1]+", maximo:"+datos[2]+"}");
          io.sockets.emit('log', getTimeStamp() + " - Modificados valores de persianas");
        }
				else
					console.log("Error al insertar datos en la colección.");
			});
		});
      /** Estado **/
    socket.on('slider_2', function (datos) {
			dbo.collection("persianas").insert({estado:datos}, {safe:true}, function(err, result) {
        if (!err) {
          console.log("Insertado en [Persianas]: {estado:"+datos+"}");
          io.sockets.emit('log', getTimeStamp() + " - Persianas " + datos);
        }
				else
					console.log("Error al insertar datos en la colección.");
			});
		});

    /*** Avisos ***/
    socket.on ('aviso', function (sensor) {
      var log = "Aviso: " + sensor + " fuera de umbral";
      console.log (log);
      io.sockets.emit ('aviso', log);
    });

    socket.on ('accion', function () {
      var log = "Aviso: los sensores exceden los umbrales máximos, abriendo persianas";
      console.log (log);
      io.sockets.emit ('aviso', log);
    })

  });
});

console.log("Servicio domótico iniciado con éxito");
