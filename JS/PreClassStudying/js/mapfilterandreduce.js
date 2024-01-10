const people = [
    {
        name: "Kyle",
        age: 27,
        occupation: "Web Developer"
    },
    {
        name: "Amy",
        age: 26,
        occupation: "Nurse"
    },
    {
        name: "Bruce",
        age: 55,
        occupation: "Electrician"
    }
]

const names = people.map(person => {
    return person.name;
})



const overThirties = people.filter(person => {
    return person.age >= 30
}).map(person => {
    return person.name
})

const totalAge = people.reduce((total, person) => {
    return total + person.age
}, 0)

const allNames = people.reduce((total, person) =>{
    return total + person.name + ' '
},'All names: ')


console.log(names);
console.log(overThirties);
console.log(totalAge + ' collective yeras old');
console.log(allNames);
