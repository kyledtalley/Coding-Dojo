import { useState } from "react"
import "./App.css"

function App() {
	const [count, setCount] = useState(0)
	const [display, setDisplay] = useState("")

	return (
		<>
			<button onClick={() => setCount(count + 1)}>
				I add one to state
			</button>
      <p>{count}</p>

			<input onChange={(e) => setDisplay(e.target.value)} />
			<p>Displaying variable: {display}</p>


		</>
	)
}

export default App
