import "./App.css"

function App() {
	return (
		<>
			<form action="/process" method="post">
				<div className="form-group">
					<label style={{fontSize: "200px", color: "blue"}} htmlFor="email"> Email:</label>
					<input
						type="text"
						id="email"
						name="username"
						class="form-control"
					/>
				</div>
        {2*2}
			</form>
		</>
	)
}

export default App
