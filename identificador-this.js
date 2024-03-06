//Enlace implicito -> Implicit binding

const house = {
    dogName: 'Fido',
    dogGreeting: function (){
        console.log(`Hi, I'm ${this.dogName}`)
    }
}
house.dogGreeting()

//Enlace explicito -> Explicit binding
/*
Lo que se esta haciendo en esta función explicita es mandar a llamar
de nuevo el nombre del perro, pero si lo mandamos a llamar como arroba nos 
saldra error ya que ahora no tiene el metodo de newHouse enlazado y
para hacer eso tenemos que mandar la función y llamar(call) al nuevo metoodo
para que este lanzado con el this */
function dogGreeting(){
    console.log(`Hi, I'm ${this.dogName}`)
}

const newHouse = {
    dogName: 'Coco',
}

dogGreeting.call(newHouse)

/*
Aqui tenemos lo mismo de arriba nada más que ahora se le estan enlazando
parametros con un metodo a la función y de igual forma si queremos enlazarlo
primero tenemos que crear los parametros en este caso, traemos a la función 
y hacemos el llamado para el metodo y los 2 parametross que queremos agregar.
Nota: EL USO DE THIS ES PARA LLAMAR EL CONTENIDO DE UN METODO Y SIRVE PARA 
ENLAZAR LA FUNCIÓN CON EL METODO
 */

function newDogGreeting(owner,address){
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`)
}

const owner = 'Lucy'
const address = 'Avenue 123'
newDogGreeting.call(newHouse,owner,address)