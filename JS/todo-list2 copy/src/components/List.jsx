import React from "react"

const List = (props) => {
	const { liftedState, updateState, deleteItem } = props

	const toggleCompletion = (index) => {
		const updatedState = liftedState.map((item, idx) =>
			idx === index ? { ...item, completed: !item.completed } : item
		)

		updateState(updatedState)
	}

	return (
		<div className = "todo-list-header">
			<h1>To-Do:</h1>
			{liftedState.map((item, index) => (
				<div className="todo-list-item" key={index}>
					<input
						type="checkbox"
						checked={item.completed}
						onChange={() => toggleCompletion(index)}
					/>
					<p className={item.completed ? "completed-item" : ""}>
						{item.todo}
					</p>
					<button onClick={() => deleteItem(index)}>Delete</button>
				</div>
			))}
		</div>
	)
}

export default List
