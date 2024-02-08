import React from 'react'
import {Link} from "react-router-dom"
const About = (props) => {
  return (
    <>
        <div className = "menu">
            <Link to="/">Go to Home</Link>
        </div>
        <h1 className = "about">About Component</h1>
    </>
  )
}

export default About
