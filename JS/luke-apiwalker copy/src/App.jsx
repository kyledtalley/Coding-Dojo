import Reac, { useState , useEffect} from 'react'
import axios from 'axios'
import './App.css'



const App = () => {
  const [peopleData, setPeopleData] = useState([])
  const [planetData, setPlanetData] = useState([])
  const [url, setUrl] = useState("https://swapi.dev/api/people/")

  const getRes = async (res) => {
    res.map(async (item) =>{
      const result = await axios.get(item.url)
      console.log(result.data)
      setPeopleData((state) => {
        state = [...state, result.data]
        // state.sort((a,b) => (a.id > b.id ? 1:-1))
        return state
      })
    })
  }
  return (
    <>

    </>
  )
}

export default App
