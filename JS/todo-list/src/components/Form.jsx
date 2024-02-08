import React, { useState } from "react"


const Form = (props) => {
	const { stateUpdater, liftedState, setLiftedState } = props
	const [todo, setTodo] = useState("")

	const [completed, setCompleted] = useState(false)

	const submitHandler = (e) => {
		e.preventDefault()
		let newTodo = {
			todo,
            completed
		}
		setLiftedState(newTodo)
		stateUpdater(liftedState)
		setTodo([])

	}

    // const handleCheck = (cb) =>{

    //     cb = cb.checked ? true : false
    //     setCompleted(cb)
    //     console.log(cb);
    // }

	return (
		<div>
			<h1>To-Do List</h1>
			<form onSubmit={submitHandler}>
				<div className = "getDone">
					<label>What do you need to get done?</label>
					<input
						type="text"
						value={todo}
						onChange={(e) => setTodo(e.target.value)}
					/>
				</div>
				<div>
					<label>Is this task already completed?</label>
					<input
						type="checkbox"
						checked={completed}
						onChange={(e) => setCompleted(e.target.checked)}
					/>
				</div>
				<div>
					<button>Submit to list!</button>
				</div>
			</form>
		</div>
	)
}

export default Form
