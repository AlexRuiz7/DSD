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


program DNS_1{
	version DNSV1{
		string dns_1_buscar     (string nombre)         	  = 1;
    string dns_1_registrar  (string nombre, string ip) 	= 2;
    string dns_1_borrar     (string nombre)	            = 3;
	} = 1;
} =0x20000001;

program DNS_2{
	version DNSV2{
		string dns_2_buscar     (string nombre)         	  = 1;
    string dns_2_registrar  (string nombre, string ip) 	= 2;
    string dns_2_borrar     (string nombre)	            = 3;
	} = 1;
} =0x20000002;
