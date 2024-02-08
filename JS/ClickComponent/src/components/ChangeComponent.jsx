const ChangeComponent = () => {
	return (
		<>
			<h1>Change Component</h1>
			<input type="text" onChange={(e) =>console.log(e.target.value)} />
		</>
	)
}

export default ChangeComponent
