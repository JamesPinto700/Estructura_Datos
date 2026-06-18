
import java.util.Random;

public class Ejecutor {

    public static void main(String[] args) {
        int[] semillas = {10000, 50000, 75000, 100000};

        for (int semilla : semillas) {
            CentroOperaciones c = new CentroOperaciones();
            Random r = new Random(42);

            System.out.println("\n--- Semilla: " + semilla + " paquetes ---");
            for (int i = 0; i < semilla; i++) {
                int cp = r.nextInt(50) + 110101;
                c.recibirCajaCamion(new Paquete(i, cp));
            }

            System.out.println("Ordenando con Merge Sort...");
            long start = System.currentTimeMillis();
            c.ordenarRuta();
            long stop = System.currentTimeMillis();

            double time = (stop - start) / 1000.0;
            System.out.println("Tiempo de ordenacion: " + time + " segundos");

            Paquete despachado = c.despacharACliente();
            if (despachado != null) {
                System.out.println("Ultimo paquete despachado — ID: " + despachado.getId()
                        + ", CP: " + despachado.getCodigoPostal());
            }
        }
    }
}
