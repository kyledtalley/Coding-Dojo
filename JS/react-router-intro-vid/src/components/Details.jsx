import React from 'react'
import { useParams } from 'react-router-dom'



const Details = (props) => {

    const {paramOne, paramTwo} = useParams()




  return (
    <div>

        <h1>{paramOne}'s Details</h1>
        <p>First name: {paramOne}</p>
        <p>Last name: {paramTwo}</p>

    </div>
  )
}

export default Details
