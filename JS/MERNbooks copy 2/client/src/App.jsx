import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./views/Home"
import React, { useState } from "react"
import BookDetails from "./views/BookDetails"
import BookForm from "./views/BookForm"
import Header from "./components/Header"
import BookUpdate from "./views/BookUpdate"
import NotFound from "./errors/NotFound"

import "./App.css"

function App() {
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
					<Route path="/books/:id/update" element={<BookUpdate />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
