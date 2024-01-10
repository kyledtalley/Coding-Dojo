/*Scope
Scope is the context to which a variable exists.
3 main scopes in JS: Global, Function, Block
Global scope is anything defined outside of a function and block
Function is anything inside of a function
block is anything inside a block(if statement, for loop, while loop etc)
*/

// let x = 100

// function add(num1, num2) {
// 	console.log(x)
// 	var z = 10
// 	return num1 + num2
// }

// add(x, 5)

// if (true) {
// 	let z = 10
// 	console.log(z)
// }

// const food = "pizza"
// food = "Soup"

// const person = {
// 	name: "Kyle",
// 	age: 27,
// 	isHuman: true,
// }

// person.name = "Fred"

// console.log(person)

// person["fav_food"] = "Ice Cream"
// // console.log(person)

// const add = (num1, num2) => {
// 	return num1 + num2
// }

// const add2 = (num1, num2) => num1 + num2

// console.log(add(2, 2))
// console.log(add2(2, 2))

// for destructuring
// if it's an object we're targeting we use curly braces
// if it's an array we use square brackets

// const person = {
// 	name: "Kyle",
// 	age: 27,
// 	isHuman: true,
// }

// let { isHuman, age } = person

// let { name } = person
// console.log(name)
// console.log(isHuman)
// console.log(age)

// let arr = [3, 44, 8, 28]
// let [, , , x] = arr
// console.log(x)

// const person = {
// 	firstName: "Bob",
// 	lastName: "Marley",
// 	email: "bob@marley.com",
// 	password: "sekureP@ssw0rd9",
// 	username: "barley",
// 	addresses: [
// 		{
// 			address: "1600 Pennsylvania Avenue",
// 			city: "Washington, D.C.",
// 			zipcode: "20500",
// 		},
// 		{
// 			address: "221B Baker St.",
// 			city: "London",
// 			zipcode: "WC2N 5DU",
// 		},
// 	],
// 	createdAt: 1543945177623,
// }

// // const bob = {...person}
// // bob.firstName = "Ziggy"
// // console.log(bob);

// let newPerson = {
// 	...person,
// 	fave_fruit: "weed",
// }

// console.log(newPerson)

let arr = [10, 330, 0, 20]

let newArr = [...arr, 25, 10, 34]
console.log(newArr);
