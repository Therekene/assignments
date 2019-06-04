var monitor = {
    isPoweredOn = false,
    price = 50,
    brand = "asus"
}

var chair = {
    isAdjustable = true,
    color = "grey",
    wheels = 4,
}

var cup = {
    isFull = false,
    color = "white",
    size = 16,

}

var mug = {
    isFull = true,
    color = "blue",
    size = 32,
}

var macbook = {
    isPoweredOn = true,
    price = 2000,
    brand = "mac",
}

var backpack = {
    color = "black",
    isFull = true,
    price = 20
}

var bannana = {
    color = "yellow",
    isEaten = true
    price = 1,
}

var napkin = {
    color = "white",
    isUsed = false,
    price = 0,
}

var mouse = {
    color = "grey",
    isPoweredOn = true,
    price = 20
}

var thermos = {
    color = "white"
    isFull = true
    price = 30
}

electronics [monitor , macbook , mouse ,]
container [cup , mug , thermos, backpack]
