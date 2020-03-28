// FUNCTIONS

// Function Declaration
/*
function helloWorld() {
    console.log("Hello World")
}

helloWorld()

// Function Expression

const helloWorld2 = function () {
    console.log("Hello World 2")
}

helloWorld2()

const sayHello = function (name) {
    console.log("Hello", name)
}

sayHello("Carmen")

function sum(n1, n2) {
    return (n1 + n2)
}

console.log(sum(4, 8))
*/

// EXERCISES

// Create a function that prints all the numbers from 1 to a number that is the function parameter, to the console.

const prompt = require('prompt-sync')({ sigint: true });

function printer(maxNumber) {
    for (let i = 1; i <= maxNumber; i++) {
        console.log(i)
    }
}

printer(prompt("Count numbers from 1 to X. X: "))

// Run this function for 5 different numbers.
//printer(5)
//printer(29)
//printer(1)
//printer(20)
//printer(97)

printer(5)
printer(29)
printer(1)
printer(20)
printer(97)

// Print all the numbers from an input number to another input number to the console. If the number is greater than a third input number, print in the console the number; If the number is smaller than that number, print to the console “smaller number”. If the number is that number, print to the console [THE NUMBER].

function exercise2(min, max, n) {
    for (let i = min; i <= max; i++) {
        if (i > n) console.log(i)
        else if (i < n) console.log("smaller number")
        else if (i == n) console.log("THE NUMBER")
    }
}

exercise2(prompt("Pick the starting number: "), prompt("Pick the ending number: "), prompt("Pick the reference number: "))

// Create a function that has three arguments: once is a number, the second is a number, and the third is a math operation (“sum”, “substract”, “multiply”, “divide”,”exponential”,”modulus”). Save whatever result is returned from the function and then console.log a message that says “Your result is [RESULT]”

function exercise3(n1, n2, mathOperation) {
    n1 = parseInt(n1)
    n2 = parseInt(n2)
    let result = 0

    switch (mathOperation) {
        case "sum":
            result = n1 + n2
            break;
        case "subtract":
            result = n1 - n2
            break;
        case "multiply":
            result = n1 * n2
            break;
        case "divide":
            result = n1 / n2
            break;
        case "exponential":
            result = n1 ** n2
            break;
        case "modulus":
            result = n1 % n2
            break;
        default:
            console.log("Unknown math operation: " + mathOperation + ". Please try again.")
            result = exercise3(n1, n2, prompt("Choose a math operation: sum, subtract, multiply, divide, exponential, modulus. "))
            break;
    }
    return result
}

const calculation = exercise3(prompt("Choose first number to calculate: "), prompt("Choose second number to calculate: "), prompt("Choose a math operation: sum, subtract, multiply, divide, exponential, modulus. "))

console.log(calculation)
