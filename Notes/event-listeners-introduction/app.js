
// First, grab the element you wish to add an event to
var myBtn = document.getElementById('my-button')

// addEventListener Syntax  
    /* 
        myBtn.addEventListener("event-type", handlerFunction)
    */

                    // 2 Arguments of .addEventListener()
                        // 1. What event (ex: "click")
                        // 2. What to do (function)
myBtn.addEventListener("click", function(){  // anonymous function (it has no name)
    var title = document.getElementById('title')    
    title.style.backgroundColor = "cornflowerblue"
})

myBtn.addEventListener("dblclick", function(){
    alert("You clicked twice!")
})


// Example of using a named function instead of an anonymous function.
// When the button is clicked, generateH1s function is called and the 
// for-loop creates and appends 10 h1 elements to the DOM.
var listBtn = document.getElementById('create-h1-btn')
var listDiv = document.getElementById('list')

listBtn.addEventListener("click", generateH1s)

function generateH1s(){
    for(var i = 0; i < 10; i++){
        // 1 - create element
        var newH1 = document.createElement('h1')
        // 2 - Edit element
        newH1.textContent = "I am a new h1 tag!"
        // 3 - Display it (add to DOM)
        listDiv.appendChild(newH1)
    }
}