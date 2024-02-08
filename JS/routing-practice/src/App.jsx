import React from "react"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import DisplayNumber from "./components/DisplayNumber"

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/:param/:color/:background"
						element={<DisplayNumber />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
