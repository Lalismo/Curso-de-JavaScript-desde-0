//Funciones puras
/*
Las caracteristicas que tienen las funciones puras
son 2, la primera es que dada una entrada siempre
va a tener una misma salida y la segunda es que no
pueden producir efectos secundarios ->Side effects*/ 

//Side effects que pueden hacer una función pura a impura
// * Modificar variables globales.
// * Modificar parámetros.
// * Solicitudes HTTP.
// * Impresiones de mensajes en pantalla o consola.
// * Manipulación del DOM (Document Obect Model).
// *Obtener la hora actual.

//Estructura de una funcion pura
function sum (a,b){
    return a + b
}


//Funciones impuras

function sum (a,b){
    console.log('A:', a)
    return a + b
}

let total = 0

function sumWithideEffect () {
    total += a
    return total
}
//Funciones puras
function square(x){
    return x * x
}

function addTen (y){
    return y + 10
}
/*Lo que hacemos es juntar las 2 funciones para poder ver el funcionamiento de ellas juntas
 y podemos ver que el resultado que nos suelta es 35 y de igual forma las funciones siguen siendo 
 puras, ya que el contenido de ellas lo es, si este llega a cambiar por algun Side effect dejaran de serlo
*/
 const number = 5
const finalResult = addTen(square(number))
console.log(finalResult)