import React, { useState } from "react"

const List = (data) => {

	return (
		<div>
			<div className="name">
				{data.abilities.map((poke) => {
					return (
						<>
							<div className="group">
								<h2>{poke.ability.name}</h2>
							</div>
						</>
					)
				})}
			</div>
		</div>
	)
}

export default List
