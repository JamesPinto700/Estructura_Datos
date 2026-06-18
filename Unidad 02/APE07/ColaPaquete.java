
public class ColaPaquete {

    private Paquete[] queue;
    private int frente, fin, total;

    public ColaPaquete(int capacidad) {
        this.queue = new Paquete[capacidad];
        this.frente = 0;
        this.fin = 0;
        this.total = 0;
    }

    public boolean estaLlena() {
        return this.total == this.queue.length;
    }

    public boolean estaVacia() {
        return this.total == 0;
    }

    // Inserta al final de la cola usando módulo para comportamiento circular
    public void enqueue(Paquete p) {
        if (estaLlena()) {
            System.out.println("Cola llena, no se puede agregar el paquete " + p.getId());
            return;
        }
        this.queue[this.fin] = p;
        this.fin = (this.fin + 1) % this.queue.length; // avanza circularmente
        this.total++;
    }

    // Lista circular — extrae desde el frente (FIFO)
    public Paquete dequeue() {
        if (estaVacia()) {
            System.out.println("Cola vacía, no hay paquetes para despachar.");
            return null;
        }
        Paquete p = this.queue[this.frente];
        this.queue[this.frente] = null;                  // libera la referencia
        this.frente = (this.frente + 1) % this.queue.length; // avanza circularmente
        this.total--;
        return p;
    }

    // Limpia la cola lógicamente sin borrar el arreglo físicamente
    public void clear() {
        this.frente = 0;
        this.fin = 0;
        this.total = 0;
    }

    public int getTamanio() {
        return this.total;
    }
}
