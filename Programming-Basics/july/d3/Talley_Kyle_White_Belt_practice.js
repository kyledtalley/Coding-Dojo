// for (var x = 5; x<12; x+=2){
//   console.log(x);
// }

// var msg = 'codingdojo';
// for(var x = 5; x < msg.length+3; x+=2){
//   console.log(x);
// }

// var x = 10;
// if(x ==10){
//   console.log(x);
// }
// else{
//   console.log('hello');
// }

// var msg = 'dojo';
// if(msg =='dojo'){
//   console.log('coding'+msg);

// }
// else{
//   console.log('ninja'+msg);
// }

// for(var x = 13; x>3; x-=3)
// {
//   console.log(x);
//   break;
// }

// var msg = 'hello!';
// for(var x=17; x > msg.length + 7; x-=1){
//   console.log(x);
// }

// var msg = 'codingdojo';
// for(var x = 2; x < msg.length - 5; x+=1){
//   if(msg.length == 2){
//     for (var i = 3; i < Int8Array; i++){
//       console.log(i);
//     }
//   }
//   else{
//     for(var i = msg.length; i > (msg.length - 2); i-=2){
//       console.log(i);
//     }
//   }
// }

// function sum_odd(){
//   var sum = 0;
//   for(var i = 3; i < 312; i+=1){
//       if((i % 2) !== 0){
//         sum += i;
//       }
//   }
//   return sum;
// }
// var getSum = 0;
// console.log(sum_odd(getSum));

// function averageOfArray(){
//     var array = [13,15,-18,29,3,-4,-9,-10,3,-7];
//     var sum = 0;
//     for (var i = 0; i < array.length; i++) {
//       sum += array[i];
//     }
//     return sum / array.length;
// }

// var getAvg = 0;
// console.log(averageOfArray(getAvg));

function countNegatives(){
	var array = [-13, -15, -8, -29, -3, 4, 9, 10, -3, 7];
	var count = 0;
  for (var i = 0; i < array.length; i++){
    if (array[i] <= 0){
      count++;
    }
  }
	return count;
}
var howMany = 0;
console.log(countNegatives(howMany));
