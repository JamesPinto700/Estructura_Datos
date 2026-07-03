//Pregunta 1: Escribe un código que cree variables y las inicialice con valores de los tipos Boolean, Number, BigInt, String
//y undefined utilizando (siempre que sea posible) literales y funciones constructoras.
{
    let b1 = true;
    let b2 = Boolean(false);
    console.log(b1 + " and " + b2)

    let n1 = 150;
    let n2 = Number(245);
    console.log(n1 + " and " + n2)

    let bi1 = 100n;
    let bi2 = BigInt(200);
    console.log(bi1 + " and " + bi2)

    let s1 = "Hello World";
    let s2 = String("Hello World");
    console.log(s1 + " and " + s2)

  // undefined no tiene función constructora: es un valor primitivo que se obtiene
  // por defecto (variable sin inicializar) o escribiéndolo como literal.
    let u1 = undefined;
    console.log(u1)
}

//Pregunta 2: Imprime todos los valores y todos los tipos de esos valores utilizando `console.log`.
//Intenta utilizar la interpolación de cadenas para mostrar el valor y el tipo al mismo tiempo con una
//sola llamada a `console.log`, por ejemplo, de la siguiente forma: 1000 [número].
{
    let b1 = true;
    let b2 = 1000;
    let n1 = 100n;
    let n2 = "Hello World";
    let bi1 = undefined;
    let bi2 = null;
    let s1 = String("2356");
    let s2 = BigInt(124);

    console.log(`${b1} [${typeof b1}]`);
    console.log(`${b2} [${typeof b2}]`);
    console.log(`${n1} [${typeof n1}]`);
    console.log(`${n2} [${typeof n2}]`);
    console.log(`${bi1} [${typeof bi1}]`);
    console.log(`${bi2} [${typeof bi2}]`); // -> typeof null es "Object" por un erro historico de JavaScript que nunca se corrigió.
    console.log(`${s1} [${typeof s1}]`);
    console.log(`${s2} [${typeof s2}]`);
}

//Pregunta 3: Realiza una cadena de conversiones: crea un valor booleano a partir de un BigInt creado a partir de un Number
//que, a su vez, se creó a partir de una String. Comienza con el valor «1234». ¿Es posible?
{
  // Sí es posible: String -> Number -> BigInt -> Boolean encadenados en una sola expresión.
    let b = Boolean(BigInt(Number("1234")));
    console.log(`${b} [${typeof b}]`); // -> true [boolean]
}

// or

{
  // Misma cadena de conversiones, paso a paso, para verla más clara.
    let s = "1234";
    let n = Number(s);
    let bi = BigInt(n);
    let b = Boolean(bi);
  console.log(`${b} [${typeof b}]`); // -> true [boolean]
}


//Pregunta 4: Intenta sumar dos valores del mismo tipo y verifica el tipo del resultado. Prueba con todos los tipos primitivos.
{
    let b = true + false;
    let n = 100 + 200;
    let bi = 100n + 200n;
    let s = "He" + "llo";
    let u = undefined + undefined;

    console.log(`${b} [${typeof b}]`); // Da como resultado un numero ya que true y false se consideran como 1 y 0.
    console.log(`${n} [${typeof n}]`); // number + number -> number
    console.log(`${bi} [${typeof bi}]`); // bigint + bigint -> bigint
    console.log(`${s} [${typeof s}]`); // string + string -> concatenación (string)
    console.log(`${u} [${typeof u}]`); // undefined + undefined -> NaN, y typeof de NaN es "number"
}

//Pregunta 5: Intenta sumar dos valores de tipos diferentes y revisa los resultados.
{
    let b1 = true + 100;
  // let b2 = true + 100n; // -> Error! No se puede mezclar BigInt con otro tipo (excepto string) usando +
    let b3 = true + "100";
  // let n1 = 100 + 200n; // -> Error! No se puede mezclar Number con BigInt directamente
    let n2 = 100 + true;
    let n3 = 100 + "200";
  // let bi1 = 100n + 200;  // -> Error!
  // let bi2 = 100n + true  // -> Error!
    let bi3 = 100n + "200";
    let s1 = "100" + 200;
    let s2 = "100" + 200n;
    let s3 = "100" + true;
    let s4 = "abc" + 200;
    let s5 = "abc" + 200n;
    let s6 = "abc" + true;

    console.log(`${b1} [${typeof b1}]`);    // -> 101 [number]
  // console.log(`${b2} [${typeof b2}]`);
    console.log(`${b3} [${typeof b3}]`);    // -> true100 [string]
  // console.log(`${n1} [${typeof n1}]`);
    console.log(`${n2} [${typeof n2}]`);    // -> 101 [number]

  //cuando se usa "+" entre dos valores, JavaScript primero intenta convertirlos a primitivos y luego decide qué hacer según sus tipos
    console.log(`${n3} [${typeof n3}]`);    // -> 100200 [string]
  // console.log(`${bi1} [${typeof bi1}]`);
  // console.log(`${bi2} [${typeof bi2}]`);
    console.log(`${bi3} [${typeof bi3}]`);  // -> 100200 [string]
    console.log(`${s1} [${typeof s1}]`);    // -> 100200 [string]
    console.log(`${s2} [${typeof s2}]`);    // -> 100200 [string]
    console.log(`${s3} [${typeof s3}]`);    // -> 100true [string]
    console.log(`${s4} [${typeof s4}]`);    // -> abc200 [string]
    console.log(`${s5} [${typeof s5}]`);    // -> abc200 [string]
    console.log(`${s6} [${typeof s6}]`);    // -> abctrue [string]
}

//Pregunta 6: Intenta modificar la línea const str1 = 42 + "1"; para obtener el resultado 43 (sin quitar las comillas que rodean al 1).
{
  // El operador unario "+" convierte el string a "1" en el número 1 antes de sumarlo, sin necesidad de quitar las comillas.
    const str1 = 42 + +"1";
    console.log(str1) // -> 43
}
