// Scope
// Scope is the context in which a variable exists.
// 3 main scopes in JS: Global, Function, Block
// Global scope is anything defined outside of a function and block 
// Function is anything inside of a function
// block is anything inside a block (if statement, for loop, while loop etc)

// let x = 100

// function add(num1, num2){
//     console.log(x)
//     let z = 10
//     return num1 + num2
// }
// add(x, 5)

// console.log(z)

// if(true){
//     let z = 10
//     console.log(z)
// }
// console.log(z)

// Const 
// const food = "pizza"

// food = "Soup"

// const person = {
//     name: "Chris",
//     age: 31,
//     isHuman: true
// }

// person.name = "Fred"
// person["fav_food"] = "Ice Cream"

// console.log(person)

// const foods = ["Pizza", "Soup", "Sandwich"]

// foods[0] = "Ice Cream"

// console.log(foods)

// Arrow functions
// Shorter syntax for writing functions


// function add(num1, num2){
//     return num1 + num2
// }
// // implicit
// const add = (num1, num2) => num1 + num2
// // explicit
// const add = (num1, num2) => {
//     num1 *= 2
//     return num1 + num2
// }


// let new_foods = foods.map( (food) => {
//     return food + " yum"
// })

// console.log(new_foods)

// Destructuring
// const person = {
//     name: "Chris",
//     age: 31,
//     isHuman: true
// }


// let { name, isHuman, age } = person

// console.log(name)
// console.log(isHuman)
// console.log(age)

// let arr = [3,44,8,28]
// let [,,,x] = arr

// console.log(x)
// console.log(z)
// console.log(y)
// Spread Operator

const person = {
    name: "Chris",
    age: 31,
    isHuman: true
}

// let newPerson = {...person}

// console.log(newPerson)

let newPerson = {
    ...person,
    fave_fruit: "Watermelon"
}

console.log(person)
console.log(newPerson)

let arr = [10, 330, 0, 20]

let newArr = [...arr, 25, 10, 34]

console.log(arr)
console.log(newArr)
// Ternary Operator

