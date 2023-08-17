// var sandwich = {
//     bread: "sourdough",
//     protein: "london broil",
//     cheese: "lacey siwss cheese",
//     toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
// }

// console.log(sandwich);

// function sandwichFactory(bread, protein, cheese, toppings){
//     var sandwich = {};
//     sandwich.bread = bread;
//     sandwich.protein = protein;
//     sandwich.cheese = cheese;
//     sandwich.toppings = toppings;
//     return sandwich;
// }

// var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
// console.log(s1);


function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;

    return pizza;
}


var za1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log("Pizza 1: ")
console.log(za1);

var za2 = pizzaOven("hand tossed", "marinara", ["mozzarrella", "feta"], ["mushrooms", "olives", "onions"]);
console.log("Pizza 2: ")
console.log(za2);

var za3 = pizzaOven("stuffed crust", "white sauce", ["parmesan", "gouda"], ["garlic", "green pepper"]);
console.log("Pizza 3: ")
console.log(za3);

var za4 = pizzaOven("thin crust", "pesto", ["ricotta"], ["pineapple"] )
console.log("Pizza 4: ")
console.log(za4);

function getRandomInt(ingredient) {
    min = Math.ceil(ingredient.length);
    max = Math.floor(0);
    return Math.floor(Math.random() * (max - min) + min);
}



function randomPizza(crust, sauce, cheese, topping){
    var pizza = {};

    var tmp = getRandomInt(crust);
    pizza.crust = crust[tmp];


    var tmp = getRandomInt(sauce);
    pizza.sauce = sauce[tmp];

    var tmp = getRandomInt(cheese);
    pizza.cheese = cheese[tmp];

    var tmp = getRandomInt(topping);
    pizza.topping = topping[tmp];

    return pizza;
}

var rndmCrust = ["deep dish", "hand tossed", "stuffed crust", "thin crust"]
var rndmSauce = ["traditional", "marinara", "whtie sauce", "pesto"]
var rndmCheese = ["mozzarrella", "feta", "parmesan", "gouda", "ricotta"]
var rndmTopping = ["pepperoni", "sausage", "mushrooms", "olives", "onions", "garlic", "green pepper", "pineapple"]

var rndmZa = randomPizza(rndmCrust, rndmSauce, rndmCheese, rndmTopping);
console.log("Random Pizza: ")
console.log(rndmZa)
