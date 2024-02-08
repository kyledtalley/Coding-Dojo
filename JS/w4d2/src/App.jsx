import React, { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import CreateObj from "./Views/CreateObj"
import HomePage from "./Views/HomePage"
import Header from "./components/Header"

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/create" element={<CreateObj />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
