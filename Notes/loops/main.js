/**
 * Loop types: for and while
 * For loop - performs a set number of operations
 * While loop - operates until a condition is false
 */

 // Anatomy of a for loop:
// for(
    /*1. Variable declarations*/; 
    /*2. Conditional: "Should I run this loop one more time?"*/; 
    /*3. Final code to run*///) {
        /* The actual code to run in the loop */
// }

//Console.log numbers
// for(var i = 5; i <= 15; i++) {
//     console.log(i)
// }

// Arrays
// var myArray = ["hello", "my", "name", "is", "Bob", "!"]
// index numbers: 0       1      2      3      4    5

// console.log(myArray[2])

// for (var i = 0; i < myArray.length; i++) {
//     console.log(myArray[i])
// }

var words = ["hi", "hello", "bye", "hi", "hi", "goodbye"]

var phrase = ""
for (var i = 0; i < words.length; i++) {
    var currentWord = words[i]
    phrase = phrase + currentWord + " "
}

console.log(phrase)