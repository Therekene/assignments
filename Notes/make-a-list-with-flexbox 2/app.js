const listContainer = document.getElementById('list-container')

// write a function that
    // creates 20 divs
        // each div must have an h1 inside of it with the words "hello world"
    // All 20 divs must appear on the dom

function createAllTheDivs(){
    for(let i = 0; i < 100; i++){
        // 1 create element(s)
        const newDiv = document.createElement('div')
        const newH1 = document.createElement('h1')

        // 2  edit element(s)
        newH1.textContent = "hello world"

        // 3 display (append)
        newDiv.appendChild(newH1) // Append the h1 into the div we created
        listContainer.appendChild(newDiv) // Append the div that has our h1 in it to the DOM.
    }
}

createAllTheDivs()





// Example of creating an element in an event listener and how it's scope works:
document.myForm.addEventListener("submit", function(event){
    event.preventDefault()
    const myH1 = document.createElement("h1")

    // This variable 'myH1', only exists within the anonymous function of this event listener
    // If you console.log my H1 after this function, it will show undefined.

    // This is preferred as we only need this variable within this function and don't want
    // to pollute our global scope with variables we'll never use again outside of this function.
})