function rotateArray(arr, n){
  for (let i = 0; i < arr.length; i++) {

    if(n>0){
      if(arr[i] <= (n-1)){
        arr[i] = arr[i-n];
      }
      arr[i] = arr[i+n];

    }
    if(n<0){
      if(arr[i] >= (n - 1)){
        arr[i] = arr[i+n];
      }
      arr[i] = arr[i-n];
    }

    // var tmp = n;
    // for(var x = n; x < n; x++){
    //   arr[x]= arr[x-n];
    // }


    // if(n < 0){
    // arr[i] = arr[i-n];
    // }
    // else if(n>0){
    //   arr[i] = arr[i+n];
    // }

  }
  console.log(arr);
}

var arr = [1,2,3,4,5];
var n = 2;
rotateArray(arr, n)
