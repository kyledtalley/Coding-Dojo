import React from "react"
import Home from "./views/Home"
import NotFound from "./errors/NotFound"
import Header from "./components/Header"
import RecipeForm from "./views/RecipeForm"
import RecipeDetails from "./views/RecipeDetails"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RecipesProvider } from "./components/RecipesContext.jsx"
import Background from "./components/Background"
import RecipeUpdate from "./views/RecipeUpdate"
import "./App.css"

function App() {
	return (
		<>
			<Background />
			<BrowserRouter>
				<RecipesProvider>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/recipes/create"
							element={<RecipeForm />}
						/>
						<Route
							path="/recipes/:id/update"
							element={<RecipeUpdate />}
						/>
						<Route
							path="/recipes/:id/details"
							element={<RecipeDetails />}
						/>
						<Route path="*" element={<NotFound />} />
					</Routes>
				</RecipesProvider>
			</BrowserRouter>
		</>
	)
}

export default App
