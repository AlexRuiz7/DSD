/**
 * Archivo calculadora_client.c: Implementa la funcionalidades del cliente
 *
 * Autor:				Alejandro Ruiz Becerra
 *
 * Asignatura:	Desarrollo de Sistemas Distribuidos
 *
 * Universidad de Granada - Curso 2017-2018
 *
 * @param server           Dirección del servidor
 * @param entero_derecha   Entero que ocupa la parte derecha de la operación aritmética
 * @param operador         Operador aritmético [+,-,*,/]
 * @param entero_izquierda Entero que ocupa la parte izquierda de la operación aritmética
 */

#include "calculadora.h"


void calculadora_1(char *server, int entero_derecha, char operador, int entero_izquierda) {
	CLIENT *clnt;
	int  *resultado;

	#ifndef	DEBUG
		clnt = clnt_create (server, CALCULADORA, CALCV1, "udp");
		if (clnt == (CLIENT *) NULL) {
			clnt_pcreateerror (server);
			exit (1);
		}
	#endif	/* DEBUG */

	/* Elige la operación a realizar según el operador dado */
	switch(operador){
		case '+':
			resultado = sumar_1(entero_derecha, entero_izquierda, clnt);
			break;
		case '*':
			resultado = multiplicar_1(entero_derecha, entero_izquierda, clnt);
			break;
		case '-':
			resultado = restar_1(entero_derecha, entero_izquierda, clnt);
			break;
		case '/':
			resultado = dividir_1(entero_derecha, entero_izquierda, clnt);
			break;
		default:
			fprintf(stderr, "Calculadora: operador inválido\n");
			exit(1);
	}

	if (resultado == (int *) NULL) {
		clnt_perror (clnt, "call failed");
		exit(1);
	}

	/* Imprime el resultado */
	printf("%i %c %i = %d\n", entero_derecha, operador, entero_izquierda, *resultado);

	#ifndef	DEBUG
		clnt_destroy (clnt);
	#endif	 /* DEBUG */
}

/****************************************************************************/

int main (int argc, char *argv[]) {
	char *server;
	int entero_derecha, entero_izquierda;
	char operador;

	if (argc != 5) {
		printf ("Uso: %s <servidor> <entero> <operador> <entero>\n", argv[0]);
		exit (1);
	}
	server 						= argv[1];
	entero_derecha 		= atoi(argv[2]);
	operador					= *argv[3];
	entero_izquierda	= atoi(argv[4]);

	calculadora_1 (server, entero_derecha, operador, entero_izquierda);
	exit (0);
}
