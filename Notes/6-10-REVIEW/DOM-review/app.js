// DOM - Document Object Model
const div = document.getElementById('my-div')

// This selects the first element in the div
div.children[0].style.backgroundColor = "blue"

// this grabs the direct parent of the div <body>
div.parentNode.style.backgroundColor = "yellow"

// This grabs the second element in the div
div.children[1].style.fontSize = "100px"

div.children[1].addEventListener("click", createMyForm)


function createMyForm(){
    // 1. Create element(s)
    const form   = document.createElement("form")
    const input  = document.createElement("input")
    const button = document.createElement("button")

    // 2. Edit them (style, events, etc.)
    // name
    form.setAttribute("name", "myForm")
    input.setAttribute("name", "my-input")
    input.placeholder = "Enter Name Here"

    button.textContent = "Submit"
    // add submit event
    form.addEventListener("submit", function(event){
        event.preventDefault()
        console.log(input.value)
    })

    // 3 . Append, display on DOM
    form.appendChild(input)
    form.appendChild(button)
    document.getElementById('put-form-here').appendChild(form)
}