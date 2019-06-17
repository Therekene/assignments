// Error Hanlding in Javascript

// try     => Try this bit of code
// catch   => If something goes wrong in the try, this will catch the error
// finally => (optional) can be use after the try or catch to run code regardless of whether or not an error occurred
// throw   => Used to throw your own error message
// Error   => Constructor function used to make error objects Example: throw new Error("An Error Occurred!")

// const myError = new Error("Something went horribly horribly wrong.")
const age = 33

try {
    if(age === 33){
        throw "it threw"
    } else if(age < 23){
        throw "it was thrown"
    } else if(age > 10){
        throw "It has been thrown"
    } else {
        throw "I'm not sure"
    }
}

catch(error){
    console.log(error)
}

finally {
    console.log("Im running no matter what")
}


// Example 2, testing a function with try / catch

function sum(num1, num2){
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        throw "You must provide two numerical values!"
    }
    return num1 + num2
}

try {
    console.log(sum(10, "hello"))
}
catch(err){
    console.log(err)
}