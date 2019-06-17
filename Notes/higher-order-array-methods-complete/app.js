// Higher order function
    // 1. Take a function as a parameter
    // 2. Return a new function

// Higher Order Array Methods
    // All of these methods automatically do a Loop over your array for you and give you access
    // to each item in the array, one at a time.

///////////////
// .forEach()      =>     ALWAYS RETURN UNDEFINED
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    var newArr = []

    // for(let i = 0; i < arr.length; i++){
    //     newArr.push(arr[i] * 10) 
    // }

    numbers.forEach((num) => {
        newArr.push(num * 10)
    })
    // console.log(newArr)

/////////////
// .filter()  =>   Returns a New Array
    const allNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10]

    const result = allNumbers.filter(function(num){
        if(num === 5){
            return num
        }
    })

    // ES6 Syntax
    // const result = allNumbers.filter(num => {
    //     if(num === 5){
    //         return num
    //     }
    // })

    // console.log(result)

///////////
// .map()  => Always returns a new Arr
                // The new array will always be the same size as the beginning array
    const names = ["john", "joe", "sarah"]
    const newNames = names.map(function(name){
        return name + "s"
    })

    // console.log(names)
    // console.log(newNames)
    // Same function in ES6 syntax
    // const newNames = names.map(name => name + "s")

const users = [
    {name: "joe",    id: '1'},
    {name: "steven", id: '2'},
    {name: "mary",   id: '3'},
    {name: "schmoe", id: '4'}
]

// .find()  => Will return either an individual Item from the array || undefined if it doesn't find it
const foundPerson = users.find(function(user){
    if(user.id === "3"){
        return user
    }
})

const foundPersonES6 = users.find(user => user.id === "3")
// console.log(foundPersonES6)

//////////////
// .findIndex()   =>  Returns the index number of the found item we are looking for
const fruitArr = ["pineapple", "apple", "orange", "strawberry"]
const foundIndex = fruitArr.findIndex(function(fruit){
    if(fruit === "orange"){
        return fruit
    }
})

const foundIndexES6 = fruitArr.findIndex(fruit => fruit === "orange")
// console.log(foundIndexES6)

// .every() => Return boolean, looking to see if the entire array matches the criteria
const evensOnly = [2, 4, 6, 8, 10]

const results = evensOnly.every(function(num){
    if(num % 2 === 0){
        return num
    }
})
// console.log(results)

// .some()  => Return boolean, looking for a single true match to your criteria
const otherResult = evensOnly.some(num => num % 2 !== 0)
// console.log(otherResult)

/////////////
// .sort()  => sorts array => Alters original array
const unorderedArr = [4, 7, 234, 65, 23, 54, 69, 28, 453, 34]
unorderedArr.sort(function(a, b){
    return a - b
})

// console.log(unorderedArr)
// unorderedArr.sort((a, b) => a - b)

////////////////
// .reduce()   =>  Returns whatever you tell it to, can return (string, number, boolean, array, object).
const allTheNumbers = [2334, 234, 23, 346, 467, 234, 2356, 6, 23, 645]

const totalSum = allTheNumbers.reduce(function(total, num){
    return total += num
}, 0)
