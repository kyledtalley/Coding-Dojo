var arr1 = [8,6,7,5,3,0,9];
var arr2 = [4,7,13,13,19,37,-2];
var arr3 = [6,2,12,14,-24,5,0];

console.log("This is Array 1: ");

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

console.log("This is Aray 2: ");

for (let i = 0; i < arr2.length; i++) {
  console.log("Index: ");
  console.log(i);
  console.log("Number: ");
  console.log(arr2[i]);
}

console.log("This is Array 3 with (hidden) Ninja Bonus modifier: ");

for (let i = 0; i < arr3.length; i++) {

  if (arr3[i] > 5) {
    console.log(arr3[i]);
  }
  else{
    arr3[i] = 'No dice.';
  }
//console.log(arr3);
//Just in case you want to see if 'No dice.' works ^

}


