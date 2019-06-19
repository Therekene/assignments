const xhr = new XMLHttpRequest()  // It's an object
// readyState  1, 2, 3, 4   =  4 means the response is back from the server

// Server response may be either: Your data  ||  An Error
// Things went well ?  : status of 200
    // 404 - doesn't exist
    // 500 - server did something awful
    // 401 - 403:   You are not authorized
    // 201 - POST added something new successfully

// Convert JSON to JS and vice-versa
    // Convert JSON to JS  =>  JSON.parse()
    // Convert JS to JSON  =>  JSON.stringify()

/////////////////////////
// XHR REQUEST PROCESS:

// Creates the requst by setting up the request type and location
xhr.open("GET", "https://api.vschool.io/nateje/todo")
// Sends the request to the URL
xhr.send()

// onreadystatechange will fire everytime the request makes progress,
// a ready state of 4 means the response is back from the server
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        // JSON.parse() takes JSON data and converts it into Javascript Data
        const todoArr = JSON.parse(xhr.responseText)
        console.log(todoArr) // Always do this to see what your data looks like.
                             // Also it's not a bad idea to first do this request in
                             // postman to see the data there as well

        listTodos(todoArr)   // Lastly we pass our data from the server into our own
                             // function so we can begin to use it in our program. 
    } 
}


// This function receives our array of todos from the XHR request, and then  loops
// through them to make their text show up on the DOM
function listTodos(arr){
    for(let i = 0; i < arr.length; i++){
        // Create an element
        const h1 = document.createElement('h1')
        // Edit the element
        h1.textContent = arr[i].title
        // Append to DOM
        document.body.appendChild(h1)
    }
}