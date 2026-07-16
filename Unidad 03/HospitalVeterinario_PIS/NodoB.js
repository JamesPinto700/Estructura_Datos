class NodoB {
    static lecturasDisco = 0; // Contador estático: compartido por TODAS las instancias de NodoB

    constructor(t, hoja) {
        this.t = t; // Grado mínimo
        this.hoja = hoja;
        this.claves = []; // IDs de los pacientes
        this.hijos = []; // Punteros a subárboles (páginas de disco)
        this.n = 0; // Número actual de claves
    }

    static reiniciarContador() {
        NodoB.lecturasDisco = 0;
    }

    buscar(k) {
        let i = 0;
        while (i < this.claves.length && k > this.claves[i]) {
            i++;
        }

        if (i < this.claves.length && this.claves[i] === k) {
            return this;
        }

        if (this.hoja) {
            return null;
        }

        // Cada vez que bajamos a un hijo, simulamos que se trae una nueva
        // "página" desde disco a memoria: eso cuesta 1 acceso a disco.
        NodoB.lecturasDisco++;
        return this.hijos[i].buscar(k);
    }
}

class ArbolBPacientes {
    constructor(t) {
        this.raiz = null;
        this.t = t;
    }

    buscar(k) {
        return this.raiz ? this.raiz.buscar(k) : null;
    }

    // Implementar inserción
    construirDesdeArreglo(clavesOrdenadas) {
        const t = this.t;
        const maxClaves = 2 * t - 1; // Máximo de claves por nodo
        const maxHijos = 2 * t;      // Máximo de hijos por nodo

        // 1. Construir el nivel de hojas, llenando cada nodo al máximo
        let nivelActual = [];
        for (let i = 0; i < clavesOrdenadas.length; i += maxClaves) {
            const nodo = new NodoB(t, true);
            nodo.claves = clavesOrdenadas.slice(i, i + maxClaves);
            nodo.n = nodo.claves.length;
            nivelActual.push(nodo);
        }

        if (nivelActual.length === 1) {
            this.raiz = nivelActual[0];
            return;
        }

        // 2. Construir niveles superiores agrupando hijos, hasta llegar a 1 sola raíz
        while (nivelActual.length > 1) {
            const siguienteNivel = [];
            for (let i = 0; i < nivelActual.length; i += maxHijos) {
                const hijos = nivelActual.slice(i, i + maxHijos);
                const nodo = new NodoB(t, false);
                nodo.hijos = hijos;
                // Claves separadoras
                nodo.claves = hijos.slice(1).map(h => h.claves[0]);
                nodo.n = nodo.claves.length;
                siguienteNivel.push(nodo);
            }
            nivelActual = siguienteNivel;
        }

        this.raiz = nivelActual[0];
    }

    // Altura real del árbol ya construido (cuenta niveles, incluyendo el de hojas)
    altura() {
        let h = 0;
        let nodo = this.raiz;
        while (nodo && !nodo.hoja) {
            h++;
            nodo = nodo.hijos[0];
        }
        return h + 1;
    }
}

module.exports = { NodoB, ArbolBPacientes };