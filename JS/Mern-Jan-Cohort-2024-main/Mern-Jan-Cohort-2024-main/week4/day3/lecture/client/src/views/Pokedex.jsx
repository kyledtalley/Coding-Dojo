import {React, useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Pokedex = () => {
    const navigate = useNavigate()
    const [pokeData, setPokeData] = useState([])

    // useEffect( () => {
    //     axios.get('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
    //         .then( response => {
    //             console.log(response)
    //             setPokeData(response.data.results)
    //         } )
    //         .catch( error => {
    //             console.log(error)
    //         })
    // }, [])

    useEffect(() => {
        axios
          .get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
          .then((response) => {
            console.log(response)
            const pokeList = response.data.results;
            const promiseList = pokeList.map((pokemon) =>
              axios.get(pokemon.url).then((response) => ({
                name: pokemon.name,
                image: response.data.sprites['front_shiny'],
                pokemonUrl: pokemon.url
              }))
            );
      
            Promise.all(promiseList)
              .then((pokeDetails) => {
                setPokeData(pokeDetails);
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

    const handleClick = (pokeName) => {
        console.log(pokeName)
        navigate(`/pokeDets/${pokeName}`)
    }

  return (
    <div className='pokedexContainer'>
        {
            pokeData.map( (item, index) => (
                <div className='pokedexCard' key={index}>
                    <h2 className='pokeName'>{item.name}</h2>
                    <img onClick={() => handleClick(item.name)} className='pokeImg' src={item.image} alt={item.name} />
                </div>
        ))
        }
    </div>
  )
}

export default Pokedex