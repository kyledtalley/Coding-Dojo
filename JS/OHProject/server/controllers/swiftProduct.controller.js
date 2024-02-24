
import swiftyProduct from "../models/swiftProduct.model"

async function getAllSwiftyProducts(req, res) {
	try {
		const products = await swiftyProduct.find()
		res.json(swiftyProduct)
	} catch (error) {
		console.log(error)
		res.status(400).json(error)
	}
}

async function createSwiftyProduct(req, res) {
	try {
		const newSwiftyProduct = await swiftyProduct.create(req.body)
		res.json(newSwiftyProduct)
	} catch (error) {
		console.log(error)
	}
}


export default swiftyProduct
