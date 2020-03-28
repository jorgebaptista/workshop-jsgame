// Conditionals
/*
const trueBoolean = true
const falseBoolean = false

if (trueBoolean) {
    console.log("Condition is true")
}
else {
    console.log("Condition is False")
}

if (falseBoolean) {
    console.log("Condition is true")
}
else {
    console.log("Condition is False")
}

const number1 = 5
const number2 = 4
const number3 = 10
const string1 = "5"

if (number1 == number2) {
    console.log("Numbers are the same")
}
else {
    console.log("Numbers are different")
}

const day = 10

switch (day) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("This is not a valid day.")
        break;
    default:
        break;
}

*/

// EXERCISE - CONDITIONALS

// Copy this: const inputAge = prompt(“What’s your age?”).
// If the age is greater than 50, then console.log(“age is just a number!”). Else, console.log(“You young and beautiful person!”)

// Using prompt-sync module so the code works in a terminal
const prompt = require('prompt-sync')({ sigint: true });

const inputAge = prompt("What's your age? ")

if (inputAge > 50) console.log("Age is just a number!")
else console.log("You young and beautiful person!")

// Let’s be more detailed: now if the age is smaller than 50 but greater or equal to 20, then console.log(“You’re not in your teens anymore!”). If the age is smaller than 20 console.log(“You young and beautiful person!”).

if (inputAge < 50 && inputAge >= 20) console.log("You're not in your teens anymore!")
else if (inputAge < 20) console.log("You young and beautiful person!")

// Create a variable with a language (“spanish”, “portuguese”, “english”, “italian”). Now improve the “hello world” to change depending on the chosen language.

chooseLanguage()

function chooseLanguage() {
    const language = prompt("Choose a language: spanish, portuguese, english, italian: ")

    switch (language) {
        case "spanish":
            console.log("Hola mundo!")
            break;
        case "portuguese":
            console.log("Olá mundo!")
            break;
        case "english":
            console.log("Hello world!")
            break;
        case "italian":
            console.log("Ciao mundo!")
            break;
        default:
            console.log("Unknown language, please try again.")
            chooseLanguage();
            break;
    }
}

// Create a variable with a number. Afterwards, if the number is even, console.log(“that is a even number”); if that is not the case, then console.log(“that is not an even number”).

const number = prompt("Choose a number: ")

if (number % 2 == 0) console.log(number + " is an even number!")
else console.log(number + " is an odd number!")

// Create a variable with a number greater than 50. Afterwards, check if the number is divisible by 3, by 7 and by (3 & 7) and console.log the result in each case.

let number2 = 0

while (number2 < 50) {
    number2 = prompt("Choose a number greater than 50: ")

    if (number2 < 50) {
        console.log(number2 + " is not greater than 50, please try again.")

        continue;
    }

    if (number2 % 3 == 0) console.log(number2 + " is divisible by 3!")
    else console.log(number2 + " is not divisible by 3.")

    if (number2 % 7 == 0) console.log(number2 + " is divisible by 7!")
    else console.log(number2 + " is not divisible by 7.")

    if (number2 % 3 == 0 && number2 % 7 == 0) console.log(number2 + " is divisible by 3 and 7!")
    else console.log(number2 + " is not divisible by 3 and 7.")
}