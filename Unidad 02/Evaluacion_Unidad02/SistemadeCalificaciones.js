const readline = require('readline-sync');
const chalk = require('chalk');

/**
 * @author MacGyver2.0
 */

/**
 * Problema de caso de uso: Sistema de evaluacion de calificaciones estudiantiles.
    Se registran 8 calificaciones (escala 0-10) en una Cola Circular implementada
    sobre un array de tamano fijo, respetando el principio FIFO (First In, First
    Out) mediante el manejo de punteros de inicio y fin con aritmetica modular.
    Sobre esa cola se calcula el promedio del curso, se identifican las notas que
    superan el promedio, se clasifica cada nota como Aprobado/Reprobado (nota
    minima de aprobacion: 7), y se determina la nota mas alta y mas baja. El
    procesamiento de los datos se realiza de forma recursiva en lugar de bucles.
 */

const Capacidad = 8; //tamano fijo del array de la cola circular
const Nota_Minima = 0;
const Nota_Maxima = 10;
const Nota_Minima_Aprobacion = 7;

//Cola Circular implementada sobre un array de tamano fijo.
//inicio: indice del primer elemento (frente de la cola)
//fin: indice de la ultima posicion ocupada
//cantidad: numero de elementos actualmente almacenados (permite diferenciar
//cola vacia de cola llena, ya que ambas podrian coincidir en inicio === fin)
class ColaCircular {
    constructor(capacidad) {
        this.datos = new Array(capacidad);
        this.capacidad = capacidad;
        this.inicio = 0;
        this.fin = -1;
        this.cantidad = 0;
    }

    estaLlena() {
        return this.cantidad === this.capacidad;
    }

    estaVacia() {
        return this.cantidad === 0;
    }

    //Encolar (enqueue): el puntero "fin" avanza con aritmetica modular,
    //de modo que al llegar al limite del array "da la vuelta" y reutiliza
    //las posiciones que hayan quedado libres al frente.
    encolar(valor) {
        if (this.estaLlena()) {
            console.log(chalk.red("La cola circular esta llena, no se puede encolar."));
            return;
        }
        let finAnterior = this.fin;
        this.fin = (this.fin + 1) % this.capacidad;
        this.datos[this.fin] = valor;
        this.cantidad++;

        //Traza visual del movimiento del puntero "fin"
        console.log(chalk.cyan("   [traza] fin: " + finAnterior + " -> " + this.fin +
            "  (posicion " + this.fin + " del array ahora contiene " + valor + ")"));
    }

    //Desencolar (dequeue): se extrae el valor en la posicion "inicio" y ese
    //puntero avanza tambien con modulo, liberando la posicion para que un
    //futuro encolar pueda reciclarla.
    desencolar() {
        if (this.estaVacia()) {
            return null;
        }
        let valor = this.datos[this.inicio];
        let inicioAnterior = this.inicio;
        this.inicio = (this.inicio + 1) % this.capacidad;
        this.cantidad--;

        console.log(chalk.cyan("   [traza] inicio: " + inicioAnterior + " -> " + this.inicio +
            "  (se libero la posicion " + inicioAnterior + " del array)"));
        return valor;
    }

    //Convierte el contenido actual de la cola a un array simple, respetando
    //el orden FIFO, para poder pasarlo a las funciones recursivas de
    //procesamiento sin alterar la cola circular original.
    aArray() {
        let resultado = [];
        let indice = this.inicio;
        for (let i = 0; i < this.cantidad; i++) {
            resultado.push(this.datos[indice]);
            indice = (indice + 1) % this.capacidad;
        }
        return resultado;
    }

    //Dibuja el array interno de la cola circular como una tabla en consola,
    //resaltando con colores las posiciones que marcan inicio y fin.
    mostrarTablaInterna() {
        let celdaSuperior = "";
        let celdaValor = "";
        let celdaInferior = "";
        let celdaIndice = "";

        for (let i = 0; i < this.capacidad; i++) {
            celdaSuperior += "+-----";
            celdaInferior += "+-----";

            let contenido = this.datos[i] !== undefined ? String(this.datos[i]) : "·";
            let texto = contenido.padEnd(4, " ");

            if (i === this.inicio && i === this.fin) {
                celdaValor += "|" + chalk.bgMagenta.black(" " + texto);
            } else if (i === this.inicio) {
                celdaValor += "|" + chalk.bgGreen.black(" " + texto);
            } else if (i === this.fin) {
                celdaValor += "|" + chalk.bgYellow.black(" " + texto);
            } else {
                celdaValor += "| " + texto;
            }
            celdaIndice += " " + String(i).padEnd(4, " ");
        }
        celdaSuperior += "+";
        celdaInferior += "+";
        celdaValor += "|";

        console.log("   " + celdaSuperior);
        console.log("   " + celdaValor);
        console.log("   " + celdaInferior);
        console.log("   " + celdaIndice);
        console.log("   " + chalk.green("■ inicio (idx " + this.inicio + ")") +
            "    " + chalk.yellow("■ fin (idx " + this.fin + ")"));
    }
}

//Dibuja una linea de separacion para organizar visualmente las secciones
//de la salida en consola.
function separador(titulo) {
    let linea = "=".repeat(60);
    console.log("\n" + chalk.bold.blue(linea));
    console.log(chalk.bold.blue("  " + titulo));
    console.log(chalk.bold.blue(linea));
}

//Dibuja una barra horizontal de texto proporcional al valor, util para
//comparar calificaciones de un vistazo (escala 0 a 10).
function barra(valor) {
    let llenas = Math.round(valor);
    let vacias = Nota_Maxima - llenas;
    let color = valor >= Nota_Minima_Aprobacion ? chalk.green : chalk.red;
    return color("█".repeat(llenas)) + chalk.gray("░".repeat(vacias));
}

function main() {
    separador("SISTEMA DE EVALUACION DE CALIFICACIONES");

    //Crear la cola circular con capacidad fija de 8
    let cola = new ColaCircular(Capacidad);
    //pedir 8 calificaciones (validadas) y encolarlas
    cargarValores(cola);

    separador("ESTADO DE LA COLA CIRCULAR TRAS LA CARGA");
    cola.mostrarTablaInterna();

    let valores = cola.aArray();

    separador("TABLA DE CALIFICACIONES");
    valores.forEach((nota, i) => {
        let etiqueta = chalk.bold("Estudiante " + (i + 1).toString().padStart(2, "0"));
        console.log("   " + etiqueta + "  " + String(nota).padStart(2, " ") + "  " + barra(nota));
    });

    //calcular el promedio del curso, de forma recursiva
    let prom = promedio([...valores]);
    console.log("\n   " + chalk.bold.white("Promedio del curso: ") + chalk.bold.cyan(prom));

    separador("CALIFICACIONES POR ENCIMA DEL PROMEDIO");
    mostrarValoresMayoresQue(prom, [...valores]);

    separador("CLASIFICACION (minimo para aprobar: " + Nota_Minima_Aprobacion + ")");
    clasificarAprobados([...valores]);

    separador("VALORES EXTREMOS DEL CURSO");
    let notaMaxima = obtenerMaxima([...valores]);
    let notaMinima = obtenerMinima([...valores]);
    console.log("   " + chalk.bold.green("Nota mas alta: ") + notaMaxima);
    console.log("   " + chalk.bold.red("Nota mas baja: ") + notaMinima);
    console.log("");
}

//Pide una calificacion por consola y la valida, repitiendo la pregunta hasta
//recibir un numero entero dentro del rango permitido (0 a 10).
function pedirCalificacionValida(numeroEstudiante) {
    let valor;
    let esValida = false;

    while (!esValida) {
        let entrada = readline.question(chalk.white("Ingrese la calificacion del estudiante " +
            numeroEstudiante + " (0-10): "));
        valor = parseInt(entrada);

        if (isNaN(valor)) {
            console.log(chalk.red("   Entrada invalida. Debe ingresar un numero entero."));
        } else if (valor < Nota_Minima || valor > Nota_Maxima) {
            console.log(chalk.red("   Fuera de rango. La calificacion debe estar entre " +
                Nota_Minima + " y " + Nota_Maxima + "."));
        } else {
            esValida = true;
        }
    }
    return valor;
}

function cargarValores(cola) {
    for (let i = 0; i < Capacidad; i++) {
        let valor = pedirCalificacionValida(i + 1);
        cola.encolar(valor);
    }
}

function promedio(valores) {
    let cantidad = valores.length; //guardar el tamaño antes de que sumatoria vacie el array
    return (sumatoria([...valores]) / cantidad).toFixed(3); //copia para no destruir el original
}

//Sumatoria recursiva: en cada llamada se extrae el primer elemento del
//arreglo y se suma al resultado de la llamada recursiva sobre el resto.
function sumatoria(valores) {
    if (valores.length === 0) {
        return 0; //caso base: arreglo vacio, no hay nada que sumar
    }
    let primero = valores.shift();
    return primero + sumatoria(valores);
}

//Recorrido recursivo para mostrar las calificaciones que superan el promedio.
function mostrarValoresMayoresQue(valor, valores) {
    if (valores.length === 0) {
        return; //caso base: ya no quedan valores por revisar
    }
    let actual = valores.shift();
    if (actual > valor) {
        console.log("   " + chalk.green(actual) + "  " + barra(actual));
    }
    mostrarValoresMayoresQue(valor, valores);
}

//Recorrido recursivo para clasificar cada calificacion como Aprobado o
//Reprobado, segun la nota minima de aprobacion.
function clasificarAprobados(valores) {
    if (valores.length === 0) {
        return; //caso base: ya no quedan calificaciones por clasificar
    }
    let actual = valores.shift();
    if (actual >= Nota_Minima_Aprobacion) {
        console.log("   Nota " + String(actual).padStart(2) + ": " + chalk.bgGreen.black(" Aprobado "));
    } else {
        console.log("   Nota " + String(actual).padStart(2) + ": " + chalk.bgRed.black(" Reprobado "));
    }
    clasificarAprobados(valores);
}

//Busqueda recursiva de la nota mas alta.
function obtenerMaxima(valores) {
    if (valores.length === 1) {
        return valores[0]; //caso base: un solo valor, ese es el maximo de ese tramo
    }
    let primero = valores.shift();
    let maximoDelResto = obtenerMaxima(valores);
    return primero > maximoDelResto ? primero : maximoDelResto;
}

//Busqueda recursiva de la nota mas baja.
function obtenerMinima(valores) {
    if (valores.length === 1) {
        return valores[0]; //caso base: un solo valor, ese es el minimo de ese tramo
    }
    let primero = valores.shift();
    let minimoDelResto = obtenerMinima(valores);
    return primero < minimoDelResto ? primero : minimoDelResto;
}

main();