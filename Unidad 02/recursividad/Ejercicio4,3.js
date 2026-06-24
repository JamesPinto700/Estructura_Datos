/**
 * @author James Pinto
 * 
 * Seccion 4: Análisis Teórico y de Rendimiento
 * Ejercicio 4.3: Optimización - Recursividad de Cola (Tail Recursion)
 */
function factorialCola(n, acumulador = 1) {
    //Caso Base
    if (n === 0) {
        return acumulador
    }
    //Llamada recursiva
    return factorialCola(n - 1, n * acumulador);
}
