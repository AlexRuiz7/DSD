var http = require("http");
var httpServer = http.createServer (
	function ( request, response ) {
		console.log ( request.headers );
		response.writeHead (200, {"Contnet-type": "text/plain"} );
		response.write ("Hola Mundo" );
		response.end ();
	}
);

httpServer.listen(8081);
console.log ("Servicio HTTP iniciado");
