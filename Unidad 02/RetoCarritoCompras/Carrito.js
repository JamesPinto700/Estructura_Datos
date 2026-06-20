
// Traducción de Carrito.java a JavaScript (Node.js, consola)
// Requiere el paquete "prompt-sync": npm install prompt-sync

const promptSync = require("prompt-sync")();

/**
 *
 * @author MacGyver2.0
 */
function main() {
    const productos = ["Manzana", "Pera", "Uva", "Naranja", "Fresa"];
    const precios = [0.70, 0.50, 1.00, 0.80, 1.20];
    let opcion = 0;   // ---> opciones para el usuario.
    let total = 0;    // ---> total a pagar.

    // En JS un array normal nos sirve para simular el carrito (no existe ArrayList).
    const carrito = [];

    console.log("Productos disponibles");

    for (let i = 0; i < 5; i++) {
        console.log((i + 1) + " " + productos[i] + " $" + precios[i]);
    }

    console.log("Bienvenido a mi fruteria");
    console.log("Por favor eliga las frutas que se encuentran en la lista");
    console.log("Pulse 6, para ver la lista");
    console.log("Pulse 7, para ver el total y pagar");

    do {
        const entrada = promptSync("Opcion: ");

        // IMPORTANTE: promptSync siempre devuelve un STRING.
        // Si no lo convertimos con parseInt(), el switch nunca va a "matchear".
        opcion = parseInt(entrada, 10);

        // Si el usuario digito una letra o dejo vacio, parseInt devuelve NaN.
        if (isNaN(opcion)) {
            console.log("Por favor digite un numero valido (1-7).");
            continue;
        }

        switch (opcion) {
            case 1:
                carrito.push(productos[0]);
                total = total + precios[0];
                break;
            case 2:
                carrito.push(productos[1]);
                total = total + precios[1];
                break;
            case 3:
                carrito.push(productos[2]);
                total = total + precios[2];
                break;
            case 4:
                carrito.push(productos[3]);
                total = total + precios[3];
                break;
            case 5:
                carrito.push(productos[4]);
                total = total + precios[4];
                break;
            case 6:
                if (carrito.length === 0) {
                    console.log("El carrito esta vacio.");
                } else {
                    console.log("Lista que tiene en el carrito.");
                    for (let i = 0; i < carrito.length; i++) {
                        console.log(carrito[i]);
                    }
                }
                break;
            case 7:
                // Queda vacio para que el while se encargue de romper el ciclo.
                break;
            default:
                console.log("Opcion invalida. Intente de nuevo.");
                break;
        }
    } while (opcion !== 7);

    console.log("El total a pagar es de: " + total.toFixed(2) + ". Gracias por su compra");
}

main();
