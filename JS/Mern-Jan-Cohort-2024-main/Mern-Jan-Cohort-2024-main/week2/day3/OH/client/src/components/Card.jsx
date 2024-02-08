import React from 'react'
import {useState} from 'react'

const Card = (props) => {
    const {image, alt, numbers} = props
    const [numnums, setNumnums] = useState(numbers)
    // visual of props 

    // const props = {
    //     image: './assest/charizard.webp',
    //     alt: "charizard"
    // }

  return (
    <div>
        <img src={image} alt={alt} />
        <p>{numnums}</p>
        {
            numnums.map( (num, index) => (
                <p key={index}>{num}</p>
            ) )
        }
    </div>
  )
}

export default Card