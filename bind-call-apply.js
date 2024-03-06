const owner = 'Lalo'
const address = '123 Avenue'

function  dogGreeting(owner,address){
    console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`)
}

const newHouse = {
    dogName: 'Coconut'
}
//Para poder hacer llamado desde el metodo y cuando tenemos 1 o 2 parametros extra se pueden ocupar
dogGreeting.call(newHouse,owner,address)
//Cuando tenemos muchos más parametros podemos ponerlo en un array y pasarlo con apply para
//que sea un poco más ordenado a la hora de leer el codigo
const necessaryValues = [owner,address]
dogGreeting.apply(newHouse,necessaryValues)
//para cuando nosotros queramos obtener otra función y esta sea utilizada.
const bindingWithBind = dogGreeting.bind(newHouse,owner,address)
bindingWithBind()
console.log(bindingWithBind)