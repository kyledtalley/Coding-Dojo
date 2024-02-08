import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import Form from './components/Form'

function App() {
  const [content, setContent] = useState("")
  

  return (
    <>
      <Form content={content} setContent={setContent}/>
      <Display content={content}/>
    </>
  )
}

export default App
