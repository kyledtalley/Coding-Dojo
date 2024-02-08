import {React, useState} from 'react'

const Result = (props) => {
  const {words} = props
  const [filter, setFilter] = useState("")


  const handleFilter = (e) => {
    e.preventDefault()
    let filtered = words.filter((word) => {
      console.log(filter)
      return word.includes(filter)
    })
    console.log(filtered)
  }

  return (
    <div>
        <div>
          <form onSubmit={handleFilter}>
            <label htmlFor="">Enter filter</label>
            <input type="text" onChange={(e) => setFilter(e.target.value)}/>
            <button>Filter</button>
          </form>
        </div>
        {
          words.map( (word, index) => (
            <div key={index}>
              <p>{word}</p>
            </div>
          ) )
        }

    </div>
  )
}

export default Result