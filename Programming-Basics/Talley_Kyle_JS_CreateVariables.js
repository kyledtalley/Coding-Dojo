//variables for our program to determien if a guest can ride the coaster
var minimum_age = 10;//in years
var minimum_height = 42;//in inches
console.log("You must be", minimum_age, "years old, and", minimum_height, "inches tall to ride this roller coaster.");

/* This did not work as intended, I found out through StackOverflow that "prompt" only works through browsers.
let age = prompt("How old are you?");//has user input their age
let height = prompt("Enter your height in inches");//has the user input their height in inches
*/

var age = 12;
var height = 2;



console.log("This demonstrates Stretch Feature 1: ");

//Stretch Feature 1
if (age >= 10 && height >= 42) {
  console.log("Enjoy the ride kiddo!");
}
else{
  console.log("Sorry kiddo. Maybe next year.");
}



console.log("This demonstrates Stretch Feature 2: ");
//Stretch Feature 2
if (age >= 10 || height >= 42) {
  console.log("Enjoy the ride kiddo!");
}
else{
  console.log("Sorry kiddo. Maybe next year.");
}



