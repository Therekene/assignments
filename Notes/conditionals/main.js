// Conditional - lets you run different scenarios in different instances.

/*
falsey values:
false
0
"" (empty string)
undefined
null
NaN (not a number)
*/

var age = prompt("What is your age")
var movieRating = prompt("What is the movie rating?")

if (age >= 17) {
    console.log("All Access!")
} else if (age < 13 && movieRating === "PG-13") {
    console.log("Access DENIED")
} else if (age < 17 && movieRating === "R") {
    console.log("Access DENIED")
}

/**
 Logic operators:
 && - "and operator" - both sides need to be true for the whole to be true
 false && false -> false
 false && true -> false
 true && false -> false
 true && true -> true

 || - "or operator" - ONE side needs to be true for the whole to be true
 false || false -> false
 false || true -> true
 true || false -> true
 true || true -> true
 */
// var name = "Bob"
//  if (!!name) {
//     console.log()
//  }

//  (1 > 3) && (10 < 11) -> false