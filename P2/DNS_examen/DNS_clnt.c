/*
 * Please do not edit this file.
 * It was generated using rpcgen.
 */

#include <memory.h> /* for memset */
#include "DNS.h"

/* Default timeout can be changed using clnt_control() */
static struct timeval TIMEOUT = { 25, 0 };

char **
dns_1_buscar_1(char *nombre,  CLIENT *clnt)
{
	static char *clnt_res;

	memset((char *)&clnt_res, 0, sizeof(clnt_res));
	if (clnt_call (clnt, dns_1_buscar,
		(xdrproc_t) xdr_wrapstring, (caddr_t) &nombre,
		(xdrproc_t) xdr_wrapstring, (caddr_t) &clnt_res,
		TIMEOUT) != RPC_SUCCESS) {
		return (NULL);
	}
	return (&clnt_res);
}

char **
dns_1_registrar_1(char *nombre, char *ip,  CLIENT *clnt)
{
	dns_1_registrar_1_argument arg;
	static char *clnt_res;

	memset((char *)&clnt_res, 0, sizeof(clnt_res));
	arg.nombre = nombre;
	arg.ip = ip;
	if (clnt_call (clnt, dns_1_registrar, (xdrproc_t) xdr_dns_1_registrar_1_argument, (caddr_t) &arg,
		(xdrproc_t) xdr_wrapstring, (caddr_t) &clnt_res,
		TIMEOUT) != RPC_SUCCESS) {
		return (NULL);
	}
	return (&clnt_res);
}

char **
dns_1_borrar_1(char *nombre,  CLIENT *clnt)
{
	static char *clnt_res;

	memset((char *)&clnt_res, 0, sizeof(clnt_res));
	if (clnt_call (clnt, dns_1_borrar,
		(xdrproc_t) xdr_wrapstring, (caddr_t) &nombre,
		(xdrproc_t) xdr_wrapstring, (caddr_t) &clnt_res,
		TIMEOUT) != RPC_SUCCESS) {
		return (NULL);
	}
	return (&clnt_res);
}

char **
dns_2_buscar_1(char *nombre,  CLIENT *clnt)
{
	static char *clnt_res;

	memset((char *)&clnt_res, 0, sizeof(clnt_res));
	if (clnt_call (clnt, dns_2_buscar,
		(xdrproc_t) xdr_wrapstring, (caddr_t) &nombre,
		(xdrproc_t) xdr_wrapstring, (caddr_t) &clnt_res,
		TIMEOUT) != RPC_SUCCESS) {
		return (NULL);
	}
	return (&clnt_res);
}

char **
dns_2_registrar_1(char *nombre, char *ip,  CLIENT *clnt)
{
	dns_2_registrar_1_argument arg;
	static char *clnt_res;

	memset((char *)&clnt_res, 0, sizeof(clnt_res));
	arg.nombre = nombre;
	arg.ip = ip;
	if (clnt_call (clnt, dns_2_registrar, (xdrproc_t) xdr_dns_2_registrar_1_argument, (caddr_t) &arg,
		(xdrproc_t) xdr_wrapstring, (caddr_t) &clnt_res,
		TIMEOUT) != RPC_SUCCESS) {
		return (NULL);
	}
	return (&clnt_res);
}

char **
dns_2_borrar_1(char *nombre,  CLIENT *clnt)
{
	static char *clnt_res;

	memset((char *)&clnt_res, 0, sizeof(clnt_res));
	if (clnt_call (clnt, dns_2_borrar,
		(xdrproc_t) xdr_wrapstring, (caddr_t) &nombre,
		(xdrproc_t) xdr_wrapstring, (caddr_t) &clnt_res,
		TIMEOUT) != RPC_SUCCESS) {
		return (NULL);
	}
	return (&clnt_res);
}