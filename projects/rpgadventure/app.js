const readline = require("readline-sync")
///Game mechanics
let gameOver = false
const actionOptions = ["Walk", "Print", "Use Item"]
let numberOfStreets = 0;
/////// Game objects 

const player = {
    name: "",
    health: 100,
    attackModifier: 1,
    item: "nothing",
    attackPower: function () {
        return Math.floor(Math.random() * 10) + this.attackModifier
    },
    toHit: function () {
        return Math.floor(Math.random() * 21)
    },
}



function Enemy(name, health, attackPowerE, toHitE, item) {
    this.name = name
    this.health = health
    this.attackPowerE = attackPowerE
    this.toHitE = toHitE
    this.item = item
    this.attackPower = function () {
        return Math.floor(Math.random() * this.attackPowerE)
    }
    this.toHit = function () {
        return Math.floor(Math.random() * this.toHitE)
    }
}
function randomEnemy() {
    const randomNum = Math.floor(Math.random() * 3)
    if (randomNum === 0) {
        return new Enemy("Bum", 15, 5, 15, hasItem("Broken Bottle"))
    } else if (randomNum === 1) {
        return new Enemy("Thug", 20, 7, 20, hasItem("Flask"))
    } else return new Enemy("Homie", 30, 10, 20, hasItem("Switchblade"))

}

function hasItem(item) {
    if (Math.floor(Math.random() * 4) === 0) {
        return item
    } else { return "nothing" }
}

function useItem(item) {
    if (item === "Flask") {
        player.health += 25
        player.item = "nothing"
        console.log(`You take a swig from yo flask. Mmmm +25 health.`)
    } else if (item === "Broken Bottle") {
        player.attackModifier = 5
        player.item = "nothing"
        console.log(`+5 damage to next attack`)
    } else if (item === "Switchblade") {
        player.attackModifier = 10
        console.log(`Nobody better mess with you now. +10 damage.`)
    } else (console.log(`You can't use nothing.`))
}
///Game Actions
function walk() {
    console.log("You continue on the path")
    const walkEncounter = Math.floor(Math.random() * 3)
    if (walkEncounter === 0) {
        const currentEnemy = randomEnemy()
        console.log("ENEMIES!!!")
        console.log(`From a nearby alley a ${currentEnemy.name} attacks you!`)
        combat(currentEnemy)
        numberOfStreets += 1

    } else numberOfStreets += 1
}



function combat(enemy) {
    console.log(`${enemy.name}; health: ${enemy.health} --- ${player.name}; health: ${player.health}`)
    while (enemy.health > 0 && player.health > 0) {

        const enemyPower = enemy.attackPower()
        const combatOption = readline.keyInSelect(["Fight", "RUN", "Use Item", "Print"], "What would you like to do?")
        if (combatOption === 0) {
            if (player.toHit() > 5) {
                console.log(`You successfully attack ${enemy.name}`)
                const attackPower = player.attackPower()
                enemy.health -= attackPower
                console.log(`You deal ${attackPower} damage to ${enemy.name}`)
            } else console.log(`Your attack misses ${enemy.name}.`)
            if (enemy.toHit() > 5) {
                console.log(`${enemy.name} successfully attacks you.`)
                player.health -= enemyPower
                console.log(`${enemy.name} deals ${enemyPower} damage to you.`)
            } else console.log(`You dodge the ${enemy.name}'s attack! `)
        }
        if (combatOption === 1) {
            console.log(`You look for the fastest way to escape!`)
            let fleeChance = Math.floor(Math.random() * 2)
            if (fleeChance === 0) {
                console.log(`You failed to escape!`)
                if (enemy.toHit() > 5) {
                    player.health -= enemyPower
                    console.log(`${enemy.name} deals ${enemyPower} damage to you.`)
                }
            } else {
                console.log('You run away from the enemy! \nSince they blocked the fastest way home you take a short detour.')
                numberOfStreets -= 3
                return
            }
        } if (combatOption === 2) {
            useItem(player.item)
        }
        if (combatOption === 3) {
            console.log(`${player.name}\nHealth: ${player.health}`)
        }
    }

    if (player.health <= 0) {
        console.log(`You died on the streets.`)
        return gameOver = true
    } else (enemy.health <= 0); {
        console.log(`--Your enemy has been defeated!--`)
        const itemCheck = readline.keyInSelect(["Yes", "No"], `You check his pockets and find ${enemy.item}. Do you choose to keep it?`)
        if (itemCheck === 0) {
            keepItem(enemy.item)
        }
        else { return }
        //}
    }



    function keepItem(item) {
        if (item === "Flask") { player.item = "Flask" }
        if (item === "Broken Bottle") { player.item = "Broken Bottle" }
        if (item === "Switchblade") { player.item = "Switchblade" }
        if (item === "nothing") { player.item = "nothing" }
    }
}









//The Game
player.name = readline.question(`"Hey there stranger..." After a few drinks with your friends at the bar a "cutie" walks up to you. \n "How about you give me your name and I'll buy you a drink? `)
console.log(`"Well ${player.name} you know your way around a pool table?" After a few games of pool and MANY drinks later the bar closes. You're in no state to drive but luckily you dont live too far. You decide to brave the walk home.`)
while (gameOver !== true || numberOfStreets < 20) {
    const action = readline.keyInSelect(actionOptions, "What would you like to do?")
    if (action === 0) {
        walk()
    } else if (action === 1) {
        console.log(`${player.name}\nHealth: ${player.health}`)
    } else if (action === 2) {
        useItem(player.item)
    }
    if (numberOfStreets === 20) {
        if (player.name === "im married") {
            console.log(`You arrive home and find your wife sleeping. She appears to have left a jug of some much needed water on your side of the bed along with some tylenol for the morning. You crawl into your warm cozy bed and cuddle your wife. Isn't she great?!`)
            return gameOver = true
        } else {

            console.log(`At long last you make it back home. You are so happy as you round the corner to finally sleep off some of this booze when suddenly you realize... The lights in your house are on!!! As you look for a strategic entrance to your house you stumble into the garbage can spilling its contents and making alot of noise. The dog starts barking and suddenly the front door opens! \n ---BOSS FIGHT!---`)

            // combat(new Enemy("The Wife", 150, 35, 19, hasItem("Weddin Ring")))
            finalBoss(new Enemy("The Wife", 150, 35, 19, hasItem("Weddin Ring")))
        }
        //final boss fight section
        function finalBoss(enemy) {
            console.log(`${enemy.name}; health: ${enemy.health} --- ${player.name}; health: ${player.health}`)
            while (enemy.health > 0 && player.health > 0) {



                const enemyPower = enemy.attackPower()
                const combatOption = readline.keyInSelect(["Fight", "RUN", "Use Item", "Print"], "What would you like to do?")
                if (combatOption === 0) {
                    const finalattack = Math.floor(Math.random() * 3)
                    if (finalattack === 0) {
                        console.log(`You try bringing up the past to justify your actions.`)
                        console.log(`Your words seem to upset ${enemy.name} more.`)
                    }else if (finalattack === 1) {
                        console.log(`You use logic and reason.`)
                        console.log(`Your words seem to upset ${enemy.name} more.`)
                    }else {console.log(`You try to defend yourself with justification.`)
                    console.log(`Your words seem to upset ${enemy.name} more.`)}

                    const bossAttack = Math.floor(Math.random() * 3)
                    if (bossAttack === 0) { console.log(`${enemy.name} unleashes her emotional superattack: Nagging!`) }
                    if (bossAttack === 1) { console.log(`${enemy.name} hurls an insult at you. Ego damaged!`) }
                    if (bossAttack === 2) { console.log(`${enemy.name} releases the waterworks. Shame on you!`) }
                    player.health -= enemyPower
                    console.log(`${enemy.name} deals ${enemyPower} damage to you.`)
                    
                } if (combatOption === 1) {
                    console.log(`You look for the fastest way to escape!`)
                    console.log(`You can't run from your life.`)
                }

                if (combatOption === 2) {
                    useItem(player.item)
                }
                else
                    console.log(`${player.name}\nHealth: ${player.health}`)

            }
            if (player.health <= 0) {
                console.log(`Emotionally defeated you walk to the backyard and crawl into the doghouse.`)
                return gameOver = true
            } else (enemy.health <= 0)
            console.log(`--Your enemy has been defeated!--`)
        }
    }
}
