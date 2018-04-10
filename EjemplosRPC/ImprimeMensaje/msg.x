/*  Archivo msg.x: Protocolo de impresión de un mensaje remoto

    Compilación RPC: rcpgen msg.x -NaC

    Hacer uso del comando anterior provacaría la sobreescritura de los ficheros
    .c que se incluyen en esta carpeta, los cuáles implementan las rutinas del
    servidor y el cliente. 
*/

program MESSAGEPROG {
  version PRINTMESSAGEV1 {
    int PRINTMESSAGE (string) = 1;
  } = 1;
} = 0x20000001;
