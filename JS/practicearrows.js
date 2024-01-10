
// let sum = (a,b)  => console.log(a+b);

// sum(9,12)


// let isPositive = number => console.log(number >= 0);

// isPositive(12)

// let randomNumber = () => Math.random;

// console.log(randomNumber());
// document.addEventListener('click', () => console.log("Click"));


class Person{
    constructor(name){
        this.name = name
    }
}

printNameArrow(){
    setTimeout(() => {
        console.log('Arrow: ' + this.name);
    }, 100);
}

printNamefunction() {
    setTimeout(function(){
        console.log('Function: ' + this.name)

    }, 100)
}


let person = new Person('Bob')
person.printNameArrow()
person.printNamefunction()
console.log(this.name);
