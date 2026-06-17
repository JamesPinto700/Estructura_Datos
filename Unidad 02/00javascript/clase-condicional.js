/*Condicionales*/

//if, else if y else
function verificarCalificacion(calificacion) {
    if (calificacion < 7) {
        return 'Reprobado'
    } else if (calificacion === 7) {
        return 'Pasable'
    } else {
        return 'Exonerado'
    }
}

//switch
function verificarDia(dia) {
    switch (dia) {
        case 'lunes':
            return 'Inicio de semana'
        case 'viernes':
            return 'Fin de semana laboral'
        default:
            return 'Día regular'
    }
}

//Operador ternario (Version corta de if '?' y else ':')
function verificarNota(nota) {
    const resultado = nota >= 7 ? 'Aprobado' : 'Reprobado'
    return resultado
}

//Nullish coalescing '??' (Para tratar valores nulos:
//Devuelve el lado derecho solo si el izquierdo es nulo o indefinido)
function verificarEntrada(entrada) {
    const valor = entrada ?? 'Sin dato'
    return valor
}

//Optional chaining '?.' (Se usa para evitar errores al acceder a propiedades que pueden no existir:
//Devuelve un valor indefinido si no existe un valor)
function verificarUsuario(usuario) {
    const nombre = usuario?.nombre
    return nombre !== undefined ? `Hola, ${nombre}` : 'undefined (el objeto es null)'
}
