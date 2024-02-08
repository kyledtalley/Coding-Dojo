import {React, useState} from 'react'
import Magikarp from '../assets/clear_magikarp.webp'
import { motion } from 'framer-motion'

const PokePet = (props) => {
    const [hp, setHp] = useState(100)
    const [hungry, setHungry] = useState(0)
    const [scale, setScale] = useState(1)
    const [move, setMove] = useState(false)

    const hungryHandler = () => {
        setHungry(hungry + 25)
        setScale(scale + 1)
    }

    const hpHandler = () => {
        hp <= 0 || hp == "Fried Fish" ? setHp("Fried Fish") : setHp(hp - 25)
        setMove(!move)
    }

  return (
    <div className='pokeBall'>
        <div className='statsBox'>
            <h2>Stats</h2>
            <p>Hp: {hp}</p>
            <p>Hungry: {hungry}</p>
        </div>
        <motion.img 
            animate = {{ scale: scale, x: move ? 200 : -200 }}
            transition = {{ type : "spring", bounce: 1 }}
            className='petImg'
            src={Magikarp} 
            alt="magikarp"
        />
        <div className='buttonBox'>
            <button onClick={hungryHandler}>Feed</button>
            <button>Pet</button>
            <button>Run Away</button>
            <button onClick={hpHandler}>Splash Attack</button>
        </div>
    </div>
  )
}

export default PokePet