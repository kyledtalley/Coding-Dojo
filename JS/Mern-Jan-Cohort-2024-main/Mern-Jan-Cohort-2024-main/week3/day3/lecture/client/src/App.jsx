import { useState } from 'react'
import './App.css'
import ShowCards from './components/ShowCards'
import CreateCard from './components/CreateCard'

function App() {
  const [cards, setCards] = useState([])

  return (
    <>
      <CreateCard cards={cards} setCards={setCards} />
      <ShowCards cards={cards} setCards={setCards} />
    </>
  )
}

export default App
