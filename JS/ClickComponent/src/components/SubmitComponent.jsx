const SubmitComponent = (props) => {
	const { submitProp } = props
	const submitHandler = (e) => {
        e.preventDefault()
        alert(submitProp)
    }
	return (
		<>
			<h1>Form Component</h1>
			<form onSubmit={submitHandler}>
				<button>Submit</button>
			</form>
		</>
	)
}

export default SubmitComponent
