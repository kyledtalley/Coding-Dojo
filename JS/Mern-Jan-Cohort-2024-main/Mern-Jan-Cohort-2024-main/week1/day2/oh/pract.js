let numbers = [1, 2, 3];

// let printSquare = (number, index, array) => {
//         array[index] = number * number
// };

let printSquare = (number) => console.log(number * number);

// numbers.forEach( (number, index, array) => {
//     array[index] = number * number
// } ); // Output: 1, 4, 9

numbers.forEach(printSquare); // Output: 1, 4, 9
console.log(numbers)


let arr1 =[ 1, 4, 9 ]
let arr2 = [ 1, 2, 3 ]
let arr3 = [20, 40, 60]

let completeArray = [...arr1, ...arr2, ...arr3]

console.log(completeArray)
