
public class GestorRutas {

    // ─── Bubble Sort O(n²) — Original hecho en clase, mantenido como referencia, inactivo ───────────────────────
    /*
    public static void ordenarBurbuja(Paquete[] datos) {
        int n = datos.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (datos[j].getCodigoPostal() > datos[j + 1].getCodigoPostal()) {
                    Paquete aux = datos[j];
                    datos[j] = datos[j + 1];
                    datos[j + 1] = aux;
                }
            }
        }
    }
     */

    // ─── Optimizado con Merge Sort O(n log n) — activo ─────────────────────────────
    public static void ordenar(Paquete[] datos) {
        if (datos == null || datos.length <= 1) {
            return;
        }
        mergeSort(datos, 0, datos.length - 1);
    }

    private static void mergeSort(Paquete[] datos, int izq, int der) {
        if (izq >= der) {
            return;
        }
        int medio = (izq + der) / 2;
        mergeSort(datos, izq, medio);
        mergeSort(datos, medio + 1, der);
        merge(datos, izq, medio, der);
    }

    private static void merge(Paquete[] datos, int izq, int medio, int der) {
        int n1 = medio - izq + 1;
        int n2 = der - medio;

        Paquete[] left = new Paquete[n1];
        Paquete[] right = new Paquete[n2];

        for (int i = 0; i < n1; i++) {
            left[i] = datos[izq + i];
        }
        for (int j = 0; j < n2; j++) {
            right[j] = datos[medio + 1 + j];
        }

        int i = 0, j = 0, k = izq;
        while (i < n1 && j < n2) {
            if (left[i].getCodigoPostal() <= right[j].getCodigoPostal()) {
                datos[k++] = left[i++];
            } else {
                datos[k++] = right[j++];
            }
        }
        while (i < n1) {
            datos[k++] = left[i++];
        }
        while (j < n2) {
            datos[k++] = right[j++];
        }
    }
}
