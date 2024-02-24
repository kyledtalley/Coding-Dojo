class CustomError extends Error {
	constructor(name, statusCode, message, validations = {}) {
		super(message)
		this.name = name
		this.statusCode = statusCode
		this.validations = validations
	}
}

export default CustomError
