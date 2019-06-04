// Preliminaries
// for (var i = 0 ; i < 10 ; i++ ) {
//     console.log(i)
// }
    
// for (var i = 10 ; i < 0 ; i-- ){
//         console.log(i) 
//     }

// var fruit = ["banana", "orange", "apple", "kiwi"]

// for (var i = 0 ; i < fruit.length ; i++ ) {
//     console.log(fruit[i])
// }
    



// Bronze

// for (var i = 0 ; i < 10 ; i++ ) {
//     var number = []
//     number.push (i)
//     console.log(number)

// for (var i = 0 ; i < 101 ; i+=2 ) {
//     console.log(i)

// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// var final = []

// for (var i = 0; i < fruit.length; i += 2 ) {
//     final.push (fruit[i])
//     console.log(final)
// }

// Silver
// var peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
//   ]

// var name =[]
// var occupation =[]

//   for (var i = 0; i < peopleArray.length; i++ ){
//       name.push (peopleArray[i].name)

//       console.log(name)
//   }


// var name =[]
// var occupation =[]

//   for (var i = 0; i < peopleArray.length; i++ ){
//       name.push (peopleArray[i].name)
//       occupation.push (peopleArray[i].occupation)
//       console.log(name)
//       console.log(occupation)
//     }


// var name =[]
// var occupation =[]

//   for (var i = 1; i < peopleArray.length; i+=2 ){
//       name.push (peopleArray[i].name)
//       occupation.push (peopleArray[i].occupation)
//       console.log(name)
//       console.log(occupation)
//     }

// Gold

// var output = []
// var temp = []

// for (var i = 0; i < 3; i++){
//   for (var i = 0; i <3; i++){
//     temp.push(0)
//     output.push(temp)
//     console.log(output)
//   }
// }


// var output = []
// var temp = []

// for (var i = 0; i < 3; i++){
//   for (var j = 0; j <3; j++){
//     temp.push(i)
//     output.push(temp)
//     console.log(output)
//   }
// }


var output = []
var temp = []

for (var i = 0; i < 3; i++){
  for (var i = 0; i <3; i++){
    temp.push(i)
    output.push(temp)
    console.log(output)
  }
}


