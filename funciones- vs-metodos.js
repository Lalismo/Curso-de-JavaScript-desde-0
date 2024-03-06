//Capacidades que tienen las funcines al igual que otros objetos

//Pasar funciones como argumentos ->

function a (){}
function b (){}
b(a)

//Retornar funciones

function a (){
    function b(){
    }
    return b
}

//Asignar funciones a variables -> Expresión de función

const a = function(){
}

//Tener propiedades y metodos
function a () {}
const obj = {}
a.call(obj)

//Anidar funciones ->Nested functions
function a (){
    function b(){
        function c (){

        }
        c()
    }
    b()   
}
a()

//Es posible almacenar funciones en objetos?
const rocket = {
    name: 'Falcon 9',
    launchMessage: function launchMessage (){
        console.log('Despego')
    }
}