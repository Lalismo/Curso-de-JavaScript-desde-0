// Includes() with numbers

const numbers = [1,2,3,4,5]

const result1 = numbers.includes(3)
console.log(result1)

const result2 = numbers.includes(8)
console.log(result2)

//indexOf()

const fruits = ['apple', 'cherry', 'grape', 'mango']

const index1 = fruits.indexOf('grape')
console.log(index1)

const index2 = fruits.indexOf('blueberry')
console.log(index2)

//lastIndexOF()

const numbersAgain = [2,4,6,8,10,6]

const lastIndex1 = numbersAgain.lastIndexOf(6)
console.log(lastIndex1)

const lastIndex2 = numbersAgain.lastIndexOf(3)
console.log(lastIndex2)
console.log('*********************************')

/*
Exercise: Finding Substring Indices

Given an array of strings and a target string, write a funcion to
determine if the target string is present in the array.
If its is present, return the index of the first occurence and
the index of the last occurence; otherwise, return -1
*/

strings = ['Hola', 'como', 'estas', 'Hola', 'estoy', 'bien']

function FindSubstring (string, target){
    if(string.includes(target)){
        console.log(`First presence: ${string.indexOf(target)}, Last presence: ${string.lastIndexOf(target)}`)
    }else{
        return -1
    }
}

console.log(FindSubstring(strings, 'bien'))