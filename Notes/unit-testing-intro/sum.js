// Unit Testing
// Breaking our programs into small functions that can all 
// be individually tested

// TDD  => Test driven 
function sum(num1, num2){
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        return "Must give me 2 numbers"
    }
    return num1 + num2
}

module.exports = sum