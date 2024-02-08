import express from "express"
const app = express()
const port = 8000
// make sure these lines are above any app.get or app.post code blocks
app.use(express.json())

function middleWare(req, res, next) {
	next()
}
app.use(middleWare)
app.get("/hello", (req, res) => {
	res.send("Hello world!")
})
const users = [
	{ firstName: "Reimu", lastName: "Hakurei", id: 0 },
	{ firstName: "Marisa", lastName: "Kirisame", id: 3 },
	{ firstName: "Sanae", lastName: "Kochiya", id: 2 },
	{ firstName: "Sakuya", lastName: "Izayoi", id: 3 },
	{ firstName: "Momiji", lastName: "Inubashiri", id: 4 },
]
app.get("/api/users", (req, res) => {
	res.json(users)
})
app.get("/api/allUsers/:id", (req, res) => {
	const getAllUsersById = users.filter((user) => user.id == req.params.id)
	res.json(getAllUsersById)
})
app.get("/api/users/:id", (req, res) => {
	console.log(req.params.id)
	const getUserById = users.find((user) => user.id == req.params.id)
	res.json(getUserById)
})
app.post("/api/users", (req, res) => {
	console.log(req.body)
	users.push(req.body)
	res.json(users)
})

app.put("/api/users/:id", (req, res) => {
	users.forEach((user, idx) => {
		if (user.id == req.params.id) {
			user = { ...user, ...req.body }
			users[idx] = user
		}
	})
	const updatedUser = users.find((user) => user.id == req.params.id)
	res.json(updatedUser)
})

app.patch("/api/users/:id", (req, res) => {
	users.forEach((user, idx) => {
		if (user.id == req.params.id) {
			user.firstName = req.body.firstName
			user.lastName = req.body.lastName
		}
	})
	const updatedUser = users.find((user) => user.id == req.params.id)
	res.json(updatedUser)
})
app.delete("/api/users/:id", (req, res) => {
    const userId = req.params.id;
    const index = users.findIndex(user => user.id == userId);
    users.splice(index, 1);
    res.json(users);
});



app.listen(port, () => console.log("Listening on ports: " + port))
