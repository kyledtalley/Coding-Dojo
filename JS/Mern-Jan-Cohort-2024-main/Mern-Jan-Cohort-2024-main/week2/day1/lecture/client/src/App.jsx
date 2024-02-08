import { useState } from 'react'
import Card from './components/Card'
import './App.css'
// import dinoScreech from './assets/images/dinoScreech.jpg'
import Yoshi  from './assets/images/rex.jpg'
import Earl  from './assets/images/rex_fam.jpg'

function App() {
    const dinos = [
    {
      name: 'Screech',
      diet: 'Potatoes',
      trait: 'Loves pets'
    },
    {
      name: 'Yoshi',
      diet: 'Turtle shells',
      trait: 'Loves to Jump'
    },
    {
      name: 'Earl',
      diet: 'Vegan',
      trait: 'Tree pusher'
    },
  ]

  
  return (
    <>
      <div className='row'>

        {
          dinos.map( (dino, index) => (
            <div key={index}>
              <Card image={Yoshi} dino={dino}/>
            </div>
          ))
        }

        
      {/* <Card image={Yoshi} dino = {dinos[0]}/>
      <Card image={Earl} dino = {dinos[1]}/>
      <Card image={Yoshi} dino = {dinos[2]}/> */}

      

        {/* <Card image={Yoshi} name="Screech" diet="Potatoes" trait="Loves pets" />
        <Card image={Earl} name="Earl" diet="Vegan" trait="Chops trees down"/>
        <Card image={Yoshi} name="dilophoasaurous" diet="pizza" trait="Gym Bro"/> */}
      </div>
    </>
  )
}

export default App
