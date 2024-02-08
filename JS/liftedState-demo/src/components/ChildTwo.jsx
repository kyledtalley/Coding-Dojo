import React from "react"

const ChildTwo = (props) => {
	const { liftedState } = props
	return (
		<div>
			<h1>Display</h1>
			{liftedState.map((item, index) => (
				<div key={index}>
					<p>{item.valueOne}</p>
					<p>{item.valueTwo}</p>
				</div>
			))}
		</div>
	)
}

export default ChildTwo
