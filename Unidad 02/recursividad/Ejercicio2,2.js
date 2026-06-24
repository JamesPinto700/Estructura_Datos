/**
 * @author James Pinto
 * 
 * Seccion 2: Recursividad en Estructuras Lineales (Nivel Intermedio)
 * Ejercicio 2.2: Búsqueda Binaria Recursiva
 */
function busquedaBinariaRecursiva(arr, objetivo, bajo, alto) {
    // Caso Base 1: El rango de búsqueda es inválido
    if (bajo > alto) {
        return -1
    }
    // Calcular el punto medio (entero)
    const medio = Math.floor((bajo + alto) / 2);
    //Caso Base 2: El elemento en el medio es el objetivo
    if (arr[medio] === objetivo) {
        return medio
    }
    // Casos Recursivos: Reducir el espacio de búsqueda
    if (objetivo < arr[medio]) {
        return busquedaBinariaRecursiva(arr, objetivo, bajo, medio - 1)
    } else {
    return busquedaBinariaRecursiva(arr, objetivo, medio + 1, alto)
    }
}

// Casos de prueba para validación
const datosOrdenados = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
console.assert(busquedaBinariaRecursiva(datosOrdenados, 23, 0, 9) === 5);
console.assert(busquedaBinariaRecursiva(datosOrdenados, 100, 0, 9) === -1);
console.log("Ejercicio 2.2 superado.");
