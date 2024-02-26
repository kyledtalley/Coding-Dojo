import React, {useState} from "react"

const Form = (props) => {
	const { stateUpdater } = props

    const [todo, setTodo] = useState("")
    const [completed, setCompleted] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault();

        let newValue = {
            todo,
            completed
        }
        stateUpdater(newValue)
    }

	return (
		<div className="form-container">
			<h1>To-Do List</h1>
            <form onSubmit = {submitHandler}>
                <label>To-Do Item: </label>
                <input type = "text" value = {todo} onChange = {(e) => setTodo(e.target.value)}/>
                <button>Submit!</button>
            </form>
		</div>
	)
}

export default Form
