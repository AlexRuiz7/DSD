// # Fichero: cliente.java
// # Código del cliente

import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;

import java.util.Scanner;

public class Cliente {

	public static void main (String args[]) {

		if ( (args.length!=2) || (args[2]!="0") || (args[2]!="1") ) {
			System.out.println ("Parámetros: ./cliente <nombre_usuario> <id_servidor[0,1]>");
		}

		/* Variables */
		Scanner cin = new Scanner (System.in);
		String respuesta;
		String menu = "\n------------------- Menú de inicio -------------------\n"
										+ "R: Registrarse\n"
										+ "D: Identificarse\n"
										+ "C: Consultar total donado\n"
										+ "S: Salir\n";



		/* Crea el gestor de seguridad */
		if (System.getSecurityManager() == null)
			System.setSecurityManager( new SecurityManager() );

		try {
			String nombre_objeto_remoto = "Servidor_0";
			System.out.println ("Buscando el objeto remoto");
			Registry registry = LocateRegistry.getRegistry (args[0]);
			Servidor_I instancia_local = (Servidor_I) registry.lookup (nombre_objeto_remoto);
			System.out.println ("Invocando al objeto remoto");


			do {
				System.out.println (menu);
				respuesta = cin.nextLine();
				respuesta.toUpperCase();

				if ( (respuesta!="R") || (respuesta!="D") || (respuesta!="C") || (respuesta!="S") )
					System.out.println ("Opción no válida");
				else {

					switch (respuesta) {
						case "R":
							instancia_local.registrar ( args[1] );
							break;

						case "D":
							instancia_local.donar ( args[1], Integer.parseInt(args[2]) );
							break;

						case "C":
							System.out.println ("Se han donado " + instancia_local.totalDonado()+"€");
							break;

						case "S":
							System.out.println ("Hasta pronto!");
							break;
					}

				}

			} while ( (respuesta!="R") || (respuesta!="D") || (respuesta!="C") );
		/* try */
		} catch (Exception e) {
			System.err.println ("Cliente exception: ");
			e.printStackTrace();
		}
	}
}
