import React from "react"
import {Link} from "react-router-dom"

const Home = (props) => {
	return (
		<>
			<div className="menu">
				<Link to="/about">Go to About</Link>
			</div>

			<h1 className="home">Home component</h1>
		</>
	)
}

export default Home
