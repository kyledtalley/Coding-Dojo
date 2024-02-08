import { useState } from 'react'
import Display from './components/Display'
import Holidays from './components/Holidays'
import './App.css'

function App() {
  const [holidays, setHolidays] = useState([
    {
      holiday: "Halloween",
      content: "Happy Halloween!!"
    },
    {
      holiday: "Thankgiving",
      content: "Happy Thanksgiving!!"
    },
    {
      holiday: "St Patricks Day",
      content: "Happy St Patricks Day!!"
    }
  ])
  const [isActive, setIsActive] = useState({})
  
  return (
    <>
      <Holidays holidays={holidays} setHolidays={setHolidays} isActive={isActive} setIsActive={setIsActive}/>
      <Display holidays={holidays}/>
    </>
  )
}

export default App
