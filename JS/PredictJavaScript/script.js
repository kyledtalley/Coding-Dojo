// //Problem 1: Why did the code produce that output? If applicable, how would you get the index value that did not output?

// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar)
// console.log(otherRandomCar)

// //1. randomCar will be Tesla, otherRandomCar will log Mercedes
// //2. I was right!
// //3. randomCar is just selecting the very first car, which is a Tesla. otherRandomCar is skipping a car and going straight to index 1, which is Mercedes.
// //3B. To get the index value of Honda you could do [, , otherRandomCar] or do [, , ...otherCars] and console log otherCars

// //Problem 2: Why did the code produce that output? If applicable, what would you need to do to solve any potential problems?
// const employee = {
//     employeeName: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { employeeName: otherName } = employee;
// //Predict the output
// console.log(otherName);
// console.log(employeeName);

// //1. I predict they will both log Elon
// //2. I was wrong! You get an error.
// //3. employeeName is never defined, because when we defined it we changeed its name to otherName

// //Problem 3: Why did the code produce that output? If applicable, how would you alter this code without changing either console.log?
// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person
// //Predict the output
// console.log(password);
// console.log(hashedPassword);

// //1. I don't think it's going to run correctly. when we are renaming password from the pereson object to hashedPassword we run into the issue of password not existing in that object.
// //2. I was correct, password did work like I expected but hashedPassword did not.
// //3. We could change it to a spread operator perhaps?

// //Problem 4: Why did the code produce that output? Declare a new variable for the value at the 4th index of the array and console.log it.

// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// //Predict the output
// console.log(first === second);
// console.log(first === third);
// numbers[4] = 697

// console.log(numbers);

// //1. I predict ,first is equivalent to 2. ,,,second is equivalent to 5. ,,,,,,,,third is equivalent, if I counted the commas correctly, to 2. False True will be printed
// //2. I was right
// //3 I'm not sure I did that right, that gave very strong ES5 vibes

// //Problem 5: Why did the code produce that output? Console.log the last value in the secondKey property's array.

// const lastTest = {
// 	key: "value",
// 	secondKey: [1, 5, 1, 8, 3, 3],
// };
// const { key } = lastTest;
// const { secondKey } = lastTest;
// const [, willThisWork] = secondKey;
// //Predict the output
// console.log(key);
// console.log(secondKey);
// console.log(secondKey[0]);
// console.log(willThisWork);
// const [ ,,,,,lastValue ] = secondKey;
// console.log(lastValue);

// //1. I predict key will produce value, secondKey will log the array, secondKey[0] will log 1, and willThisWork will hopefully log 5
// //2. I was right!
// //3. It produced that output because key contains value, second key contains an array, secondkey[0] is index zero of the array contained by secondkey, and willthiswork is skipping one index and printing whatever is there at secondkey

// //Problem 6: First, how many scopes does the following code block contain? Define each scope and guess what the output will be.

// var beatles = ['Paul', 'George', 'John', 'Ringo'];
// function printNames(names) {
//   function actuallyPrintingNames() {
//     for (var index = 0; index < names.length; index++) {
//       var name = names[index];
//       console.log(name + ' was found at index ' + index);
//     }
//     console.log('name and index after loop is ' + name + ':' + index);
//   }
//   actuallyPrintingNames();
// }
// printNames(beatles);

// //1. It will log "Paul was found at index 0", george 1, so on.. Then it will log that thename after the loop is Ringo at 4, because it will increase one more time when it ends and before it starts again.
// //2. Got it!
// //3. I believe there are 3 scopes. The global scope, printNames(), and actuallyPrintingNames(). The for loop is not its own scope.


// //Problem 7: why did the code produce that output?

//  function actuallyPrintingNames() {
//      for (let index = 0; index < names.length; index++) {
//        let name = names[index];
//        console.log(name + ' was found at index ' + index);
//      }
//      console.log('name and index after loop is ' + name + ':' + index);
//    }

// //1. Just predicted this in number 6 and explained it in 6.1, however this time I don't think anything will come out because the function is never actually called
//2. Correcto


//Problem 8: Why did the code produce that output? Explain the output, including any possible errors and why they occurred. If there are no errors, explain the justification for each keyword used to declare variables.
// const beatles = ['Paul', 'George', 'John', 'Ringo'];
// function printNames(names) {
//   function actuallyPrintingNames() {
//     for (let index = 0; index < names.length; index++) {
//       const name = names[index];
//       console.log(name + ' was found at index ' + index);
//     }
//   }
//   actuallyPrintingNames();
// }
// printNames(beatles);

//1. This is working perfectly fine, but now I'm confused at why var index = 0 worked earlier? Let let's it be changed with ease, but I thought var wasn't quite as easy on that. I'm not sure how to answer this one.

// //Problem 9: Why did the code produce that output? Explain why each console.log looks the way it does.

// const planet = {
// 	name:"Jupiter",
// 	milesFromSun: 49849,
// 	mass: 393983,
//             compos-ition: ["gas", "liquid", "oxygen"]
// }
// const planetCopy = {...planet}
// console.log(planet.composition[0] === planetCopy.composition[0])
// console.log(planet === planetCopy)

// //1. It will log true the first time, it is quite literally a copy. It was made by the spread operator so I hope I'm right. The second time, if I'm right, should be false because although it is a copy it's location of memory should be stored elsewhere so it will be uniquely different.
// //2. Got it
// //3.I kinda fulfilled this one in my prediction part of the question


