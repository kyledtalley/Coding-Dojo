//variable?
    //var- can be changed-Old way

    //let-can be changed
    //const- immutable

//primitive-
    //strings
        //let firstName = "Kyle"
        //let phrase = "Kyle's homework is done"
    //number
        //let age = 28
    //boolean
        //let isClean = true
    //null

//structural-
    //array
        //let arr = [1, 2, 3, "billy", 4, 5,[1,2,3], 6, 7, 8]

        //console.log(arr[3]) would be "billy"
        //console.log(arr[6][1]) would be 2
    //objects
        let obj = {
            'firstName':"Kyle",
            'lastName':"Talley"
        }
        console.log(obj)
        console.log(obj.firstName)
        console.log(obj["firstName"])

            // = assigning a value
            // == comparison
            // === Strict comparison (compares data type)
            // != comparing not eual
            // += add and re-assign
            // -= subtract and re-assign
            // * multiply
            // + add as well as concatenate
            //- subtract
            // / divide
            // % modulo (remainder)
            // ||
            // &&

let firstName = "Kyle"
let lastName = "Talley"
console.log(firstName + " " + lastName)
console.log(`My name is ${firstName} ${lastName}`)

//create a function that adds two numbers together and returns a new value

function add(num1, num2){

    return num1+num2

}

var newNum= add(1,3)
console.log(newNum)
