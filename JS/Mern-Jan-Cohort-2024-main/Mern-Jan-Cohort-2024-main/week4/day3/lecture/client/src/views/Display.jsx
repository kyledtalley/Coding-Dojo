import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const Display = (props) => {
    const { pokeName } = useParams()
    const [pokemon, setPokemon] = useState({})

    useEffect( () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}/`)
            .then( (response) => {
                console.log(response.data.types)
                setPokemon({
                    name: response.data.name,
                    image: response.data.sprites.front_shiny,
                    types: response.data.types
                })
            })
            .catch( (error) => {
                console.log(error)
            })
    }, [] )

  return (
    <div className='pokeDetsContainer'>
            {/* <h2>PokeDets</h2> */}
        <div className='pokeDetsCard'>
            <h2 className='pokeDetsName'>{pokemon.name}</h2>
            <img className='pokeDetsImg' src={pokemon.image} alt={pokemon.name} />
            <div className='pokeTypes'>
                <p>Type:</p>
                {
                    pokemon.types && pokemon.types.map((item, index) => (
                        <p key={index}>{item.type.name}</p>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Display