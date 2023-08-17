var count = 1;
var countElement = document.querySelector("#count")

console.log(countElement)

function addOne(){
    count++;
    countElement.innerText = "The count is " + count
    console.log(count);
}

function subtractOne(){
    count--;
    countElement.innerText = "The count is " + count
    console.log(count);
}
