import {Router} from 'express'

const router = Router()

router.route("/products",)
    .get()
((reqw, res) => {
    res.send("Hello World")
})

.post((req, res) => {
    res.send("POST request")
})

router.route("/products/:id")
    .get((req, res) => {
        res.send("GET request");
    })
    .put((req, res) => {
        res.send("PUT request");
    })
    .delete((req, res) => {
        res.send("DELETE request");
    });
export default router;
