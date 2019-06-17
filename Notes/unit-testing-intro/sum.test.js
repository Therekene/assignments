const sum = require('./sum.js')

// 
test("returns the sum of two numbers", function(){
    expect(sum(10, 4)).toBe(14)
    expect(sum(10, 35)).toBe(45)
    expect(sum(0, 4)).toBe(4)
    expect(sum(10, 2)).toBe(12)
}) 

test("if given non-numerical values, let's the user know", function(){
    expect(sum(4, "hello")).toBe("Must give me 2 numbers")
})
