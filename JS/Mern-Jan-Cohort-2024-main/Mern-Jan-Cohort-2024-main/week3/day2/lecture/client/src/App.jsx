import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import Form from './components/Form'

function App() {
  // const [content, setContent] = useState("")
  const [recipes, setRecipes] = useState([])
  

  return (
    <>
      <Form recipes={recipes} setRecipes={setRecipes}/>
      <Display recipes={recipes} setRecipes={setRecipes}/>
    </>
  )
}

export default App
