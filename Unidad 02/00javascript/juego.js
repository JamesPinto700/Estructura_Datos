const numeroSecreto = Math.floor(Math.random() * 10 + 1);
const numeroJugador = parseInt(prompt("Adivina el numeor secreto entre el 1 al 10"));

console.log(`Este es el numero con el que juegas ${numeroJugador}`)

if (numeroJugador === numeroSecreto) {
    console.log("Felicidades, adivinaste el numero secreto!!")
} else if (numeroJugador < numeroSecreto) {
    console.log("Numero menor!!!, intenta nuevamente")
} else {
    console.log("Numero mayor/ Muy alto, intenta nuevamente")
}

//Comparadores, comparacion de resultados
const a = 10
const b = 20
const c = "30"

a == b
a === b
a === c
a == c