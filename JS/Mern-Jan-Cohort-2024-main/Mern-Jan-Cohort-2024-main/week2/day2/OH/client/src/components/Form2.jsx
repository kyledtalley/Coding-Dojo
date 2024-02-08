import {React, useState} from 'react'

const Form2 = (props) => {
  const {word, setWord} = props

  const submitHandler = (e) => {
    e.preventDefault()
    setWord("")
  }

  const handleChange = (e) => {
    setWord(e.target.value)
  }

  return (
    <div>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="">Palidrome Word:</label>
          </div>
          <div>
            <input type="text" value={word} onChange={handleChange}/>
          </div>
          <button>Submit</button>
        </form>
    </div>
  )
}

export default Form2