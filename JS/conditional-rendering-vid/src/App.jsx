import React, { useState } from "react"
import "./App.css"

const App = () => {
	const [stylePicker, setStylePicker] = useState("")

	const styleHandler = (style) => {
		switch (style.length) {
			case 0:
				return "lightMode"
			case 1:
				return "darkMode"
			case 2:
				return "redMode"
			case 3:
				return "blueMode"
			case 4:
				return "pinkMode"
		}
	}
	return (
		<div className={styleHandler(stylePicker)}>
			<h1>Watch me change</h1>
			<input
				type="text"
				onChange={(e) => setStylePicker(e.target.value)}
			/>
		</div>
	)
}

export default App
