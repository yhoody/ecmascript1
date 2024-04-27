// Variable Declaration (Initialization or initial declaration)
let fruit = 'orange'  
// Variable reassignment
fruit = 'blue' 

const firstName = 'Aki'

// Template Literals (A better way to write concatenation using backtick symbol ``)
// console.log(`My name is ${firstName}, My favorite color is ${fruit}`)

const dollars = 100 
const rate = 1300
// console.log(`I should be expecting ${dollars*rate} Nigerian Naira after conversion`)

// console.log(` This is a 
// multi-line 
// string`)

// TERNARY OPERATOR (aka conditional operator - For IF ELSE statements)
// (condition) ? `Expression 1` : `Expression 2`
const age = 20;

// Define message function to utilize the ternary operator
const message = age >= 18 ? `You are an adult` : `You're a minor`;

// Call the function and log the result
console.log(message); // Output: You are an adult

const a = -9
const result = a === 0 ? `zero` : a > 0 ? `positive` : `negative`
// console.log(result)

// Arrow Function
const add = (a,b) => a + b 
const subtract = (a,b) => {
    return a - b
}
const multiply = (x,y) => x*y
const exponent = e => e**2

console.log(add(4,7))
console.log(subtract(90,0.5))
console.log(exponent(0.8))
console.log(multiply(6,4))
 