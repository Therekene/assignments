// ES6 introduction -  let & const

// Scope in JS
    // Global scope => variables declared outside of a local scope, such as `var name = "joe"` below
    // Local scope  => variables declared inside of a local scope, such as `var name="steve"` in the function below

var name = "joe"

function myFunction(){
    var name = "steve"
    return name
}

var newName = myFunction()  // newName now === "steve" because that is what my function returned



    // Global scope
    // Local scope
    // Lexical Scoping (block scoped) => This is the scoping of let and const
        // let and const can also be global if they are declared outside of {}, just like var.


// let age = 20               // can be re-assigned
const firstName = "Rick"      // can never change


function myOtherFunction(){
    const age = 20
    age = 30  // this would break the code since I'm trying to overwrite a constant variable
}

// myOtherFunction()

function doLoops(){
    for(let i = 0; i < 10; i++){
        console.log(i)
    }
    console.log(i) // undefined since let i is block scoped to the for-loop
                    // if you wrote `var i = 0` instead, i would console.log 10 since `i` would still exist.
}

doLoops()