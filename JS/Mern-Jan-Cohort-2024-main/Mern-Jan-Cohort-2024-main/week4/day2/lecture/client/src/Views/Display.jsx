import React from 'react'
import { useParams } from 'react-router-dom'

const Display = (props) => {
    const { username } = useParams()
  return (
    <div>
        <h2>{ username }</h2>
    </div>
  )
}

export default Display