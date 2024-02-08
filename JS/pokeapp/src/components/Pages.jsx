import React from "react"

function Pages({ goToNextPage, goToPrevPage }) {
	return (
		<div>
			{goToPrevPage && <button onClick={goToPrevPage}>Previous</button>}
			{goToNextPage && <button onClick={goToNextPage}>Next</button>}
		</div>
	)
}

export default Pages
