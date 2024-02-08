import React from 'react';
import '../assets/static/card.css'

const Card = (props) => {
  // const {image, name, trait, diet} = props
  const {image, dino} = props
  return (
    <div>
        <div className="card">
            <img src={image} alt={dino.name} />
            <h2>Name: {dino.name}</h2>
            <p>Diet: {dino.diet}</p>
            <p>Trait: {dino.trait}</p>
        </div>
        
        {/* <div className="card">
            <img src={image} alt={name} />
            <h2>Name: {name}</h2>
            <p>Diet: {diet}</p>
            <p>Trait: {trait}</p>
        </div> */}
    </div>
  )
}

export default Card