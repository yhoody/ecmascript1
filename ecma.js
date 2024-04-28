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

// console.log(add(4,7))
// console.log(subtract(90,0.5))
// console.log(exponent(0.8))
// console.log(multiply(6,4))
 
const fruit2 = [`orange`, `mango`, `pineapple`, `plum`, 'pear']
// const firstFruit = fruit2[0]
// const thirdfruit = fruit2[2]
// const fifthFruit = fruit2[4]

// Array Destructuring in es6
const [tropicalFruit, , thirdFruit, , fifthFruit] = fruit2 
// console.log(thirdFruit)
// console.log(tropicalFruit);


const person = {
    personality: {
        first: 'awkward',
        second: 'social',
        third: 'angry',
        fourth: 'calm',
        fifth: 'chameleon',
    },
    hobbies: ['biking', 'pottery', 'gardening', 'gaming', 'yoga'],
    gender: ['male', 'female', 'trans', '2spirit'],
    email: 'me@me.com',
    phone: 4902484848,
}

const thirdHobbies = person.hobbies[2]
console.log(thirdHobbies);
const thirdPersonality = person.personality.third
console.log(thirdPersonality)

// ES6 Object Destructuringn
const {email, phone} = person
console.log(email)
console.log(phone)

const {gender:[, , thirdGender]} = person 
console.log(thirdGender)
// const [, secondGender, thirdGender2, fourthGender] = gender
// console.log(thirdGender2) 

// rest operator (serves as a hold for the rest of the undefined variables inside the array)
const food = ['Rice', 'Beans', 'Yam', 'Pasta', 'Soup']
const [firstFood, secondFood, ...rest] = food
console.log(rest); 

// Spread Operators
const array1 = [1,2,3,4,5]
const array2 = [6,7,8,9,10]
const array3 = [...array1, ...array2]
console.log(array3); 