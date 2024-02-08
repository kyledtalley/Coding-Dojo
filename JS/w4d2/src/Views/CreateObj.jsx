import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const CreateObj = () => {

    const navigate = useNavigate();
	const [username, setUsername] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/")
    }
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="username"
					onChange={() => setUsername(e.target.value)}
				/>
                <button>Submit</button>
			</form>
		</div>
	)
}

export default CreateObj
