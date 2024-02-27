/*
10 tipos de datos
Primitivos      Complejos

string          object
number          array
boolean         function
null
undefined
symbol
bigint

Inmutables      Mutables

Se pasan        Se pasan
por valor       por referencia

*/

//Tipo de dato primitivo - Inmutable
/*
Veras que los valores "Cambian", pero realmente no
lo que pasa es que el valor original nunca cambio
y se sigue manteniendo solo lo que hace es que se
crea uno nuevo
*/
let numero = 23
numero = numero + 10
console.log(numero)

let esVerdadero = true
esVerdadero = false
console.log(esVerdadero)

//Tipo de dato complejo - Mutable
let usuario = {nombre: 'pepito', edad: 15}
usuario.edad = 20
console.log(usuario)

let frutas = ['manzana', 'pera']
frutas[0] = 'sandia'
console.log(frutas)

function cambiarNombre (objecto){
    objecto.nombre = 'Nuevo nombre'
}

let persona = {nombre: 'Antonio'}
cambiarNombre(persona)
console.log(persona)