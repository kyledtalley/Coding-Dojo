//No leftovers for you!
// var pieces = 5;
// var people = 5;

//You have some leftovers:
var pieces = 12;
var people = 5;

// You have leftovers to share
// var pieces = 15;
// var people = 3;

//"Hold another party!
// var pieces = 20
// var people = 7



function howMuchLeftOverCake(numberOfPieces, numberOfPeople){
  var cakeLeft = numberOfPieces % numberOfPeople;
  console.log(cakeLeft + " pieces of cake are left over");
  return cakeLeft;

}

var cakeLeft = howMuchLeftOverCake(pieces,people);

if (!cakeLeft) {
  console.log("No leftovers for you!")
  }
else if( cakeLeft > 0 && cakeLeft <= 2){
  console.log("You have some leftovers")
}
else if(cakeLeft > 2 && cakeLeft <= 5){
  console.log("You have leftovers to share")
}
else if(cakeLeft > 5){
  console.log("Hold another party!")
}

