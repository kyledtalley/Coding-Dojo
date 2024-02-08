import React, { useState } from "react"
import Display from "./components/Display.jsx"
import Form from "./components/Form.jsx"
import './App.css'
const App = () => {
	// const [content, setContent] = useState("")
	const [recipes, setRecipes] = useState([])
	return (
		<>
			<Form recipes = {recipes} setRecipes = {setRecipes}/>
			<Display recipes = {recipes} setRecipes = {setRecipes}/>
		</>
	)
}

export default App
