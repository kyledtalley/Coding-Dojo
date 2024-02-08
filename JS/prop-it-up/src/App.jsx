import React from "react"

import PersonCard from "./components/PersonCard"
const App = () => {
	return (
		<div className="container">
			<div className="div1">
				<PersonCard
					firstName="Kyle"
					lastName="Talley"
					age="27"
					hairColor="Blonde"
				/>
			</div>
			<div className="div2">
				<PersonCard
					firstName="Ryan"
					lastName="Talley"
					age="29"
					hairColor="Blonde"
				/>
			</div>
			<div className="div3">
				<PersonCard
					firstName="Carlos"
					lastName="Moreno"
					age="26"
					hairColor="Black"
				/>
			</div>
			<div className="div4">
				<PersonCard
					firstName="Hunter"
					lastName="Talley"
					age="10"
					hairColor="Blonde"
				/>
			</div>
		</div>
	)
}

export default App
