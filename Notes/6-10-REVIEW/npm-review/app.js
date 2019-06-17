// If we don't say something like "./readline-sync" and give the
// path with the ./, require will automatically look in your
// node_modules folder for that package
const readline = require("readline-sync")  // import

// When we add the path ./, it will look for a file we made and
// import whatever we have module.exports
const doMath = require("./myOtherFunctions.js")

// doMath is an object because in the `myOtherFunctions.js`,
// I am module.exports = {} and object full of functions.


const usersAnswer = readline.question("What is your favorite number?: ")
console.log(usersAnswer)

console.log(doMath.subtract(5, 3)) // calling my function from the other file
console.log(doMath.sum(5, 3))