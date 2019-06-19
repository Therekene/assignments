// ES6
    // Arrow Functions
    // function sum(a, b){
    //     return a + b
    // }

    // const sum = (a, b) => a + b

    const arr = [1, 2, 3, 4, 5]

    const newArr = arr.filter(function(number){
        return number % 2 === 0
    })

    const newArrES6 = arr.filter(number => number % 2 === 0)
    

//    6) Given an array of potential voters, return an object representing the results of the vote
// Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
// 18-25, how many from 26-35, how many from 36-55,

function voterResults(arr) {
   const resultObj = arr.reduce((final, voter) => {
        if(voter.age >= 18 && voter.age <= 25){
            final.youth++
            if(voter.voted){
                final.youngVotes++
            }
        }

        if(voter.age >= 26 && voter.age <= 35){
            final.mids++
            if(voter.voted){
                final.midVotes++
            }
        }

        if(voter.age >= 36 && voter.age <= 55){
            final.olds++
            if(voter.voted){
                final.oldVotes++
            }
        }
        return final
   }, {
       youngVotes: 0,
       youth: 0,
       midVotes: 0,
       mids: 0,
       oldVotes: 0,
       olds: 0
   })

   return resultObj
}

// console.log(voterResults(voters)); // Returned value shown below:
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4 
}
*/


    // Rest(gather) and Spread

    function findLargest(...numbers){
        console.log(numbers) // array of numbers
    }

    // findLargest(1, 2, 3, 4, 5, 6, 7, 8)

    const arr1 = [1, 2, 3, 4]
    const arr2 = [5, 6, 7, 8]
    const finalArr = [...arr1, ...arr2]
    // console.log(finalArr)

    const obj1 = {
        name: "Joe"
    }

    const obj2 = {
        age: 50
    }

    const person = {
        ...obj1,
        ...obj2
    }

    // console.log(person)




    // Object and Array Destrucuring
    const player = {
        name: "Excalibur",
        weapon: "fish",
        catchphrase: "oh no"
    }
    
    const { weapon, name, catchphrase } = player

    console.log(`${name} hits the enemy with his ${weapon}, and shouts ${player.catchphrase}`)

    const names = ["Rick", "Morty", "Birdperson"]

    // const rick = names[0]
    // const morty = names[1]

    const [item1, item2, item3] = names
    // console.log(item3)


    // String Literal  `${variables}`
    // We use to have to concatenate
    // const name = "steve"

    // console.log(name + " says hi")
    // console.log(`${name} says hi`)


    // const and let
        // let can change
        // const cannot change
        // They are bracket scoped when var is local scoped

        if(true){
            let a = "hello"
        }
        // console.log(a) // undefined

    // Object literals
    const enemyName = "Dr. Evil"
    const enemyWeapon = "Death laser"
    const enemyAge = 30

    const evilGuy = {
        enemyName,
        enemyWeapon,
        enemyAge
    }

    // console.log(evilGuy)

    // default parameters
    function sum(a, b = 15){
        return a + b
    }

    console.log(sum(20, 5))