const readline = require("readline-sync")

// const answer= readline.question("what is your favorite color?")
// console.log("your favorite color is " + answer)

const operation = readline.question("Would you like to 'add', 'subtract', 'multiply', or 'divide'?:  ")

const num1 = readline.question ("Enter the first number : ")
const num2 = readline.question ("Enter the second number : ")

function add (num1, num2){
    return Number(num1) + Number(num2)
}
function subtract (num1, num2){
    return Number(num1) - Number(num2)

}function multiply (num1, num2){
    return Number(num1) * Number(num2)

}function divide (num1, num2){
    return Number(num1) / Number(num2)
}

if(operation === "add") {
    console.log(`The total of your two numbers is: ${add(num1, num2)}`)
} else if(operation === "multiply") {
    console.log(`The total of your two numbers is: ${multiply(num1 , num2)}`)
} else if(operation === "subtract") {
    console.log(`The total of your two numbers is: ${subtract(num1 , num2)}`)
} else (operation === "divide") 
    console.log(`The total of your two numbers is: ${divide(num1 , num2)}`)

 


