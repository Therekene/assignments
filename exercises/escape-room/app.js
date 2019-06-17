const readline = require("readline-sync")

const name = readline.question("What is your name? ")
console.log("Thank you " + name + "!")

let gameOver = (false)
let options = ["Put hand in hole" , "Find the key" , "Open the door"]
let key = (false)

while (!gameOver){
    const userAnswer = readline.keyInSelect(options, "what would you like to do? ")


    if (userAnswer === 0){
        console.log("You died")
        gameOver = true

    } else if (userAnswer === 1){
        console.log("After searching the room you discover the key in your pocket. ")
        key = true

    } else if (userAnswer === -1){
        console.log("You can't outrun the escape room")    

    } else if (userAnswer === 2 && key === false){
        console.log("The door is locked.")

    } else if (userAnswer === 2 && key === true){
        console.log("Yay! You escaped the room!")
        gameOver = true   
    }








}