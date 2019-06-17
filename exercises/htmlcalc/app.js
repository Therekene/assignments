var addForm = document.addForm
var addButton = document.getElementById("addButton")

addButton.addEventListener("click", function(event){
    var addIn1 = Number(document.getElementById("addin1").value)
    var addIn2 = Number(document.getElementById("addin2").value)

    var sumadd = addFun(addIn1, addIn2)
    var total = document.getElementById("sumadd")
    total.textContent = sumadd
})
var subButton = document.getElementById("subButton")

subButton.addEventListener("click", function(event){
    var subIn1 = Number(document.getElementById("subin1").value)
    var subIn2 = Number(document.getElementById("subin2").value)

    var sumsub = subFun(subIn1, subIn2)
    var total = document.getElementById("sumsub")
    total.textContent = sumsub

})

multButton.addEventListener("click", function(event){
    var multIn1 = Number(document.getElementById("multin1").value)
    var multIn2 = Number(document.getElementById("multin2").value)

    var summult = multFun(multIn1, multIn2)
    var total = document.getElementById("summult")
    total.textContent = summult

})


function addFun(num1, num2){
   return num1 + num2
}

function subFun(num1, num2){
    return num1 - num2
 }

 function multFun(num1, num2){
    return num1 * num2
 }

