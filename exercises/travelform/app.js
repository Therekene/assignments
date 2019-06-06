var tForm = document.tForm

tForm.addEventListener("submit", function(event){
    event.preventDefault()
    var firstName = document.tForm.firstName.value
    var lastName = document.tForm.lastName.value
    var age = document.tForm.age.value
    var gender = document.tForm.radioinput.value
    var destination = document.tForm.destination.value
    var departure = document.tForm.destination.value
    var checkboxArr = tForm.diet
    var dietChoice = []
    
    for(var i = 0; i < checkboxArr.length; i++)
        if(checkboxArr[i].checked){
            dietChoice.push(checkboxArr[i].value)
        }
        
    
    window.alert(`
    First Name: ${firstName}
    Last Name: ${lastName}
    Age: ${age}
    Gender: ${gender}
    Departure: ${departure}
    Destination: ${destination}
    Dietary Restrictions: ${dietChoice}
    
    `)
    
    
    
    
    
    









})