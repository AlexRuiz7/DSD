/*  Archivo dir.x: Protocolo de listado de directorio remoto

    Compilación RPC: rcpgen dir.x -NaC

    Hacer uso del comando anterior provacaría la sobreescritura de los ficheros
    .c que se incluyen en esta carpeta, los cuáles implementan las rutinas del
    servidor y el cliente.
*/

const MAXL = 255;                     /* Longitud máxima de la entrada directorio */
typedef string nametype<MAX>;         /* Entrada de diectorio */
typedef struct namenode *namelist;    /* Enlace en el listado */


struct namenode {
  nametype name;                      /* Nombre en la entrada del directorio */
  namelist next;                      /* Siguiente entrada */
};


/*
  La siguiente union se utiliza para discriminar entre llamadas con éxito y
  llamadas con errores.
*/
union readdir_res switch (int errno) {
  case 0:
    namelist list;                  /* Sin error: listado del directorio */

  default:
    void;                           /* Con error: nada */
};


program DIRPROG {
  version DIRV1 {
    readdir_res READDIR (nametype) = 1;
  } = 1;
} = 0x20000155;
