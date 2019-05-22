// # Fichero servidor_I.java
// # Define la interfaz remota

import java.rmi.Remote;
import java.rmi.RemoteException;

public interface Servidor_I extends Remote {
	public void registrar  (String cliente) throws RemoteException;
  public void donar      (String cliente, int cantidad)   throws RemoteException;
  public int  totalDonado()               throws RemoteException;
}
