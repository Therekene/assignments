// EXAMPLE of using an id to select an input and grab user input.
// Typically <form>'s are better suited for this, so this is just an example
        
    // var myInput = document.getElementById("my-input")
    // var myButton = document.getElementById("my-button")


    // myButton.addEventListener("click", function(event){
    //     var userInput = myInput.value
        
    //     // 1 create element
    //     var pTag = document.createElement("p")
    //     // 2 Edit element
    //     pTag.textContent = userInput
    //     pTag.classList.add("ptag-class")

    //     // 3 Display (append to DOM)
    //     var list = document.getElementById("list")
    //     list.appendChild(pTag)
        
    //     myInput.value = ""
    // })


// Select the <div> that is on the html page with the ID of "list"
var list = document.getElementById("list")

// Select the <form> using it's "name" attribute from the HTML page
var myForm = document.myForm

/* 
    Add the Submit event to the form 
        (the button in the form will automatically trigger this event when clicked.)
        (Additionally, submit events allow you to press "enter" to fire the event.)
*/  
myForm.addEventListener("submit", function(event){
    // Stops the page from refreshing on "submit" events
    event.preventDefault()
    // Create a HTML h5 element.  EX:  <h5></h5>
    var h5Tag = document.createElement("h5")
    // Assign the user's input value to the h5's text content. EX:  <h5>User's text</h5>
    h5Tag.textContent = myForm.firstName.value
    // Add the h5 to the <div id="list"> on the DOM EX: <div> <h5>User's text</h5> </div>
    list.appendChild(h5Tag)
    // Set the input's text value back to an empty string so it erases for the user.
    myForm.firstName.value = ""
})












