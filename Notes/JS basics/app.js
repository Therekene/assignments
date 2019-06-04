// 5 JS data types

// Primitive - Immutable - (The number 10 will always be the number 10, you can't change that)
    // String    = "joe"
        // "801-292-3489"
        // "34892-3849"

    // Boolean  = true
        // function eat(){
        //     console.log('nom nom nom')
        // }

        // var isHungry = true
        // if(isHungry){
        //     eat()
        // } 

    // Number    
        // var age = 22
        // age--
        // age -= 1
        // age = age - 1

        
// Complex   - Mutable (contents of these data types can be changed)
    // Array       0  1  2  3  4  5
        var ages = [1, 2, 3, 4, 5, 6]
        // console.log(ages[4])

        var names = ["steve", "joe", "steph", "betty"]
        console.log(names[4])
        console.log(names[names.length - 1])

        var people = [
            { name: "steve", age: 20 },
            { name: "phil",  age: 40  }
        ]

        console.log( people[people.length - 1].age )

        var matrix = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]

    // Object
        // dot and bracket notation
        // Methods are Functions inside of Objects (they work the same)
    var car = {
        manufacturer: "",
        make: "",
        model: "",
        year: 100,
        doesRun: false,
        statesDrivenIn: ["alaska", "hawaii"],
        engine: {
            cyllinders: 4,
            works: false
        },
        honk: function(){
            console.log("meep meep")
        }
    }

        console.log(car)
        // Add a .mileage to the car object  (because objects are mutable so their contents can be changed)
        car.mileage = 5000000 
        
        console.log(car)
        
        // Delete the .mileage from the car object  (because objects are mutable so their contents can be changed)
        delete car.mileage 

        // console.log(car.year + car.engine.cyllinders)
        // car.honk()


