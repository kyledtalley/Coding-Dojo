import React, { useState } from "react"
import { motion } from "framer-motion"

const PokePet = (props) => {
	const [hp, setHp] = useState(100)
	const [hungry, setHungry] = useState(0)
	const [scale, setScale] = useState(1)
    const [move, setMove] = useState(false)
	const { className, src, alt } = props
	const hungryHandler = () => {
		setHungry(hungry + 25)
		setScale(scale + .4)
	}
	const splashHandler = () => {
		hp <= 0 || hp === "Fried Fish" ? setHp("Fried Fish") : setHp(hp - 20)
        setMove(!move)
	}

	return (
		<div className="pokeBall">
			<div className="statsBox">
				<h2>Stats</h2>
				<p>HP: {hp}</p>
				<p>Energy: {hungry}</p>
			</div>
			<motion.img

				animate={{ scale: scale }}
                // transition = {{ type: "spring", bounce: move ? 1 : -1}}
				className={className}

				src={src}
				alt={alt}
			/>
			<div className="buttonBox">
				<button onClick={hungryHandler}>Feed</button>
				<button>Pet</button>
				<button onClick={splashHandler}>Struggle</button>
				<button>Run Away</button>
			</div>
		</div>
	)
}

export default PokePet
