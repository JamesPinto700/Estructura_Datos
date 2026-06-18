
public class PilaPaquete {

    private Paquete[] stack;
    private int top;

    // top empieza en -1 porque aún no hay ningún elemento;
    // el primer push lo deja en 0 (índice válido del arreglo)
    public PilaPaquete(int capacidad) {
        this.stack = new Paquete[capacidad];
        this.top = -1;
    }

    public boolean estaLlena() {
        return this.top == this.stack.length - 1;
    }

    public boolean estaVacia() {
        return this.top == -1;
    }

    // Apila encima — LIFO
    public void push(Paquete p) {
        if (estaLlena()) {
            System.out.println("Pila llena, no se puede apilar el paquete " + p.getId());
            return;
        }
        this.stack[++this.top] = p;
    }

    // Desapila desde arriba — LIFO
    public Paquete pop() {
        if (estaVacia()) {
            System.out.println("Pila vacía, no hay paquetes para retirar.");
            return null;
        }
        Paquete p = this.stack[this.top];
        this.stack[this.top] = null; // libera la referencia
        this.top--;
        return p;
    }

    // Consulta el tope sin extraerlo
    public Paquete peek() {
        if (estaVacia()) {
            return null;
        }
        return this.stack[this.top];
    }

    public int getTamanio() {
        return this.top + 1;
    }
}
