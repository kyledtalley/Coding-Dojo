import express from "express"
const app = express()
const port = 8000

app.use(express.json())

const users = [
	{ firstName: "Reimu", lastName: "Hakurei", id: 0 },
	{ firstName: "Marisa", lastName: "Kirisame", id: 3 },
	{ firstName: "Sanae", lastName: "Kochiya", id: 2 },
	{ firstName: "Sakuya", lastName: "Izayoi", id: 3 },
	{ firstName: "Momiji", lastName: "Inubashiri", id: 4 },
]

app.get("/api/users", (req, res) => {
	return res.json(users)
})

app.post("/api/users", (req, res) => {
	users.push(req.body)
	res.json(users)
})

app.get("/api/users/:id", (req, res) => {
	const user = users.filter((item, index) =>
		item.id != req.params.id ? null : item
	)
	console.log(user)
    res.json(user)
})

app.listen(port, () => console.log(`Listening on port: ${port}`))
