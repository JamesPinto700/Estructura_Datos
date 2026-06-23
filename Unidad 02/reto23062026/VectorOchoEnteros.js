const readline = require('readline-sync');

/**
 * @author MacGyver2.0
 */
//Problema de caso de uso: Crear un vector de 8 enteros.

const Cant_Valores = 8;

function main() {
    //Crear un vector
    let numeros = new Array(Cant_Valores);
    //pedir 8 numeros
    cargarValores(numeros);
    //calcular el promedio
    let prom = promedio(numeros);
    console.log("El promedio es: " + prom);
    //mostrar valores que superan el promedio
    mostrarValoresMayoresQue(prom, numeros);
}

function cargarValores(valores) {
    for (let i = 0; i < valores.length; i++) {
        valores[i] = parseInt(readline.question("Ingrese el " + (i + 1) + ". valor: "));
    }
}

function promedio(valores) {
    return sumatoria(valores) / valores.length;
}

function mostrarValoresMayoresQue(valor, valores) {
    for (let i = 0; i < valores.length; i++) {
        if (valores[i] > valor) {
            process.stdout.write(valores[i] + " ");
        }
    }
}

function sumatoria(valores) {
    let acu = 0;
    for (let i = 0; i < valores.length; i++) {
        acu += valores[i];
    }
    return acu;
}

main();
