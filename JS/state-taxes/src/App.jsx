import React from "react"
import Calculation from "./components/Calculation.jsx"
import "./App.css"

function App() {


	return (
		<>
			<Calculation state="California" salesTax={0.725} />
			<Calculation state="New York" salesTax={0.04} />
			<Calculation state="Texas" salesTax={0.0625} />
		</>
	)
}

export default App
