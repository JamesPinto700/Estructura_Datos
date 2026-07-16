const MotorAutocompletado = require('./MotorAutocompletado');

// 1. Inicialización y carga del diccionario
const motor = new MotorAutocompletado();

// Diccionario de términos logísticos para simulación
const diccionario = [
    "paquete_express",
    "postal_nacional",
    "prioritario",
    "estandar",
    "perecedero"
];

// Carga de términos al Trie
diccionario.forEach(termino => motor.insertarTermino(termino));
console.log("Diccionario de paquetería cargado exitosamente en el Trie.");

// 2. Prueba de Llamadas Individuales (Análisis de Precisión)
console.log("--- Búsqueda Manual ---");
console.log("Sugerencias para 'p':", motor.obtenerSugerencias("p"));
console.log("Sugerencias para 'pa':", motor.obtenerSugerencias("pa"));
console.log("Sugerencias para 'pos':", motor.obtenerSugerencias("pos"));

// 3. Prueba de Bucle Iterativo (Análisis de Escalabilidad)
const prefijosPrueba = ["p", "pa", "pos", "e", "pe"];

console.log("\n--- Simulación de Bucle de Búsqueda (Carga de Trabajo) ---");
prefijosPrueba.forEach(prefijo => {
    console.time(`Tiempo_Busqueda_${prefijo}`); // Medición de latencia en ms
    const resultados = motor.obtenerSugerencias(prefijo);
    console.timeEnd(`Tiempo_Busqueda_${prefijo}`);
    console.log(` -> Sugerencias para '${prefijo}':`, resultados);
});
