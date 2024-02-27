//Creación de string
const primeraOpcion = 'Comillas simples'
const segundaOpcion = "Comillas dobles"
const terceraOpcion = `Comillas invertidas`

//Concatenación: +
const direccion = 'Calle falsa 123'
const ciudad = 'Springfield'
const direccionCompleta = 'Mi dirección completa es '+direccion+ciudad
console.log(direccionCompleta)

const direccionCompletaConEspacio ='Mi direccion completa es '+direccion +' '+ciudad
console.log(direccionCompletaConEspacio)

//Concatenación: Template Literals
const nombre = 'Eduardo'
const pais = '🚩'
const presentación = `Hola, soy ${nombre} de ${pais}`
console.log(presentación)

//Concatenación: join()
const primeraParte = 'Me encanta'
const segundaParte = 'el pan de'
const terceraParte = '🥨'
const pensamiento = [primeraParte,segundaParte,terceraParte]
console.log(pensamiento.join(' - '))

//Concatenación: concat()
const hobbie1='correr'
const hobbie2='leer'
const hobbie3='estudiar'
const hobbies='Mis hobbies son: '.concat(hobbie1,', ',hobbie2,', ',hobbie3,'.')
console.log(hobbies)

//Caracteres de escape
//const whatDoIDo = 'I'm Software Engineer'

//1. Escape alternativo
const escapeAlternativo = "I'm Software Engineer"

//2. Barra invertida
const escapeBarraInvertida = "I\'m Software Engineer" 

//Escritura de Strings Largos
/*
    Lorem Ipsum es simplemente el texto
    de relleno de las imprentas y archivos de texto.
    Lorem Ipsum ha sido el texto de relleno estándar
    de las industrias desde el año 1500,
    cuando un impresor (N. del T. persona que se dedica a la imprenta)
    desconocido usó una galería de textos y
    los mezcló de tal manera que logró hacer
    un libro de textos especimen.
    No sólo sobrevivió 500 años,
    sino que tambien ingresó como texto
    de relleno en documentos electrónicos,
    quedando esencialmente igual al original.
    Fue popularizado en los 60s con la creación
    de las hojas "Letraset", las cuales contenian
    pasajes de Lorem Ipsum, y más recientemente con
    software de autoedición, como por ejemplo Aldus PageMaker,
    el cual incluye versiones de Lorem Ipsum. 
*/

const redaccion =   'Lorem Ipsum es simplemente el texto,\n' +
                'de relleno de las imprentas y archivos de texto,\n' +
                'Lorem Ipsum ha sido el texto de relleno estándar.'
console.log(redaccion)
console.log('----------------------')
const redaccion2 =   'Lorem Ipsum es simplemente el texto,\n\
    de relleno de las imprentas y archivos de texto,\n\
    Lorem Ipsum ha sido el texto de relleno estándar.'
console.log(redaccion2)
console.log('----------------------')
const redaccion3 =   `Lorem Ipsum es simplemente el texto,
    de relleno de las imprentas y archivos de texto,
    Lorem Ipsum ha sido el texto de relleno estándar.`
console.log(redaccion3)