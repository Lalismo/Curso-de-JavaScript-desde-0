const  personalizedMessage = () => 'Goodbye everybody'
//Creación de objetos a partir de funcion constructora
function Rocket (name, ownMessage) {
    this.name = name
    this.lauchMessage = ownMessage
}

const falcon9Rocket = new Rocket('Falcon 9', personalizedMessage)
const falconHeavyRocket = new Rocket('Falcon Heavi', personalizedMessage)
console.log(falcon9Rocket.name)
console.log(falcon9Rocket.lauchMessage())

//Creación de objetos con arrow funtion sin utilizar new
const RocketWithArrowFunction=(name,ownMessage)=>({
    name:name,
    launchMessage:ownMessage
})
const personalizedMessageForArrowFunction=()=>'Successful launch !'
const falcon9Rocket1=RocketWithArrowFunction('Falcon 9',personalizedMessageForArrowFunction)
console.group(falcon9Rocket1.name)
console.group(falcon9Rocket1.launchMessage())