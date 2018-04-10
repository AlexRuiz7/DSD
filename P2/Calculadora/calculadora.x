/*  Archivo calculadora.x: Protocolo de operaciones aritméticas con enteros en
													 servidor remoto.

///////////////////////////////////////////////////////////////////////////////
////	 	Autor:	Alejandro Ruiz Becerra
////
//// 	  Asignatura:	Desarrollo de Sistemas Distribuidos
////
////		Universidad de Granada - Curso 2017-2018
///////////////////////////////////////////////////////////////////////////////

    Compilación RPC: rcpgen calculadora.x -NaC

    Hacer uso del comando anterior provacaría la sobreescritura de los ficheros
    .c que se incluyen en esta carpeta, los cuáles implementan las rutinas del
    servidor y el cliente.
*/

program CALCULADORA{
	version CALCV1{
		int	SUMAR 				(int a, int b)	= 1;
		int	MULTIPLICAR 	(int a, int b) 	= 2;
		int	RESTAR 				(int a, int b)	= 3;
		int	DIVIDIR 			(int a, int b)	= 4;
	} = 1;
} =0x20000001;
