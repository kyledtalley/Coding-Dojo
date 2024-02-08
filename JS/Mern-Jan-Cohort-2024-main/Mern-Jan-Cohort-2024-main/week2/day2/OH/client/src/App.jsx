import { useState } from 'react'
import Form from './components/Form'
import Result from './components/Result'
import './App.css'

function App() {
  const [words, setWords] = useState([])

  return (
    <>
      <Form words={words} setWords={setWords}/>
      <Result words={words} />
    </>
  )
}

export default App
