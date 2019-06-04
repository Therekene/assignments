// Functions

    // Function expression (not hoisted)    
    var mySuperAwesomeFunc = function(){
        console.log('hi')
    }

    // Function declaration (hoisted)
    function mySuperAwesomeFunc2(){
        console.log('hi')
    }

                // Parameters
    function sum(num1, num2){
        return num1 + num2
    }

                   // Arguments
    var total = sum(10, 15)

    // Other function types:
    // Callback functions, anonymous functions, fat arrow functions

// For loops
    // So I don't have to do the same thing over and over again.
    var spaceship = "deathstar"
    var dogs = ["spot", "sparky", "dog"]

    // console.log(spaceship[0])
    // console.log(spaceship[1])
    // console.log(spaceship[2])
    // console.log(spaceship[3])
    // console.log(spaceship[4])
    // console.log(spaceship[5])
    // console.log(spaceship[6])


// This is an example of using the "i" variable in a for-loop
// to dynamically check every index in an array or string.
    for(var i = 0; i < spaceship.length; i++){
        if(spaceship[i] === "s"){
           
        }
    }    

//  Write a function that takes a string and returns the last half of that string uppercased.

    // - Write a function
    // - Takes a single string as a function parameter
        // - make test case(s)
    // - returns the last half of the string uppercased
        // 1 - Cut in half
        // 2 - Uppercase 2nd half
        // 3 - return final string half


function secondHalfCaps(str){
    var secondHalf = str.slice(Math.floor(str.length / 2))
    var upperCased = secondHalf.toUpperCase()
    return upperCased
    // return str.slice(Math.floor(str.length / 2)).toUpperCase()
} 

// Test cases to make sure the function works
// console.log(secondHalfCaps("hellooo")) // "LOO"

var result = secondHalfCaps("goodby")  // "DBY"
// console.log(result)