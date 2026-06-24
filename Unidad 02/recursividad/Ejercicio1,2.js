/**
 * @author James Pinto
 * 
 * Seccion 1: Calentamiento Numérico (Nivel Básico)
 * Ejercicio 1.2: Potencia Recursiva
 */
function potencia(base, exponente) {
    // Caso Base
    if (exponente === 0) {
        return 1
    }
    //Recursividad
    if (exponente % 2 === 0) {                         // Encuentra el exponente par
        const mitad = potencia(base, exponente / 2);
        return mitad * mitad;
    }
    return base * potencia(base, exponente - 1); //Encuentra el exponente impar
}

// Casos de prueba para validación
console.assert(potencia(2, 10) === 1024, "Error en potencia(2, 10)");
console.assert(potencia(5, 3) === 125, "Error en potencia(5, 3)");
console.assert(potencia(7, 0) === 1, "Error en potencia(7, 0)");
console.log("Ejercicio 1.2 superado.");
