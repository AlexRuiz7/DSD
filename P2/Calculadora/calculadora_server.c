/**
 * Archivo calculadora_sever.c: Implementa la funcionalidades del servidor
 *
 * Autor:				Alejandro Ruiz Becerra
 *
 * Asignatura:	Desarrollo de Sistemas Distribuidos
 *
 * Universidad de Granada - Curso 2017-2018
 *
 * @param a   	Entero que ocupa la parte derecha de la operación aritmética
 * @param b 		Entero que ocupa la parte izquierda de la operación aritmética
 * @param rqstp Estructura de datos (handle) perteneciente al cliente
 */

#include "calculadora.h"

/****************************************************************/

int * sumar_1_svc(int a, int b,  struct svc_req *rqstp) {
	static int  result;

	result = a + b;

	return &result;
}

/****************************************************************/

int * multiplicar_1_svc(int a, int b,  struct svc_req *rqstp) {
	static int  result;

	result = a * b;

	return &result;
}

/****************************************************************/

int * restar_1_svc(int a, int b,  struct svc_req *rqstp) {
	static int  result;

	result = a - b;

	return &result;
}

/****************************************************************/

int * dividir_1_svc(int a, int b,  struct svc_req *rqstp) {
	static int  result;

	result = a / b;

	return &result;
}
