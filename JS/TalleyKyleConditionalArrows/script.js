const problemOne = age => age > 18 ? "You are good to go!" : "Sorry! You must be 18 or older!";

console.log(problemOne(19));
console.log(problemOne(18));



const problemTwo = weather => weather === "raining" ? "Get your rain jacket!" : "No rain on today's forecast!";
console.log(problemTwo("raining"));
console.log(problemTwo("not raining"));



const problemThree = test => test % 2 === 0 ? "That's an even number!" : "That's an odd number!";
console.log(problemThree(2));
console.log(problemThree(3));





const problemFour = (numOne, numTwo) => numOne > numTwo ? `${numOne} is greater than ${numTwo}` : `${numOne} is less than ${numTwo}`
console.log(problemFour(3, 2));
console.log(problemFour(2, 3));
