import express from "express"
import { faker } from "@faker-js/faker"
const app = express()
app.use(express.json())
const port = 8000
app.listen(port, () => console.log("Listening on ports:" + port))

const createUser = () => {
	const userObj = {
		password: faker.internet.password(),
		email: faker.internet.email(),
		phoneNumber: faker.phone.number(),
		lastName: faker.person.lastName(),
		firstName: faker.person.firstName(),
		_id: faker.string.uuid(),
	}
	return userObj
}

const createCompany = () => {
	const companyObj = {
		_id: faker.string.uuid(),
		name: faker.company.name(),
		address: {
			street: faker.location.streetAddress(),
			city: faker.location.city(),
			state: faker.location.state(),
			zipCode: faker.location.zipCode(),
			country: faker.location.country(),
		},
	}
	return companyObj
}


const newFakeUser = createUser()
const newFakeCompany = createCompany()
console.log(newFakeUser)
console.log(newFakeCompany)
const newFakeCompanyUser = {
    user: newFakeUser,
    company: newFakeCompany
}

app.get("/api/users/new", (req, res) => {
    res.json(newFakeUser)
})

app.get("/api/companies/new", (req, res) => {
    res.json(newFakeCompany)
})

app.get("/api/user/company", (req, res) => {
    res.json(newFakeCompanyUser)

})
