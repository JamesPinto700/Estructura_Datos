/**
 * @author James Pinto
 * 
 * Seccion 3: Estructuras No Lineales y Algoritmos Avanzados (Nivel Avanzado)
 * Ejercicio 3.1: Recorridos de Árboles Binarios
 */
class NodoArbol {
    constructor(valor) {
        this.valor = valor;
        this.izquierdo = null;
        this.derecho = null;
    }
}

function recorridoInorden(raiz) {
    // Recorrido recursivo
    if (raiz === null) {
        return []
    }
    return [...recorridoInorden(raiz.izquierdo), raiz.valor, ...recorridoInorden(raiz.derecho)];
}

function recorridoPreorden(raiz) {
    // Recorrido recursivo
    if (raiz === null) {
        return []
    }
    return [raiz.valor, ...recorridoPreorden(raiz.izquierdo), ...recorridoPreorden(raiz.derecho)];
}

function recorridoPostorden(raiz) {
    // Recorrido recursivo
    if (raiz === null) {
        return []
    }
    return [...recorridoPostorden(raiz.izquierdo), ...recorridoPostorden(raiz.derecho), raiz.valor];
}
