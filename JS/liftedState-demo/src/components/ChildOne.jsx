import React, { useState } from "react"

const ChildOne = (props) => {

    const {stateUpdater} = props

	const [valueOne, setValueOne] = useState("")
	const [valueTwo, setValueTwo] = useState("")

	const submitHandler = (e) => {
		e.preventDefault()

        let newValue = {
            valueOne,
            valueTwo
        }

        stateUpdater(newValue)
        setValueOne("")
        setValueTwo("")
	}

	return (
		<div>
			<h1>Form</h1>
			<form onSubmit={submitHandler}>
				<label>Value One</label>
				<input
					type="text"
					value={valueOne}
					onChange={(e) => setValueOne(e.target.value)}
				/>
				<label>Value Two</label>
				<input
					type="text"
					value={valueTwo}
					onChange={(e) => setValueTwo(e.target.value)}
				/>
                <button>Submit me!</button>
			</form>
		</div>
	)
}

export default ChildOne
