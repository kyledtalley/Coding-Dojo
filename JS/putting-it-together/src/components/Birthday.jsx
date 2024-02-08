import React, {useState} from "react"

const Birthday = (props) => {
	const { firstName, lastName, baseAge, hair } = props

	const [age, setAge] = useState(baseAge)

	const happyBirthday = (currentAge) => {
		setAge(Number(currentAge) + 1)
	}

	return (
		<>
			<h1>
				{lastName}, {firstName}
			</h1>
            <h3>Age: {age} </h3>
            <h3>Hair Color: {hair}</h3>
			<button onClick = {() => setAge((Number(age)+1))}>Happy Birthday!</button>
		</>
	)
}

export default Birthday
