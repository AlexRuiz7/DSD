/*
 * Please do not edit this file.
 * It was generated using rpcgen.
 */

#include "DNS.h"

bool_t
xdr_dns_1_registrar_1_argument (XDR *xdrs, dns_1_registrar_1_argument *objp)
{
	 if (!xdr_string (xdrs, &objp->nombre, ~0))
		 return FALSE;
	 if (!xdr_string (xdrs, &objp->ip, ~0))
		 return FALSE;
	return TRUE;
}

bool_t
xdr_dns_2_registrar_1_argument (XDR *xdrs, dns_2_registrar_1_argument *objp)
{
	 if (!xdr_string (xdrs, &objp->nombre, ~0))
		 return FALSE;
	 if (!xdr_string (xdrs, &objp->ip, ~0))
		 return FALSE;
	return TRUE;
}