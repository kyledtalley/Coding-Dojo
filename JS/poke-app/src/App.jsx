import React, { useState } from 'react'
import './App.css'
import PokePet from './components/PokePet'
import Magikarp from './assets/98112ad3218b93483b8a3f077b3b4ce1cc9be89d_00.gif'


const App = () => {
  return (
    <PokePet className = "Magikarp" src = {Magikarp} alt = "magikarp"/>
  )
}

export default App
