let exprecion = "mangos"

switch (exprecion) {
    case "mangos":
        console.log("Los mangos x5 cuestan $1")
        break;
    case "naranjas":
        console.log("Las naranjas x10 cuestan $1")
        break;
    case "manzanas":
        console.log("Las manzanas x5 cuestan $1")
    default:
        console.log(`Lo siento no contamos con ${exprecion}`)
        break;
}
console.log("Quiere compra algo mas?")
