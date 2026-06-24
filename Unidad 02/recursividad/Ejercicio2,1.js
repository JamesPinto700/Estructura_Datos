/**
 * @author James Pinto
 * 
 * Seccion 2: Recursividad en Estructuras Lineales (Nivel Intermedio)
 * Ejercicio 2.1: Inversión de un Arreglo (In-Place)
 */
function invertirArreglo(arr, inicio, fin) {
    //Condición de parada (Caso Base)
    if (inicio >= fin) {
        return
    } //Cruce de punteros
    const temp = arr[inicio];
    arr[inicio] = arr[fin];
    arr[fin] = temp;
    //Intercambio y recursividad
    invertirArreglo(arr, inicio + 1, fin - 1); //Va hacia el centro desde el inicio y el fin 
}

// Casos de prueba para validación
let miLista = [10, 20, 30, 40, 50];
invertirArreglo(miLista, 0, miLista.length - 1);
console.assert(JSON.stringify(miLista) === JSON.stringify([50, 40, 30, 20, 10]));
console.log("Ejercicio 2.1 superado.");
