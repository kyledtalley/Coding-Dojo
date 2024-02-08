import React from 'react'

const Card = (props) => {

    const{children} = props
  return (
    <div classname = "card">
        <div className = "card-content">{children}</div>
    </div>
  )
}

export default Card
