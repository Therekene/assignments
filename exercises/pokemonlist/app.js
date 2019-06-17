const xhr = new XMLHttpRequest

xhr.open ("GET", "https://api.vschool.io/pokemon")
xhr.send() 

    xhr.send

    xhr.onreadystatechange = function(){
        if (xhr.readyState=== 4 && xhr.status ===200 ){
            const data = JSON.parse(xhr.responseText)
            console.log(data)
            const pokemon =data.objects[0].pokemon
            acceptData(pokemon)
        }
    }
function acceptData(data){
    // console.log (data)
    for (let i =0; i < data.length; i++){
        const pokemonName = data[i].name
        const newName = document.createElement("h1")
        newName.textContent = pokemonName
        document.body.appendChild(newName)

    }
}

