// For Loops
var animals = [{type: "dog"}, {type: "cat"}, {type: "bunny"}, {type: "sheep"}]
// var animals = ["dog", "cat", "bunny", "sheep"]

for(var i = 0; i < animals.length; i++){
    // console.log(animals[i].type)
}


// Nested For Loops (matrix)
var arrayOfArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// console.log(arrayOfArrays[1][2]) // 6
// console.log(arrayOfArrays[2][1]) // 8

for(var i = 0; i < arrayOfArrays.length; i++){  // Iterates 3 times
    // console.log(arrayOfArrays[i])  // [1, 2, 3]  
    for(var j = 0; j < arrayOfArrays[i].length; j++){ // Iterates 9 times
        // console.log(arrayOfArrays[i][j])
    }
}

var matrix = []

for(var i = 0; i < 10; i++){
    matrix.push([])
    // matrix[i] = []
    for(var j = 0; j < 10; j++){
        matrix[i].push(j + 1)
        // matrix[i][j] = j + 1
    }
}

console.log(matrix)