import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Charizard from './assets/charizard.webp'
import Mew from './assets/mew.webp'

function App() {

  return (
    <>
      <Card image={Charizard} alt="charizard" numbers={[2,5,7,9]}/>
      <Card image={Mew} alt="mew" numbers={[33,22,77]}/>
    </>
  )
}

export default App
