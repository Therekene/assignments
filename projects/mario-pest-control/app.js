var input1 = document.getElementById("input1")
var input2 = document.getElementById("input2")
var input3 = document.getElementById("input3")
var goomba = 0
var bomb = 0
var cheep = 0

input1.addEventListener("input", function(event){
    goomba = Number(input1.value) * 5
    total(goomba, bomb, cheep)    
})
input2.addEventListener("input", function(event){
    bomb = Number(input2.value) * 7
    total(goomba, bomb, cheep)    
})
input3.addEventListener("input", function(event){
    cheep = Number(input3.value) * 11
    total(goomba, bomb, cheep)
})




function total (num1, num2, num3){
    document.getElementById("totalcoin").innerHTML = ( num1 + num2 + num3 )
}
