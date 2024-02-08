const ObjectComponent = () => {
	const myObject = { name: "Kyle", age: 27, statement: "I'm in California!" }
	const { name, age, statement } = myObject

	return (
		<>
			<div className="objectStyle">
				<h1>Object Literal</h1>
				<div>
					<h3>About me:</h3>
					<p>Name: {name}</p>
					<p>Age: {age}</p>
					<p>Statement: {statement}</p>
				</div>
			</div>
		</>
	)
}

export default ObjectComponent
