// Code is read from top to bottom
/*
// VARIABLES //

// const variables cannot be reassigned
const personName = "Joe"
// let variables can change and be reassigned
let personAge = 29

console.log(personName)
console.log(personAge)

personAge = 30

console.log(personAge)

let five5 = 5

console.log(five5)
*/

// MATH //
/*
const number1 = 2
const number2 = 10

let result

// Sum
result = number1 + number2
console.log(result)

// Subtraction
result = number2 - number1
console.log(result)

// Division
result = number2 / number1
console.log(result)

// Multiplication
result = number1 * number2
console.log(result)

// Exponential
result = number2 ** number1
console.log(result)

const string1 = "Hi"
const string2 = "Paula"

result = string1 + string2
console.log(result)

// Modulus - Remainder

const number = 20
console.log(number % 2) // 20 / 2 = 10
console.log(number % 3) // 20 / 3 = 6 + 2
console.log(number % 5)
console.log(number % 7)

// To check if a number is even, we see if the number is divisible by 2
let newNumber = 10
console.log(newNumber % 2)

newNumber = 11
console.log(newNumber % 2)

// Increment
let numberIncrement = 10
numberIncrement++ //numberIncrement = numberIncrement + 1
console.log(numberIncrement)

// Decrement
let numberDecrement = 21
numberDecrement--
console.log(numberDecrement)

numberIncrement += 2
console.log(numberIncrement)

numberDecrement -= 2
console.log(numberIncrement)
*/

// LOGICAL OPERATORS // 
/*
// Basic Comparison
const var1 = 1
const var2 = 2
const var3 = "1"

let result

result = var1 == var2
console.log(result)

result = var1 == var3
console.log(result)

// Strict Comparison
result = var1 === var2
console.log(result)

result = var1 === var3
console.log(result)

// Not Operator !

// Basic Comparison
result = var1 != var2
console.log(result)

result = var1 != var3
console.log(result)

// Strict Comparison
result = var1 !== var2 
console.log(result)

result = var1 !== var3
console.log(result)

// How does Not Operator work
const boolean = true
console.log(!boolean)
console.log(!!boolean)
console.log(!!!!!!!!!!boolean)

// Math Comparisons

// Greater >
// Greater or Equal >=
// Smaller <
// Smaller or Equal <=

// And operator and Or operator

const number3 = 4
const number4 = 10
const number5 = 20

// And
result = number3 < number4 && number5 > number4
console.log(result)

// Or
result = number3 < number4 || number5 > number4
console.log(result)

// And Operations --> If one condition is false then all of it is false
// Or Operations --> If one condition is true then all of it is true
*/

// EXERCISE

// 1
const userName = "Joe"
let userAge = 24

// 2
let message = "Hello " + userName + "!" + "You are " + userAge + " years old."

// 3
console.log(message)

// 4
let userAgeTimes2 = userAge * 2
console.log(userAgeTimes2)

let userAgePowerOfThree = userAge ** 3
console.log(userAgePowerOfThree)

// 5 

console.log(userAge % 2) // even
console.log(userAgeTimes2 % 2) // even
console.log(userAgePowerOfThree % 2) // even

// 6 

console.log(true && true && false) // false
console.log(false && true && true) // false
console.log(true && (true || false)) // true
console.log((true || true) || false) // true
console.log((false || (true || false)) && (true || (true && (false || true)))) // true