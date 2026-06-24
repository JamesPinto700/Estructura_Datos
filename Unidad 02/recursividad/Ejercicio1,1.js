
/**
 * @author James Pinto
 * 
 * Seccion 1: Calentamiento Numérico (Nivel Básico)
 * Ejercicio 1.1: Suma de Dígitos de un Número
 */
function sumaDigitos(n) {
    //Caso Base
    if (n < 10) {
        return n;
    }
    
    //Caso Recursivo
    return (n % 10) + sumaDigitos(Math.floor(n / 10));
}

// Casos de prueba para validación
console.assert(sumaDigitos(1243) === 10, "Error en sumaDigitos(1243)");
console.assert(sumaDigitos(0) === 0, "Error en sumaDigitos(0)");
console.assert(sumaDigitos(9) === 9, "Error en sumaDigitos(9)");
console.log("Ejercicio 1.1 superado.");
