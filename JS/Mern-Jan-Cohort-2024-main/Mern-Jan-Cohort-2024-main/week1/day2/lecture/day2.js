// Ternary Operator
// Another way to write a if else statement. 
// A short cut to to writing if else especially when assigning a variable



let message = (age, required ) => age >= required ?  "You're old enough!!" : "You're too young sorry!!"
console.log(message(50, 30))

// if(age >= 21){
//     message = "You're old enough!!"
// }
// else {
//     message = "You're too young sorry!!"
// }


// Callback functions
// Platform for example
// reasons to use callback functions
// Using callbacks, especially in conjunction with functions, provides a more flexible and reusable way to perform operations on elements of a list. Callbacks allow you to customize the behavior of the function without modifying its core logic. Reusability, Flexibility, Abstraction and Conciseness

// .map method 

// let foods = ["Pizza", "Donut", "Sandwich"]

// let newFoods = foods.map( (str) =>  { 
//     return str + ", yum"
// })

// console.log(newFoods)
// console.log(foods)
// .filter method 

// let numbers = [1, 2, 3, 4, 5];

// let evenNums = numbers.filter( (num) => {
//     return num % 2 === 0;
// } )

// console.log(evenNums)

// .forEach method 

let foods = ["Pizza", "Donut", "Sandwich"]

// foods.forEach( (str) => {
//     console.log(str)
// })



foods.forEach( (str, index, array) => {
    // console.log(str)
    // console.log(index)
    // console.log(array)
    // array[index] = str + " yum"
})

// console.log(foods)

// Object.freeze() function 
// platform example 

// Sort walkthrough 
const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
  ]);

const sortedGroceries = [...groceryList].sort( (a, b) => a.haveIngredient > b.haveIngredient ? 1 : -1 );
console.log(sortedGroceries)


// Returning 1 means that the element a should be placed after the element b in the sorted order.
// Returning -1 means that the element a should be placed before the element b in the sorted order.
// Returning 0 means that the relative order of a and b remains unchanged.