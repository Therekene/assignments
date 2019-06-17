const readline = require ("readline-sync")
///Game mechanics
let gameOver = false
const actionOptions = ['Walk', 'Print']
/////// Game objects 

const player = {
    name: "",
    health: 100,
    attackPower: function(){
        return Math.floor(Math.random()* 11)
    },
    toHit: function(){
        return Math.floor(Math.random() * 21)
    },
}   

function Enemy(name, health, attackPowerE, toHitE){
    this.name = name
    this.health = health
    this.attackPowerE = attackPowerE
    this.toHitE = toHitE
    this.attackPower = function(){
        return Math.floor(Math.random() * this.attackPowerE)
    }
    this.toHit = function(){
        return Math.floor(Math.random() * this.toHitE)
    }
}
function randomEnemy (){
    const randomNum = Math.floor(Math.random() * 3)
    if ( randomNum === 0){
        return new Enemy("Bum", 15, 5, 15)
    }else if ( randomNum === 1){
        return new Enemy("Thug", 20, 7, 20)
    } else return new Enemy("Homie", 30, 10, 20)  
     
}

///Game Actions
function walk(){
    console.log("You continue on the path")
    const walkEncounter = Math.floor(Math.random() * 3)
    if (walkEncounter ===0 ){
        const currentEnemy = randomEnemy()
        console.log ("ENEMIES!!!")
        console.log(`From a nearby alley a ${currentEnemy.name} attacks you!`) 
        combat(currentEnemy)
        
    }
}

function combat(enemy){
    console.log(`${enemy.name}; health: ${enemy.health} --- ${player.name}; health: ${player.health}`)
    while(enemy.health > 0 && player.health > 0){
        
        const combatOption = readline.keyInSelect(["Fight", "RUN", "Print"], "What would you like to do?")
        if(combatOption ===0){
            if(player.toHit() > 5){
                console.log (`You successfully attack ${enemy.name}`)
                const attackPower = player.attackPower()
                enemy.health -= attackPower
                console.log(`You deal ${attackPower} damage to ${enemy.name}`)
            } else console.log(`Your attack misses ${enemy.name}.`)
            if(enemy.toHit() > 5){
                console.log (`${enemy.name} successfully attacks you.`)
                const enemyPower = enemy.attackPower()
                player.health -= enemyPower
                console.log(`${enemy.name} deals ${enemyPower} damage to you.`)
            } else console.log(`You dodge the ${enemy.name}'s attack! `)
        }if (combatOption ===1){
                console.log(`You look for the fastest way to escape!`)
                let fleeChance = Math.floor(Math.random() * 2)
                if (fleeChance === 0){
                    console.log(`You failed to escape!`)
                    enemy.toHit() > 5 
                    player.health -= enemyPower
                        console.log(`${enemy.name} deals ${enemyPower} damage to you.`)
                    }
                } else {console.log('You run away from the enemy!')
                return
                }
            }
         if (combatOption ===2){
             console.log (`${player.name} /n ${player.health}`)
         }   
        if (player.health <= 0){
            console.log (`You died on the streets.`)
            return gameOver = true
        } else (enemy.health <=0);{
            console.log(`--Your enemy has been defeated!-- `)
        }
    }
        
        
    






//The Game
player.name = readline.question ("Welcome adventurer. What is your name? ")
console.log(`Thank you ${player.name}.`)
while (gameOver !== true){
    const action = readline.keyInSelect(actionOptions, "What would you like to do?") 
        if (action === 0){
            walk()
        } else if (action ===1){
            console.log (`${player.name} ${player.health}`)
        }






}
    
