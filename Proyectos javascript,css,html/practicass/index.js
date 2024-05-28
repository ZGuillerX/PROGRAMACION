/* objetos sin destructuracion 
const perfilPersona = {
 nombre: "camilo",
 apellido: "ramirez",
 edad: 25
}
console.log(perfilPersona.edad)

//objetos con destructuracion 
let {nombre,apellido,edad} = perfilPersona;
console.log(nombre,apellido,edad)

// arreglos sin destructuracion 
const arreglodeNumeros = [1,2,3];
let uno = arreglodeNumeros[0],
dos = arreglodeNumeros[1],
tres = arreglodeNumeros[2];
console.log(uno,dos,tres)

// parametro rest*/


/**function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    // Iteramos desde 2 hasta la raíz cuadrada del número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        // Si el número es divisible por algún otro número que no sea 1 o sí mismo, no es primo
        if (numero % i === 0) {
            return "el numero no es primo";
        }
    }
    // Si el bucle termina sin encontrar ningún divisor, el número es primo
    return "el numero es primo";
}

// Ejemplo de uso
console.log(esPrimo(17)); // Devuelve true
console.log(esPrimo(13)); // Devuelve false*/


/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */
//SOLUCION
/*
for(i = 1; i <= 100; i++){
    console.log(`\n numero ${i} es:`)
 if(i % 3 === 0){
    console.log("fizz")
 }if (i % 5 === 0){
    console.log("buzz")
 }if(i % 15 === 0){
    console.log("fizzbuzz")
 }
}*/

/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

/*function sonAnagramas(palabra1, palabra2) {
    // Convertir las palabras a minúsculas y eliminar espacios en blanco
    palabra1 = palabra1.toLowerCase().replace('');
    palabra2 = palabra2.toLowerCase().replace('');

    // Ordenar los caracteres de ambas palabras alfabéticamente
    const palabraOrdenada1 = palabra1.split('').sort().join('');
    const palabraOrdenada2 = palabra2.split('').sort().join('');
    // Comparar las palabras ordenadas
    return palabraOrdenada1 === palabraOrdenada2;
}

// Ejemplo de uso:
console.log(sonAnagramas('sea', 'ase')); // Devuelve true
console.log(sonAnagramas('hello', 'world')); // Devuelve false*/

/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

/*let a = 0; 
let b = 1;

for (let i = 0; i < 50; i++) {
    const calcular = a + b;
    console.log(`${a} + ${b} = ${calcular}`);
    a = b;
    b = calcular;
}*/

/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

//metodo forEach
/*function suma(a,b, ...c){
    let resultado = a + b
c.forEach(function(n) {
    resultado += n
});
return resultado
}
console.log(suma(1,2,3,5,5))*/


/*let array1 =[1,2,3,4,5],
array2 = [6,7,8,9,0]

let combinarArrays = [...array1,...array2]

console.log(combinarArrays[2])

//const saludar = name => console.log(`hola ${name}`)
// saludar("camilo")

console.log(array1[2])*/

/*let contador = 1;
let tabla = 2
while(contador <= 10){
    let calcular = contador * 2
    console.log(`${tabla} X ${contador} = ${calcular}`)
    contador ++;
}*/

//Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

const caracteres = (contar) => contar.length
console.log(caracteres("camisa"))

//Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const recortarTexto = (texto, caracteres) => texto.slice(0, caracteres);
console.log(recortarTexto("Hola Mundo",8));

//Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

function repetirTexto(texto, repeticiones) {
    let resultado = ' ';
    for (let i = 0; i < repeticiones; i++) {
        resultado += texto;
        if (i < repeticiones) {
            resultado += ' ';
        }
    }
    return resultado;
}

// Ejemplo de uso
console.log(repetirTexto('Hola Mundo', 3));


