
/*Podemos controlar cuándo queremos salir de un bucle utilizando 
la palabra reservada break. Cuando el intérprete de JavaScript
encuentra la palabra break, sale del bucle y continúa ejecutando
el código que haya después.*/
let cuentaAtras = 10

while (cuentaAtras > 0) {
  console.log(cuentaAtras)
  cuentaAtras = cuentaAtras - 1

  // si la cuenta atrás es 5, salimos del bucle
  if (cuentaAtras === 5) {
    break // <---- salimos del bucle
  }
}

/*Igual que tenemos la posibilidad de "romper" 
el bucle con break, también podemos saltarnos una
iteración con continue. Cuando el intérprete de JavaScript
encuentra la palabra continue, salta a la siguiente iteración del bucle.

let cuentaAtras = 10

while (cuentaAtras > 0) {
  cuentaAtras = cuentaAtras - 1

  // si la cuenta atrás es un número par...
  if (cuentaAtras % 2 === 0) {
    continue // <---- saltamos a la siguiente iteración
  }

  console.log(cuentaAtras)
}*/

/*ANIDACION DE BUCLES
Podemos anidar bucles dentro de otros bucles. 
Imagina que en nuestra cuenta atrás para el cohete,
 tenemos que revisar que 3 cosas están en sus parámetros:
  el oxígeno, el combustible y la temperatura.

const NUMERO_REVISIONES = 3
let cuentaAtras = 10

// mientras la cuenta atrás sea mayor que 0
while (cuentaAtras > 0) {
  // mostramos el valor de la cuenta atrás
  console.log(cuentaAtras)

  // creamos una variable para contar las revisiones realizadas
  // y la inicializamos a cero
  let revisionesRealizadas = 0

  // hasta que no hayamos realizado las 3 revisiones...
  while (revisionesRealizadas < NUMERO_REVISIONES) {
    // y sumamos 1 a las revisiones realizadas
    revisionesRealizadas = revisionesRealizadas + 1
    console.log(revisionesRealizadas + ' revisiones realizadas...')
  }

  // ahora podemos restar 1 a la cuenta atrás
  cuentaAtras = cuentaAtras - 1
}*/


/*LA ESTRUCTURA DE CONTROL FOR EN JAVASCRIPT
es muy útil para ejecutar una serie de instrucciones
un número determinado de veces. A diferencia de while
que usa una condición para determinar si se ejecuta
o no el bloque de código, for usa un contador que
se incrementa en cada iteración hasta que se cumple una condición.

LA SINTAXIS DE FOR ES LA SIGUIENTE:

for (inicialización; condición; actualización) {
  // código a ejecutar
}*/

/*EJEMPLO DE USO DE FOR
El siguiente ejemplo muestra cómo se puede
 usar for para imprimir los números del 1 al 10:

for (let number = 1; number <= 10; number++) {
  console.log(number)
}*/

/*La inicialización es la declaración de la variable number
 y la asignación del valor 1.
La condición es que mientras number <= 10, se itera el bucle.
La actualización es number++ que incrementa 
el valor de number en 1 después de cada iteración.*/

for (let i = 10; i >= 0; i--) {
    if (i === 0) {
      console.log('¡Despegue 🚀!')
    } else {
      console.log('Faltan ' + i + ' segundos')
    }
  }


  /*CONTINUE Y BREAK
Al igual que en while, for también tiene las
palabras reservadas continue y break para
controlar el flujo de ejecución del bucle.

Recuerda que continue se usa para saltar
a la siguiente iteración del bucle y break
para salir del bucle.

Ejemplo:
  for (let i = 0; i < 10; i++) {
    const esPar = i % 2 === 0
    if (esPar) {
      continue
    }
  
    // Solo mostramos este consola.log si es impar
    console.log(i)
  
    // Salimos del bucle al llegar al 7
    if (i === 7) {
      break
    }
  }*/



  /*BUCLES ANIDADOS CON FOR
Imagina que quieres crear la tabla de multiplicar
del 1 al 10. Para ello, necesitas un bucle que itere 
del 1 al 10 y, dentro de ese bucle, otro bucle que
 itere del 1 al 10. Esto se puede hacer con dos bucles
  for anidados (uno dentro del otro)*/

/*  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      const resultado = i * j
      console.log(i + ' x ' + j + ' = ' + resultado)
    }
  }*/


  /*for (let i = 0; i < 10 && i !== 3; i++) {
    console.log('Hola')
  }
Como tenemos la condiciónde i !== 3, 
cuando lleguemos ahí dejará de iterar.*/





/*En JavaScript podemos recuperar la información
de la hora y la fecha usando el objeto Date.
Este objeto tiene un método llamado getDay()
que nos devuelve el día de la semana en formato
numérico, siendo 0 el domingo y 6 el sábado*/

const dia = new Date().getDay()

// segun el dia de la semana, mostramos un mensaje diferente
switch (dia) {
  case 0:
    console.log("¡Hoy es domingo! 😴")
    break
  case 1:
    console.log("¡Nooo, es lunes! 😢")
    break
  case 2:
    console.log("¡Hoy es martes! 🥵")
    break
  case 3:
    console.log("¡Hoy es miércoles! 🤓")
    break
  default:
    console.log("Se acerca el fin de! 🚀")
    break
}


/*Muchas veces verás que puedes escribir
 el mismo código usando switch o if.
  El ejemplo anterior con un if:*/
/*
const dia = new Date().getDay()

if (dia === 0) {
  console.log("¡Hoy es domingo! 😴")
} else if (dia === 1) {
  console.log("¡Nooo, es lunes! 😢")
} else if (dia === 2) {
  console.log("¡Hoy es martes! 🥵")
} else if (dia === 3) {
  console.log("¡Hoy es miércoles! 🤓")
} else {
  console.log("Se acerca el fin de! 🚀")
}
A veces es más fácil de leer con switch
 y otras con if. ¡Depende de ti! 
*/



/*Existe un patrón que se usa a veces con switch 
que es switch(true). Esto es, en lugar de 
evaluar una expresión, evalúa una condición
 ignorando por completo el valor de la expresión

Por ejemplo:*/

let edad = 25;

switch(true) {
  case (edad >= 18 && edad < 25):
    console.log("Eres mayor de edad y eres joven");
    break;
  case (edad >= 25 && edad < 40):
    console.log("Eres mayor de edad y estás en plena madurez");
    break;
  case (edad >= 40):
    console.log("Eres mayor de edad y estás en la mejor edad");
    break;
  default:
    console.log("Eres menor de edad");
}

/*Math.random(): devuelve un número aleatorio entre 0 y 1, con decimales.*/
/*Math.floor(): redondea un número hacia abajo.*/

/*Sabiendo esto, podríamos crear una función
 que nos devuelva un número aleatorio del 1 al 10:*/

function getRandomNumber() {
  // recuperamos un número aleatorio entre 0 y 1
  const random = Math.random() // por ejemplo: 0.6803487380457318

  // lo multiplicamos por 10 para que esté entre 0 y 10
  const multiplicar = random * 10 // -> 6.803487380457318

  // redondeamos hacia abajo para que esté entre 0 y 9
  const redondeamos = Math.floor(multiplicar) // -> 6

  // le sumamos uno para que esté entre 1 y 10
  const resultado = redondeamos + 1 // -> 7

  // devolvemos el resultado
  return resultado
}
console.log(getRandomNumber())
/*Ahora cada vez que llamemos esta 
funcion nos va a dar un numero aleatorio entre 1 y 10 */


/*Vamos a crear una función que simule un microondas.
 Le pasaremos el plato, tiempo y potencia.
  Y nos devolverá el resultado del plato cocinado*/

function cocinarMicroondas(plato, tiempo, potencia) {
  if (plato === '🐥' && tiempo === 1 && potencia === 5) {
    return '🍗'
  }

  if (plato === '🥚' && tiempo === 2 && potencia === 3) {
    return '🍳'
  }
  return '❌ Plato no soportado'
}
/*Si usamos bien los parámetros,
la función funciona correctamente:*/
console.log(cocinarMicroondas('🐥',1,5))// -> 🍗

console.log(cocinarMicroondas('🥚',2,3))// -> 🍳

/*pero si cambiamos el orden de los parámetros,
la función no funciona:*/
console.log(cocinarMicroondas(5,1,'🐥'))// -> ❌ Plato no soportado


/*¿QUE ES UNA FUNCTION EXPRESSION?
Una function expression es una
función que se asigna a una variable. Por ejemplo:*/

/* esto es una function expression
const sum = function (a, b) {
  return a + b
}

/* esto es una declaración de función
function sum(a, b) {
  return a + b
}

/*Con la function expression, a la función 
se asigna a la variable sum. Esto significa
que podemos llamar a la función usando el
nombre de la variable:
sum(1, 2) // -> 3*/


/*HOISTING QUE ES?
El hoisting es un término que se usa para describir
cómo JavaScript parece que mueve las declaraciones
funciones al principio del código, de forma que
las puedes usar incluso antes de declararlas.
Por ejemplo:*/
console.log(sum (1, 2)) // -> 3

function sum(a, b) {
  return a + b
}

/*¿Y qué pasa con las function expression?
Pues que no se aplica el hoisting. Por ejemplo:

sum(1, 2) // ❌ ReferenceError: sum is not defined

const sum = function (a, b) {
  return a + b
}*/

/* Funciones flecha
La sintaxis básica de una función flecha es la siguiente:*/

/*const miFuncionFlecha = () => {
  // código a ejecutar
}*/

/*Cuando una función flecha tiene una sola expresión,
podemos omitir las llaves {} y la palabra clave return 
para hacerla aún más corta. Esto se conoce como return
implícito. Vamos a pasar una función regular a una
función flecha y vamos a ver cómo se ve finalmente 
con return implícito:*/

// DECLARACION DE FUNCION REGULAR
function sumar(a, b) {
  return a + b
}

/* FUNCION FLECHA
const sumarFlecha = (a, b) => {
  return a + b
}*/

// Función flecha con return implícito
const sumarFlecha = (a, b) => a + b



//RECURSIVIDAD
/*La recursividad es una técnica de
 programación que consiste en que una función se llame a sí misma*/

/*Ejemplo de recursividad
Vamos a crear una función que cuente desde un número hasta cero*/

function cuentaaAtras(numero) {
  // Condición base: Si el número que recibe es
  // menor de 0 entonces salimos de la función
  if (numero < 0) {
  return 
 }

  // Si el número era mayor o igual a 0, lo mostramos
  console.log(numero)

  // Y llamamos a la función con el número anterior
  cuentaaAtras(numero - 1)
}
//Si llamamos a la función con el número 3, el resultado será:
cuentaaAtras(3)
// -> 3
// -> 2
// -> 1
// -> 0
/*La ejecución la veríamos así:

cuentaAtras(3) -> (muestra 3)
               \ 
          cuentaAtras(2) -> (muestra 2)
                       \
                  cuentaAtras(1) -> (muestra 1)
                               \
                          cuentaAtras(0) -> (muestra 0)
                                        \
                                   cuentaAtras(-1) -> salida*/

/*USANDO LA RECURSIVIDAD Y DEVOLVIENDO UN VALOR
La recursividad se usa muchas veces para solucionar 
algoritmos. Por ejemplo, vamos a crear una función 
que calcule el factorial de un número.
                                   
El factorial de un número es el resultado
de multiplicar ese número por todos los
anteriores hasta llegar a 1. Por ejemplo,
el factorial de 5 es 5 * 4 * 3 * 2 * 1 = 120 */        

function factorial(n) {
  // Condición base: Si el número es 0 o 1, devolvemos 1
  // y no llamamos a la función de nuevo
  if (n === 0 || n === 1) {
    return 1
  } else {
    // Si el número es mayor que 1, llamamos a la función
    return n * factorial(n - 1)
  }
}

console.log(factorial(5)) // -> 120
console.log(factorial(3)) // ->  6

/*factorial(3) --------------------------> 6
        \ 
  3 * factorial(2) ---------------> 6
          \
    2 * factorial(1) -----------> 2
            \
      1 * factorial(0) -------> 1*/



//EJERCICIO DE RECURSIVIDAD
/*Escribe una función que calcule la suma de los
primeros n números enteros de forma recursiva.
Por ejemplo: suma(3) -> 1 + 2 + 3 = 6

Escribe una función que calcule la sucesiónde
Fibonacci de forma recursiva. La sucesión
de Fibonacci es una serie de números que empieza
por 0 y 1 y cada número es la suma de los dos
anteriores. Por ejemplo: fibonacci(6) -> 8 (0, 1, 1, 2, 3, 5, 8)*/

/*DECLARACION Y ASIGNACION DE ARRAYS
Para declarar un array usamos los corchetes [] y dentro los 
elementos de la colección separados por comas ,.

Por ejemplo, para crear una colección de números del 1 al 5:

numeros =[1, 2, 3, 4, 5]*/
/*Para asignar un array a una variable, lo hacemos 
igual que con los otros tipos de datos:

const numbers = [1, 2, 3, 4, 5]
let names = ['Dani', 'Miguel', 'Maria']*/

//ACCESO A LOS ELEMENTOS DE UN ARRAY
/*Para acceder a los elementos de un array usamos
 los corchetes [] y dentro el índice del elemento 
 que queremos acceder. Los índices empiezan en 0.*/

const numbers = [1, 2, 3, 4, 5]

console.log(numbers[0]) // 1
console.log(numbers[2]) // 3

/*Puedes usar variables para acceder a los elementos de un array.

const numbers = [1, 2, 3, 4, 5]
let index = 2

console.log(numbers[index]) // -> 3*/

//MODIFICAR ELEMENTOS DE UN ARRAY
/*Igual que podemos acceder a los elementos de un array, podemos modificarlos

const numbers = [1, 2, 3, 4, 5]

numbers[0] = 10
numbers[2] = 30

console.log(numbers) //-> [10, 2, 30, 4, 5]*/


/*LA LONGITUD DE UN ARRAY
Puedes conocer la longitud de una colección 
de elementos usando la propiedad .length:

const frutas = ["manzana", "pera", "plátano", "fresa"]
console.log(frutas.length) //-> 4*/



/*También puedes cortar su longitud asignando 
un nuevo valor a la propiedad .length:*/

/*const frutas = ["manzana", "pera", "plátano", "fresa"]
frutas.length = 2

console.log(frutas) // -> ["manzana", "pera"]
console.log(frutas.length) // -> 2*/

//METODOS DE ARRAYS
/*Cuando trabajamos con colecciones de elementos,
vamos a querer hacer cosas con ellos. Por ejemplo:
añadir un elemento, eliminarlo, buscarlo, etc.
Para ello, los arrays tienen una serie de métodos
que nos permiten hacer estas operaciones:*/


//.push()
//El método .push() nos permite añadir un elemento al final de un array:
/*const frutas = ["plátano", "fresa"]
frutas.push("naranja")
console.log(frutas) // -> ["plátano", "fresa", "naranja"]*/

//Además, el método .push() devuelve la nueva longitud del array:

const frutas = ["plátano", "fresa"]
console.log(frutas.length) // -> 2

const newLength = frutas.push("naranja")
console.log(newLength) // -> 3
console.log(frutas) // -> ["plátano", "fresa", "naranja"]



/*.pop()
El método .pop() elimina y devuelve el último elemento de un array:

const frutas = ["plátano", "fresa", "naranja"]
const ultimaFruta = frutas.pop()

console.log(frutas) // ["plátano", "fresa"]
console.log(ultimaFruta) // "naranja"*/


/*.shift()
El método .shift() elimina y devuelve el primer elemento de un array. Es lo mismo que .pop(), pero con el primer elemento en lugar del último:

const frutas = ["plátano", "fresa", "naranja"]
const primeraFruta = frutas.shift()

console.log(frutas) // ["fresa", "naranja"]
console.log(primeraFruta) // "plátano"*/


/*.unshift()
El método .unshift() añade un elemento al principio de un array. Es lo mismo que .push(), pero con el primer elemento en lugar del último:

const frutas = ["plátano", "fresa", "naranja"]
frutas.unshift("manzana")

console.log(frutas) // ["manzana", "plátano", "fresa", "naranja"]*/


//CONCATENACION DE ARRAYS
/*Podemos concatenar dos arrays usando el método concat().

const numbers = [1, 2, 3]
const numbers2 = [4, 5]

const allNumbers = numbers.concat(numbers2)

console.log(allNumbers) // [1, 2, 3, 4, 5]*/

//Otra forma de concatenar arrays es usando el operador ... (spread operator). Este operador propaga los elementos de un array. Así que podríamos hacer lo siguiente:

const numberss = [1, 2, 3]
const numberss2 = [4, 5]

//                    1, 2, 3        4, 5                     
const allNumbers = [...numberss, ...numberss2]

console.log(allNumberss) // [1, 2, 3, 4, 5]