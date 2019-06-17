const ask = require('readline-sync') // readline

///////////////////
// Global Variables
const player = {
    name: "",
    health: 100,
    attack: function(){
        return Math.floor(Math.random() * 25)
    }
}

let gameOver = false


/////////////////
// Game Functions
function walk(){
    const randomNum = Math.floor(Math.random() * 3)
        if(randomNum === 0){
            // Enemy Appears
            const currentEnemy = generateEnemy()
            console.log(`A wild ${currentEnemy.type} appears!`)
            // Battle loop
            battleLoop(currentEnemy)
        }
}

function Enemy(type, health){
    this.type = type
    this.health = health
}

function generateEnemy(){
    // create random 0 - 2 chance  
     const randomNum = Math.floor(Math.random() * 3)
    // Create random enemy by chance
    if(randomNum === 0){
        return new Enemy("surgar", 25)
    } else if(randomNum === 1){
        return new Enemy("spice", 30)
    } else {
        return new Enemy("everything nice", 40)
    }
}

function battleLoop(enemy){
    console.log("Dun dun dunnnn, fight!")
    while(enemy.health > 0 && player.health > 0){
        const userChoice = ask.keyInSelect(["fight", "run"], "What would you like to do?: ")
        if(userChoice === 0){
            const attackPower = player.attack()
            enemy.health -= attackPower
            console.log(`${player.name} attacked ${enemy.type} for ${attackPower}!!!`)
        }
    }
}

/////////////
// Game
console.log("Hello Player!")
player.name = ask.question("May I have your name?: ")
console.log(`Thank you ${player.name}`)


while(!gameOver){
    const userAnswer = ask.keyInSelect(["walk"], "What would you like to do?: ")
    if(userAnswer === 0){
        // Create a random number between 0 - 2
        walk()
    }
}




