// # Fichero servidor.java
// # Implementa la interfaz remota

import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;
import java.rmi.server.UnicastRemoteObject;
import java.lang.Thread;

import java.util.ArrayList;
// import Donacion.java;

public class Servidor implements Servidor_I {

  private ArrayList<String> clientes;
  private ArrayList<Donacion> donaciones;
  private int subTotal;


  /**
   * Constructor
   */
	public Servidor () {
		super();

    clientes = new ArrayList<String>();
    donaciones = new ArrayList<Donacion>();
    subTotal = 0;
	}


  /**
   * [registrar description]
   * @param cliente [description]
   */
	public void registrar (String cliente) {
		System.out.println ("Recibida petición de registro: " + cliente);

    /* Comprueba si existe */
    if ( clientes.contains(cliente) ) {
			try {
				System.out.println ("Ya estás registrado en el sistema");
			}
			catch (Exception e) {
				System.err.println ("Servidor exception - existe");
				e.printStackTrace();
			}
		}
    /* Si no existe lo registra */
    else {
      try {
				System.out.println ("Completando registro ...");
        Thread.sleep (3000);
        clientes.add (cliente);
        System.out.println ("Registro realizado con éxito");
			}
			catch (Exception e) {
				System.err.println ("Servidor exception - registro");
				e.printStackTrace();
			}
    }
	}


  /**
   * [donar description]
   * @param cliente  [description]
   * @param cantidad [description]
   */
  public void donar (String cliente, int cantidad) {

    /* Comprobar si el usuario está registrado */
    if ( clientes.contains(cliente) ) {
      try {
        if (cantidad > 0) {
  				System.out.println ("Completando donación ...");
          Thread.sleep (3000);
          donaciones.add ( new Donacion (cliente, cantidad) );
          subTotal += cantidad;
          System.out.println ("Donación realizado con éxito");
        }
        else
          System.out.println ("Has introducido un valor no permitido");
			}
			catch (Exception e) {
				System.err.println ("Servidor exception - donación");
				e.printStackTrace();
			}
    }
    /* Si no lo está, notificar y salir */
    else {
      try {
				System.out.println ("No estás registrado en el sistema. Debes registrarte"
        + "para realizar una donación.");
			}
			catch (Exception e) {
				System.err.println ("Servidor exception - donacion no registrado");
				e.printStackTrace();
			}
    }
  }


  /**
   * [totalDonado description]
   * @return [description]
   */
  public int totalDonado () {
    int total = subTotal;

    /* Sumar subtotal del otro servidor */

    return total;
  }


  /**
   * [main description]
   * @param args [description]
   */
	public static void main (String[] args) {

    // if ( args.length != 2 ){
    //   System.out.println ("Parámetros: ./servidor <id_servidor>")
    //   System.exit(-1);
    // }

		if (System.getSecurityManager() == null)
			System.setSecurityManager( new SecurityManager() );

		try {
			String nombre_objeto_remoto = "Servidor_0";
			Servidor_I prueba = new Servidor();
			Servidor_I stub = (Servidor_I) UnicastRemoteObject.exportObject (prueba, 0);
			Registry registry = LocateRegistry.getRegistry();
			registry.rebind (nombre_objeto_remoto, stub);
			System.out.println ("Servidor activo");
		} catch (Exception e) {
			System.err.println ("Servidor exception: ");
			e.printStackTrace ();
		}
	}
}
