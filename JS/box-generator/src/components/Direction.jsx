import React, { useState } from "react"

const Direction = () => {
	const [boxColorArray, setBoxColorArray] = useState([])
	const [color, setColor] = useState("")

    const submitHandler = (event) => {
        event.preventDefault();
        setBoxColorArray((prevBoxArray)=>[...prevBoxArray, color])
        setColor("");
    }

	return (
		<>
			<div className="formWrapper">
				<h1>BoxGenerator</h1>
				<form onSubmit={submitHandler}>
					<div className="inputContainer">
						<label htmlFor="color">Color</label>
						<input
							type="text"
							name="color"
							value={color}
							onChange={(e) => setColor(e.target.value)}
						/>
						<button>Add</button>
					</div>
				</form>
			</div>
			<div className="boxDisplay">
				{boxColorArray.map((color, index) => (
					<div
						key={index}
						style={{
							display: "inline-block",
							margin: "10px",
							height: "50px",
							width: "50px",
							backgroundColor: color,
						}}
					></div>
				))}
			</div>
		</>
	)
}

export default Direction
