// Types of functions
    // fat arrow      () =>
    // declarations   function
    // expression      const myFunction = () =>
    // Anonymous       function with no name
    // callback        function that is passed into another function as a parameter
    // higher order    function that either recieves a function as a parameter and/or returns a function

// `this` in and object refers to the object it is in.
    const person = {
        name: "steve",
        health: 20,
        speak: function(){
            console.log(this.name)
            console.log(this.health)
        }
    }

    // person.speak()

    // Constructor Function => Blueprint
        // Show you how to build something
        // Define the structure of something

    function Enemy(name, health, weapon, catchPhrase, attackPower){
        this.name = name
        this.health = health
        this.weapon = weapon
        this.catchPhrase = catchPhrase
        this.attackPower = attackPower
        this.sayCatchPhrase = function(){
            console.log(this.catchPhrase)
        }

        this.attack = function(){
            return this.attackPower
        }
    }

    // To call a constructor function,  you make an Instance of that function call
    // Instantiating.
    const orc = new Enemy("Orc", 100, "axe", "ARGGGG")
    const demon = new Enemy("Demon", 10, "something", "LSKDJFIVSOIDVJOI")
    // orc.sayCatchPhrase()
        // player.health -= orc.attack()
        // console.log("Orc hit you for 20 points")
        // orc.health -= player.attack()
        // console.log("Player strikes back for ....")
    // demon.sayCatchPhrase()
    console.log(demon)

