// Promises   
    // Handling asynchronous code in a elegant way
    // Javascript is a Single Threaded language, so Promises help run
    // other tasks at the same time as our program is still executing code.

// Promise is a JS Constructor    
// const result = new Promise((resolve, reject) => {

// })
// console.log(result)  => A Promise ALWAYS returns a Pending Promise immediately

// Promises have 3 possible states
    // all start off as Pending
    // Resolves  =>  this produces the response in the .then()
    // Rejects   => this produces the err in the .catch()

// // Resolve
// .then(// things are good)
// // Reject
// .catch(// things are baaaad)


// If resolve is called, .then() will console.log "HEADS"
// If reject is called, .catch() will console.log "TAILS"
// Returning a Promise from a function gives that function a .then() and .catch()
function flipCoin(){
    return new Promise((resolve, reject) => {
        const num = Math.floor(Math.random() * 2)
        if(num === 0){
            // successful
            resolve("HEADS")
        } else {
            // unsuccessful
            reject("TAILS")
        }
    })
}

flipCoin()
    .then(response => console.log(response))
    .catch(error => console.log(error))


// This is what axios.get(url) 
const get = (url) => {
    // Create the xhr object and send the request to the given 'url'
    const xhr = new XMLHttpRequest()
    xhr.open("GET", url)
    xhr.send()

    // Immediately have your function return a new promise so that it will have a .then() and
    // a .catch() when the request has finished.
    return new Promise((resolve, reject) => {
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && xhr.status === 200){
                const data = JSON.parse(xhr.responseText)
                const response = { data: data }
                // Resolving the successful request for the .then() to receive
                resolve(response)
            } else if(xhr.readyState === 4 && xhr.status !== 200){
                // Rejecting the unsuccessful request for the .catch() to receive
                reject(new Error("THINGS WENT BADLY"))
            }
        }
    })
    
}

// View the console in the browser to see these console logs
get("https://api.vschool.io/nateje/todo")
    .then(res => console.log(res))
    .catch(err => console.log(err))





