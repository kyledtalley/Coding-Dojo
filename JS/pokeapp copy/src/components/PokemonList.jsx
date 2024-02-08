import React from 'react'

const PokemonList = ({pokemon}) => {
  return (
    <div>
    {pokemon.map(pokemon=> (
        <div key = {pokemon}>{pokemon.name} </div>
    ))}
    </div>
  )
}

export default PokemonList
