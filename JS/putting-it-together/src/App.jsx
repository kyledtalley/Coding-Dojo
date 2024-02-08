import React from 'react'
import {useState} from 'react'
import Birthday from './components/Birthday.jsx'
import "./App.css"

function App(){

  const [age, setAge] = useState("")

  return (
    <>

      <Birthday firstName = "Kyle" lastName = "Talley" baseAge = "27" hair = "Blonde" />
      <Birthday firstName = "Marco" lastName = "Polo" baseAge = "72" hair = "Black" />
      <Birthday firstName = "Valerie" lastName = "Talley" baseAge = "61" hair = "Brunette" />
      <Birthday firstName = "Paul" lastName = "Talley" baseAge = "62" hair = "Blonde" />
      <Birthday firstName = "Ryan" lastName = "Talley" baseAge = "29" hair = "Blonde" />
      <Birthday firstName = "Hunter" lastName = "Talley" baseAge = "10" hair = "Blonde" />
    </>
  )
}

export default App
