//Methods that iterate over an array
//Methods that DO NOT modify the original array (Immutability)

// filter ()

const numbers = [1,2,3,4,5,6,7,8,9,10]
const evenNumbers = numbers.filter(number => number%2 === 0)

console.log(numbers)
console.log(evenNumbers)

// reduce() case 1
const numberReduce = [1,2,3,4,5]
const sum = numberReduce.reduce((accumulator, currrenValue) => accumulator+currrenValue,0)

console.log(numberReduce)
console.log(sum)

// reduce() case 2
const words = ['apple', 'banana', 'hello', 'bye','apple', 'banana','apple', 'banana']

const wordFrecuency = words.reduce((accumulator,currrenValue) => {
    if(accumulator[currrenValue]){
        accumulator[currrenValue]++
    }else{
        accumulator[currrenValue] = 1
    }
    return accumulator
},{})

console.log(wordFrecuency)


// Exercise: Passing Grade Average

const califications = [10,44,56.3,67.6,78,89.6,89]

const passingGrades = califications.filter(average => average >= 70)

const averagePassingGrade = passingGrades.reduce((sum, cal) => sum+cal,0) / passingGrades.length

console.log('Original Grades: ', califications)
console.log('Passing Grades: ', passingGrades)
console.log('average Passing Grade ', averagePassingGrade)