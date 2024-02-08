import React from "react"

const Display = ({ holidays, isActive }) => {
	// const holidayCard = {
	// 	border: "5px solid green",
	// 	height: "500px",
	// 	width: "500px",
  //   backgroundImage: `${isActive.image}`
	// }

	return (
		<div>
			<div className="holidayCard">
				<img popovertarget = "holidayImage" className="holidayImage" src={isActive.image} alt="" />
				<h2 popover id = "holidayImage">{isActive.holiday}</h2>
				<h2 popover id = "holidayImage">{isActive.content}</h2>
			</div>
		</div>
	)
}

export default Display
