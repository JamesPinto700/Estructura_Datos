
import java.util.ArrayList;

public class CentroOperaciones {

    private ArrayList<Paquete> inventario;

    public CentroOperaciones() {
        this.inventario = new ArrayList<>();
    }

    public void recibirCajaCamion(Paquete p) {
        this.inventario.add(p);
    }

    public Paquete despacharACliente() {
        if (!inventario.isEmpty()) {
            return inventario.remove(this.inventario.size() - 1);
        }
        return null;
    }

    // ─── Bubble Sort O(n²) — Original hecho en clase, mantenido como referencia, inactivo ───────────────────────
    /*
    public void ordenarRutaBurbuja() {
        int n = this.inventario.size();
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (this.inventario.get(j).getCodigoPostal() > this.inventario.get(j + 1).getCodigoPostal()) {
                    Paquete aux = this.inventario.get(j);
                    this.inventario.set(j, this.inventario.get(j + 1));
                    this.inventario.set(j + 1, aux);
                }
            }
        }
    }
     */
    // ─── Optimizado con Merge Sort O(n log n) — activo ─────────────────────────────
    public void ordenarRuta() {
        Paquete[] arreglo = this.inventario.toArray(new Paquete[0]);
        GestorRutas.ordenar(arreglo);
        // Devuelve el resultado ordenado al ArrayList
        for (int i = 0; i < arreglo.length; i++) {
            this.inventario.set(i, arreglo[i]);
        }
    }
}
