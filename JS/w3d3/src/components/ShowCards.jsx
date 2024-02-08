import React, { useState } from "react"

const ShowCards = (props) => {
	const { cards, setCards } = props

    const destroy = (index) => {
        const newCards = cards.filter((item, idx) => idx !== index)
        setCards(newCards)
    }

	return (
		<div>
			<div>
				{cards.map((card, index) => (
					<div key = {index}>
						<img src={card.image} alt={card.name} />
						<div>
							<p>{card.name}</p>
							<p>{card.powerLvl}</p>
							<div>
								<p>{card.move}</p>
								<button onClick = {() =>destroy(index)}>Delete</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default ShowCards
