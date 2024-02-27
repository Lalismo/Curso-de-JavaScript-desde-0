const isActive = true
const hasPermisson = false

//Conversion implicita -> Lo hace JavaScript
const result = 5 > 3
console.log(result)

const name = 'Platzi'
console.log(!!name)


//Conversion explicita
const value = 0
const otherValue = 23
const explicitBoolean = Boolean(value)
const explicitBoolean2 = Boolean(otherValue)

console.log(`Value: ${explicitBoolean}, other Value ${explicitBoolean2}`)