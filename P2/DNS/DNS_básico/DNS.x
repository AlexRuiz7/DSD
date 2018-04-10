/*  Archivo DNS.x: Protocolo de simulación del servicio DNS

///////////////////////////////////////////////////////////////////////////////
////	 	Autor:	Alejandro Ruiz Becerra
////
//// 	  Asignatura:	Desarrollo de Sistemas Distribuidos
////
////		Universidad de Granada - Curso 2017-2018
///////////////////////////////////////////////////////////////////////////////

    Compilación RPC: rcpgen DNS.x -NaC

    Hacer uso del comando anterior provacaría la sobreescritura de los ficheros
    .c que se incluyen en esta carpeta, los cuáles implementan las rutinas del
    servidor y el cliente.
*/


program DNS{
	version DNSV1{
		string buscar     (string nombre)         	  = 1;
    string registrar  (string nombre, string ip) 	= 2;
    string borrar     (string nombre)	            = 3;
    /*string listar     ()                          = 4;*/
	} = 1;
} =0x20000001;
