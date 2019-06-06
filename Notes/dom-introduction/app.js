// The two objects provided when we link an HTML page to a JS page
    // console.dir(document)
    // console.dir(window)

// Selecting HTML elements in JS
    var divArr = document.getElementsByTagName("div")

    // var firstDiv = document.getElementById("my-div")

    var classDivs = document.getElementsByClassName("my-other-div")

    // Query Selectors
    var divsArr = document.querySelectorAll(".my-other-div")
    // var div = document.querySelector("#my-div")


// How we get JS elements to show up on the DOM
    // 1: Create the element
    var h1 = document.createElement("h1")

    // 2: Edit the element
    h1.textContent = "Hello World"
    h1.style.color = "pink"
    h1.style.backgroundColor = "#3338"
    h1.style.fontFamily = "sans-serif"

    // 3: Display the element on the HTML
        // (append the element to the DOM object)
        var firstDiv = document.getElementById("my-div")
        firstDiv.appendChild(h1)

        
    // 1: Create the element
    var myImg = document.createElement("img")
    
    // 2: Edit the element
    myImg.src = "https://images.unsplash.com/photo-1559666126-84f389727b9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
    myImg.style.width = "400px"

    // 3: Put it on the DOM
    firstDiv.appendChild(myImg)




    // 1:
        var pTag = document.createElement("p")

    // 2:
        pTag.textContent = "Harry Potter"
        pTag.classList.add("ptag-class")
        pTag.classList.remove("ptag-class")
        pTag.classList.toggle("ptag-class")

    // 3:
        firstDiv.insertBefore(pTag, h1)