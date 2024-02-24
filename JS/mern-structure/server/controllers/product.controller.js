import Product from "../models/product.model.js"

async function createProduct(req, res) {
	try {
		const newProduct = await Product.create(req.body)
		res.json(newProduct)
	} catch (error) {
		res.status(400).json(error)
	}
}
