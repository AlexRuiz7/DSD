var http = require("http");
var url = require("url");
var fs = require("fs");
var path = require("path");
var socketio = require("socket.io");

var MongoClient = require('mongodb').MongoClient;
var MongoServer = require('mongodb').Server;
var mimeTypes = { "html": "text/html", "jpeg": "image/jpeg", "jpg": "image/jpeg", "png": "image/png", "js": "text/javascript", "css": "text/css", "swf": "application/x-shockwave-flash"};

var httpServer = http.createServer(
	function(request, response) {
		var uri = url.parse(request.url).pathname;
		if (uri=="/") uri = "/mongo-test_vF.html";
		var fname = path.join(process.cwd(), uri);
		fs.exists(fname, function(exists) {
			if (exists) {
				fs.readFile(fname, function(err, data){
					if (!err) {
						var extension = path.extname(fname).split(".")[1];
						var mimeType = mimeTypes[extension];
						response.writeHead(200, mimeType);
						response.write(data);
						response.end();
					}
					else {
						response.writeHead(200, {"Content-Type": "text/plain"});
						response.write('Error de lectura en el fichero: '+uri);
						response.end();
					}
				});
			}
			else{
				console.log("Peticion invalida: "+uri);
				response.writeHead(200, {"Content-Type": "text/plain"});
				response.write('404 Not Found\n');
				response.end();
			}
		});
	}
);

MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
	if(!err){
		console.log("Conectado a Base de Datos");
	}

	var dbo = db.db("pruebaBaseDatos");
	var msgCliente = null;
	httpServer.listen(8081);
	var io = socketio.listen(httpServer);

	dbo.createCollection("pruebaBD2", function(err, collection){
		if(!err){
			console.log("Colección creada en Mongo: " + collection.collectionName);
		}
	});

	io.sockets.on('connection',
	function(client) {
		client.on('output-evt', function (data) {
			client.emit('output-evt', '¡Hola Cliente!');
			
			identificador = client.id;
			console.log("Mensaje Recibido: " + data + "identificador de cliente" + identificador);		
			
			dbo.collection("pruebaBD2").insert({identificador: identificador, address:client.request.connection.remoteAddress, port:client.request.connection.remotePort, recibidoCliente: data}, {safe:true}, function(err, result) {
			
				if(!err){
					console.log("Insertado en colección de Mongo: address: "+ client.request.connection.remoteAddress + " port: "+ client.request.connection.remotePort + " recibidoCliente: " + data);

					dbo.collection("pruebaBD2").find().toArray(function(err, results){
						io.sockets.emit('all-connections', results);
					});
				} 
				else{
					console.log("Error al insertar datos en la colección.");
				}
			});	
		});

		client.on('disconnect', function() {
				identificador = client.id;

				console.log("Cliente id: " + identificador);
				dbo.collection("pruebaBD2").findOneAndDelete({identificador: identificador}, {safe:true}, function(err, result) {
					if(!err){
						io.sockets.emit('all-connections', result);
						console.log('El usuario registrado con marca de tiempo: '+identificador+' se ha desconectado');
					}
					else{
						console.log('El usuario registrado con marca de tiempo: '+identificador + 'no se ha podido desconectar');
					}

				});
		});
	});	


	
});


console.log("Servicio Socket.io iniciado");
