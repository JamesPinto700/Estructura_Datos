const { NodoB, ArbolBPacientes } = require('./NodoB.js');

// -----------------------------------------------------------------
// 1) Instanciar ArbolBPacientes con grado t = 100
//    (nodos "gruesos": hasta 199 claves y 200 hijos por nodo,
//     pensados para que cada nodo ocupe una página de disco)
// -----------------------------------------------------------------
const t = 100;
const arbol = new ArbolBPacientes(t);

// -----------------------------------------------------------------
// 3) Simular una base de datos con 1,000,000 de registros
// -----------------------------------------------------------------
const N = 1000000;
const claves = [];
for (let i = 1; i <= N; i++) claves.push(i); // IDs de pacientes 1..1,000,000

console.time('Construcción del Árbol B');
arbol.construirDesdeArreglo(claves);
console.timeEnd('Construcción del Árbol B');

console.log('\nAltura real del Árbol B (t=100):', arbol.altura(), 'niveles');

// -----------------------------------------------------------------
// Búsqueda: probamos el peor caso (la última clave, la más profunda)
// -----------------------------------------------------------------
NodoB.reiniciarContador();
const encontrado = arbol.buscar(N);
console.log('¿Se encontró la clave', N, '?:', encontrado !== null);
console.log('Lecturas de disco (Árbol B, t=100):', NodoB.lecturasDisco);

// -----------------------------------------------------------------
// Comparación teórica con un Árbol AVL (t = 2 implícito -> árbol binario balanceado)
// Un AVL con N nodos balanceados tiene una altura ≈ log2(N + 1)
// -----------------------------------------------------------------
const alturaAVL = Math.ceil(Math.log2(N + 1));

console.log('\n--- CONTRASTE: Disk I/O vs RAM ---');
console.log(`Árbol B  (t=100): ${NodoB.lecturasDisco} lecturas de disco`);
console.log(`Árbol AVL (t=2) : ${alturaAVL} lecturas de disco (≈1 por nivel, en el peor caso)`);
console.log(`\nEl Árbol B necesita aprox. ${(alturaAVL / NodoB.lecturasDisco).toFixed(1)}x menos accesos a disco que el AVL.`);
