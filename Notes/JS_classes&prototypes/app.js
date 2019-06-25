// Constructor Function
    // Blueprint that outputs objects with the same properties

    // Constructor ( what a car is)
// function Car(make, model){
//     this.make = make
//     this.model = model
// }

    // Prototype methods ( what cars do )
// Car.prototype.honk = function(){
//     console.log("Hoooonk")
// }

// // Constructor       => Make, model  (what does it mean to be car)
// // Prototype methods => honk, crash (What do cars do?)

// // Instantiate => making an "new" instance of (something)

// const myMazda = new Car("Mazda", "three")
// console.log(myMazda.honk())

class Car {
    constructor(make, model, honkSound){
        // what it means to be a car   (who am i) => constructor
        this.make = make
        this.model = model
        this.honkSound = honkSound
    }
    // What do cars do => prototypal methods
    honk(){
        console.log(this.honkSound)
    }

    run(){
        console.log("Rumble")
    }

    crash(){
        console.log("AHHHHH")
    }
}


class Jeep extends Car {
    constructor(make, model, honkSound, isAWD){
        super()
        this.isAWD = isAWD
    }

    climb(){
        console.log("I'm climbing!")
    }

}

// const chevy = new Car("Chevy", "Malibu", "Blaarb")
const jeep = new Jeep("Jeep", "Cherokee", "Bluurb", true)

// chevy.honk()
jeep.honk()
jeep.run()
jeep.climb()
jeep.crash()

// const myStr = new String("hello")
// const myStr = new Boolean(false)
// const myStr = new Number(3)
// const myStr = new Array([1, 2, 3])
// const myStr = new Object([1, 2, 3])