function findAvg(arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	avg = sum / arr.length;
	return avg;
}
var arr = [1, 3, 5, 7, 20];
findAvg(arr);
console.log;
