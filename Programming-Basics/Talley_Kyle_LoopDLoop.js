//piece of candy every 2 miles when miles < 6

//We know we need a loop here because it will automatically stop the device giving out candy.
//Starting point of the loop will be 2 miles, because that is when the runner gets their first candy
//Loop will stop when they are equal to or greater than 6 miles
//The machine stops giving candy out at the 6th mile so they will get 2 pieces of candy, mile 2 and mile 4.
//The incrementing for the loop will be += 2. This represents 2 miles being ran.
//Variables will be miles, candy, and for the Ninja Bonus we will add mph.

var candy = 0;// declaring candy, setting it to 0 because we start with 0 candy :(
let miles = 0;// going to declare miles as a let because it will be changing
var mph = 5.6;// setting to a constant 5.6mph so our runner qualifies for the candy loop

if (mph >= 5.5) {
  console.log("You are very fast and qualify for free candy every 2 miles!");
  for (let miles = 2; miles < 6; miles+=2) {
    candy += 1;
    console.log('You have ran', miles, 'miles. You have', candy, 'pieces of candy.')
  }
  console.log("Out of candy! Come back later!");
}



