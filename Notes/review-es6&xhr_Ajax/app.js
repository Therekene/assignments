// HTTP
    // Hypertext transfer protocol

// IP interent protocol address

// Request response cycle
    // How web servers and web browsers communicate

// Restaurant
    // Server 
        // takes your order
        // Brings you your food
    // API => Gathers this from the database (Kitchen)
        // Prepares food, buys food, adds food to freezer
    // Server receives prepared meal, responds to customer (Client)

// When a request is made, you receive the data in the form of JSON
    // In the past, transfer the entire webpage, (HTML, CSS, JS)  => XML

// POSTMAN
    // Allows us to do POST request to save in a Database
    // Allows us to do GET requests to see what the JSON looks like
    // Test our own server/api/db  (backend)

// CRUD
    // C = Create  => POST
    // R = Read    => GET
    // U = Update  => PUT
    // D = Destroy => DELETE 

    // https://api.vschool.io/nateje/todo

    const xhr = new XMLHttpRequest()
    xhr.open("GET", "https://api.vschool.io/nateje/todo")
    xhr.send()

    // readyState = 1 , 2 , 3 , 4

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            const data = JSON.parse(xhr.responseText)
            acceptData(data)
        }
    }

    // Imperative => Step by step

    // Declarative => Hey you do this   .  ok

    function acceptData(data){
        for(let i = 0; i < data.length; i++){
            // 1 create element
            const div = document.createElement('div')
            const p = document.createElement('p')
            const ptag = document.createElement('p')
            // 2 Edit element
            // div.style.border = "1px solid black"
            div.classList.add("todo-container")
            p.textContent = data[i].title
            ptag.textContent = data[i].description
            // 3 Append, Put on DOM
            div.appendChild(p)
            div.appendChild(ptag)
            document.body.appendChild(div)
        }
    }

    // Functional