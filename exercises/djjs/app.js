var djbox = document.getElementById("box")
var header = document.getElementById("header")
var lettrPsh = document



djbox.addEventListener("mouseover", function(){
    djbox.style.backgroundColor = "blue"
    header.style.color = "red"
})

djbox.addEventListener("mouseleave", function(){
    djbox.style.backgroundColor = "aqua" 
    header.style.color = "green"   
} )

djbox.addEventListener("mousedown", function(){
    djbox.style.backgroundColor = "red"} )

djbox.addEventListener("mouseup", function(){
        djbox.style.backgroundColor = "yellow"} ) 
        
djbox.addEventListener("mousedown", function(){
        djbox.style.backgroundColor = "red"} )        

djbox.addEventListener("dblclick", function(){
        djbox.style.backgroundColor = "green"} )

window.addEventListener("wheel", function(){
    djbox.style.backgroundColor = "orange"
})      

document.addEventListener("keydown", function(event){
    if (event.which === 82){
        djbox.style.backgroundColor = "red"
    } else if (event.which === 71){
        djbox.style.backgroundColor = "green"
    } else if (event.which === 80){
        djbox.style.backgroundColor = "purple"
    } else if (event.which === 79){
        djbox.style.backgroundColor = "orange"
    } else if (event.which === 66){
        djbox.style.backgroundColor = "blue"
    }      

})






