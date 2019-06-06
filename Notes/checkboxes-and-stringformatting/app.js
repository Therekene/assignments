var myForm = document.myForm

myForm.addEventListener("submit", function(event){
    event.preventDefault()

    // Number input
    var numValue = myForm.numInput.value
    console.log( parseInt(numValue) + Number(numValue) )
    
    // Checkbox Input => does not have a .value, it has a .checked (true or false)
    console.log( myForm.checkboxInput.checked )

    // Radio => must have hard coded values in the HTML
    console.log( myForm.radioInput.value )

    // color and date inputs 
    console.log( myForm.dateInput.value )
    console.log( myForm.colorInput.value )

    // Select / option inputs => must have hard coded values in the HTML
    console.log( myForm.selectInput.value )
})  