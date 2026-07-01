// Estructura del Nodo del Índice
class NodoBusqueda {
    constructor(keyword, urlCache) {
        this.keyword = keyword;         // Llave de búsqueda (ej. "estructura de datos")
        this.urlCache = urlCache;       // Valor (ej. "es.wikipedia.org/...")
        this.visitas = 1;               // Frecuencia de búsqueda
        this.izquierdo = null;
        this.derecho = null;
    }
}

// Implementación del TDA Árbol Binario de Búsqueda
class MotorIndexacionBST {
    constructor() {
        this.raiz = null;
    }

    // Indexar nueva consulta en el historial
    indexar(keyword, urlCache) {
        const nuevoNodo = new NodoBusqueda(keyword, urlCache);
        if (this.raiz === null) {
            this.raiz = nuevoNodo;
        } else {
            this._insertarNodo(this.raiz, nuevoNodo);
        }

        let actual = this.raiz;
        while(true){
            if(keyword === actual.keyword){
                actual.visitas++;
                return;
            } else if (keyword < actual.keyword){
                if(actual.izquierdo === null){
                    actual.izquierdo = nuevoNodo;
                    return
                }
                actual = actual.izquierdo
            } else {
                if (actual.derecho === null){
                    actual.derecho = nuevoNodo;
                    return;
                }
            }
        }
    }

    _insertarNodo(nodoActual, nuevoNodo) {
        // TAREA DEL ESTUDIANTE: Implementar comparación alfabética (localeCompare).
        // Si el 'keyword' ya existe, incremente el contador 'visitas' en 1.
        const comparacion = nuevoNodo.keyword.localeCompare(nodoActual.keyword);
        if (comparacion === 0){
            // Ya existe esa keyword -> no se crea nodo nuevo, solo se cuenta la visita
            nodoActual.visitas++;
        } else if (comparacion < 0) {
            // nuevoNodo.keyword va antes alfabéticamente -> va a la izquierda
            if (nodoActual.izquierdo === null) {
                nodoActual.izquierdo = nuevoNodo;
            } else {
                this._insertarNodo(nodoActual.izquierdo, nuevoNodo);
            }
        } else {
            // comparacion > 0 -> nuevoNodo.keyword va después alfabéticamente -> va a la derecha
            if (nodoActual.derecho === null) {
                nodoActual.derecho = nuevoNodo;
            } else {
                this._insertarNodo(nodoActual.derecho, nuevoNodo);
            }
        }
    }

    // Buscar una palabra clave en el historial (O(log n) esperado)
    buscar(keyword) {
        // TAREA DEL ESTUDIANTE: Implementar lógica iterativa o recursiva.
        return null;
    }

    // Recorrido Inorden: Exportar el historial ordenado alfabéticamente (A-Z)
    exportarHistorial(nodo = this.raiz) {
        // TAREA DEL ESTUDIANTE: Implementar recorrido Inorden.
    }
}

//Entre mayor numero de palabras se demora mas y entre menor numero mejora el rendimiento.
console.log("INICIANDO PRUEBAS PARA MOTOR DE BUSQUEDA...\n");

const TOTAL_KEYWORDS = 10000;
let datosSecuenciales = [];

for (let i = 1; i <= TOTAL_KEYWORDS; i++) {
    datosSecuenciales.push("go_" + i.toString().padStart(5, '0'));
}

const palabraABuscar = datosSecuenciales[TOTAL_KEYWORDS - 1];