// const person = {
// 	firstName: "Bob",
// 	lastName: "Marley",
// 	email: "bob@marley.com",
// 	password: "sekureP@ssw0rd9",
// 	username: "barley",
// 	addresses: [
// 		{
// 			address: "1600 Pennsylvania Avenue",
// 			city: "Washington, D.C.",
// 			zipcode: "20500",
// 		},
// 		{
// 			address: "221B Baker St.",
// 			city: "London",
// 			zipcode: "WC2N 5DU",
// 		},
// 	],
// 	createdAt: 1543945177623,
// };

// const personCopy = {...person};

// personCopy.firstName = "Ziggy";
// console.log( personCopy, person);


// personCopy.firstName = "Ziggy";

// console.log(personCopy);
// console.log(person);

// // const {firstName, lastName} = person
// // console.log(firstName, lastName)

// // const {
// // 	addresses: [, , london],
// // } = person;
// // console.log(london);

// // const animals = ["horse", "dog", "fish", "cat", "bird"];

// // const { email } = person;
// // const [firstAnimal] = animals;
// // console.log(email);
// // console.log(firstAnimal);
// // const { email, password } = person;
// // const [firstAnimal, secondAnimal, thirdAnimal] = animals;

// // console.log(email, password);
// // console.log(firstAnimal, secondAnimal, thirdAnimal);

// // const { firstName: newFirstName } = person;

// // console.log(newFirstName);

// // const { addresses: [whiteHouse, sherlock] } = person;
// // console.log(whiteHouse, sherlock);

// const { addresses: [, {city: london}]} = person;
// console.log(london);

// let state = "some value";

// const useState = [
// 	function () {
// 		console.log(state);
// 		return state;
// 	},
// 	function (newStateValue) {
// 		console.log("new value: " + newStateValue);
// 		state = newStateValue;
// 		return state;
// 	},
// ];

// const [getter, setter] = useState
// setter("the value of state has been updated!")

// getter()


let state = [1, 2, 3, 4, 5]
const useState = [
    //Array index 0; A Getter Function
    function () {
        return state
    },
    //Array index 1; A Setter Function
    function (newStateValue) {
        state = newStateValue
        return state
    }
];
const [getter, setter] = useState;
function update(param1, param2) {
    setter([...param1, param2])
    return state
}
update(getter(), 6)
console.log(state) //Output: [1, 2, 3, 4, 5, 6]

