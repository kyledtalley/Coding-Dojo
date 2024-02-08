import express from "express";
const app = express();
const port = 8000;

app.use( express.json() );

const users = [
    { firstName: "Reimu", lastName: "Hakurei", id:12344524 },
    { firstName: "Marisa", lastName: "Kirisame", id:2342345 },
    { firstName: "Sanae", lastName: "Kochiya", id:3453345 },
    { firstName: "Sakuya", lastName: "Izayoi", id:456456 },
    { firstName: "Momiji", lastName: "Inubashiri", id:35345 }
];

app.get("/api/users", (req, res) => {
    // console.log()
    res.json( users )
})

app.post("/api/users", (req, res) => {
    // console.log(req.body)
    users.push(req.body)
    res.json( users )
})

app.get("/api/users/:id", (req, res) => {
    console.log(req.params.id)
    const user = users.filter( (item, index) => item.id != req.params.id ? null : item)
    console.log(user)
    res.json( user )
})


app.listen( port, () => console.log(`Listening on port: ${port}`) );