//Methods that iterate over an array
//Methods that DO NOT modify the original array (Immutability)

// map()

const numbers = [1,2,3,4,5]
const squaredNumbers = numbers.map(num => num*num)

console.log(numbers)
console.log(squaredNumbers)

// forEach()
const colors = ['red', 'pink', 'blue']
const iteratedColors = colors.forEach(color => console.log(color))

console.log(colors)
console.log(iteratedColors)

// Exercise: Fahrenheit to Celcius conversion

const temperaturesInFahrenheit = [32,68,95,104,212]

const temperaturesInCelsius = temperaturesInFahrenheit.map(fahrenheit => (5/9) * (fahrenheit - 32))

console.log('Temperatures In Fahrenheit', temperaturesInFahrenheit)
console.log('Temperatures In Celsius', temperaturesInCelsius)

// Exerceise: Sum of Elements in an Array

const digit = [1,2,3,4,5]
let sum = 0
const sumOfDigit = digit.forEach(number => console.log(sum+=number))

console.log(sumOfDigit)

