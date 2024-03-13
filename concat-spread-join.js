// Methods that DO NOT modify the original array (Immutability).


const morseCode1 = ['....', '---']
const morseCode2 = ['.-..', '.-']

//Combine with concat() - way 1
const morseCodeMessage = morseCode1.concat(morseCode2)
console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessage)

//Combine with concat() - way 1

const morseCodeMessage2 = [].concat(morseCode1,morseCode2)
console.log(morseCodeMessage)

//Combine with Spread Operator - way 1

function combineMorseMessage(morseCode1,morseCode2){
    console.log([...morseCode1, ...morseCode2])
}

combineMorseMessage(morseCode1,morseCode2)

//Combine with Spread Operator - way 1
const numbers = [1,2,3]
const string = 'string'

combineMorseMessage(numbers,string)

//join ()

const morseCodeMessageString = morseCodeMessage.join('')
console.log(morseCode1)
console.log(morseCode2)
console.log(morseCodeMessageString)