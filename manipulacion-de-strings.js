//String primitivo
/*
La diferencia principal que se tiene con los string de tipo objeto
que es los strings primitivos son valores inmutables y si se
quiere cambiar el valor original que este tiene, se estara creando uno nuevo,
sin encambio los string objeto son de tipo mutable haciendo que se
pueda modificar su valor original
*/
const   stringPrimitivo = 'Soy un string primitivo'
console.log(typeof stringPrimitivo)

const stringPrimitivoTambien = String('Soy un string primitivo también')
console.log(typeof stringPrimitivoTambien)

//String objeto
const stringObjeto = new String('Soy un string objeto')
console.log(typeof stringObjeto)

//Acceder a caracteres
const saludo = 'Hola. ¿Cómo estás?'
console.log(saludo[2])
console.log(saludo.charAt(2))
console.log(saludo.indexOf('a'))
console.log(saludo.indexOf('Cómo'))
console.log(saludo.indexOf('cómo'))
console.log(saludo.lastIndexOf('o'))
console.log(saludo.slice(3,5))
console.log(saludo.length)
console.log(saludo.toLocaleUpperCase())
console.log(saludo.toLocaleLowerCase())

const saludoDividido = saludo.split(' ')
console.log(saludoDividido)
console.log(saludoDividido[1])


const saludoConEspacios = ' Hola Mundo'
console.log(saludoConEspacios)
const saludoSinEspacios = saludoConEspacios.trim()
console.log(saludoSinEspacios)

const saludoOriginal = 'Hola Mundo'
const nuevoSaludo = saludoOriginal.replace('Mundo', 'Eduardo')
console.log(nuevoSaludo)