import React from "react"
import { useParams } from "react-router-dom"

const DisplayNumber = (props) => {
	const { param, color, background } = useParams()
	const myStyle = {
		border: "solid 2px black",
		color: color,
		backgroundColor: background,
	}

	return (
		<>
			{isNaN(+param) ? (
				<h1 style={myStyle}>The word of the day is {param}!</h1>
			) : (
				<h1 style={myStyle}>The number of the day is: {param}</h1>
			)}
		</>
	)
}

export default DisplayNumber
