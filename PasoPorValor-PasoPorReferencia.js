//Paso por valor
/*Lo que se esta haciendo es el paso por valor
Esto se refiere a poder hacer un cambio de valor
en una variable ya creada con un valor dado
y adelante en el codigo cambiar su valor original
por otro
*/
let x = 1
let y = 'Hola'
let z = null

let a = x
let b = y
let c = z

console.log(x,y,z,a,b,c)

a = 12
b = 'Platzi'
c = undefined
console.log(x,y,z,a,b,c)

//Paso por referencia

let frutas = ['manzana']
frutas.push('pera')
console.log(frutas)

let panes = ['🥐']
let copiaDePanes = panes
panes.push('🥖')
console.log(panes, copiaDePanes)


/*
En el paso por referencia, se pasa la referencia
a la ubicación en memoria de la variable como
argumento a la función. Cualquier modificación
realizada dentro de la función afecta directamente 
a la variable original fuera de la función.
Este enfoque es común en lenguajes que
trabajan con objetos y estructuras de datos más complejas.
*/


function modificarArray(arr) {
    arr.push(4);
    console.log(arr); // Dentro de la función: el array es modificado
}

let miArray = [1, 2, 3];
modificarArray(miArray);
console.log(miArray); // Fuera de la función: miArray se ve afectado

/*
En este ejemplo, miArray se ve afectado por la función modificarArray
porque se pasa una referencia al mismo array,
no una copia de su contenido.
*/