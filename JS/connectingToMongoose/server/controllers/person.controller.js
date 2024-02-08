import Person from '../models/person.model.js';
// create new
async function createPerson(req, res) {
    try {
        const newPerson = await Person.create(req.body);
        res.json(newPerson);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}
export {
    createPerson
};

