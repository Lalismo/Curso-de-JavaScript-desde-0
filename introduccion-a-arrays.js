//How to create an Array?

//1. new array() or array()

const fruits = Array('aplee', 'banana', 'orange')
console.log(fruits)

const numbers = Array(1, 2, 3, 4, 5)
console.log(numbers)

//2. Array literal syntax
const oneNumber = [4]
console.log(oneNumber)

const emptyArray = []
console.log(emptyArray)

const sports = ['soccer', 'tennis', 'rugby']
console.log(sports)

const recipeIngredients =[
    'Flour',
    true,
    2,
    {
        ingredient: 'Milk', quiantity: '1 cup'
    },
    false
]

console.log(recipeIngredients)

//3. Accessing array elements

const firstFruit = fruits[0]
console.log(firstFruit)

// length property
const numberOfFruits = fruits.length
console.log(numberOfFruits)

// Mutability
fruits.push('watermelon')
console.log(fruits)

// Inmutability

const newFruits = fruits.concat('grape', 'kiwi')
console.log(fruits)
console.log(newFruits)

// Checking arrays with Array.isArray()
const isArray = Array.isArray(fruits)
console.log(isArray)

// Practical exercise: sum all elements of an arrays
const numberArray = [1, 2, 3, 4, 5]
let num = 0
for (let i = 0; i <numberArray.length; i++){
    num += numberArray[i]
}
console.log(num)

