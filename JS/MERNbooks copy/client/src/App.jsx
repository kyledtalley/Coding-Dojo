import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./views/Home"
import React, {useState} from "react"
import BookDetails from "./views/BookDetails"
import BookForm from "./views/BookForm"
import Header from "./components/Header"
import "./App.css"

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<BrowserRouter>
			<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/books/create" element={<BookForm />} />
					<Route
						path="/books/:id/details"
						element={<BookDetails />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
