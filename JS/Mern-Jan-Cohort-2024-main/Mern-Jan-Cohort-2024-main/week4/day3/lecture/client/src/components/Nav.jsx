import React from 'react'
import {Link} from 'react-router-dom'

const Nav = (props) => {
  return (
    <div className='navContainer'>
        <div>
            <h2>Pokemon Web App</h2>
        </div>
        <div>
            <ul className='navUl'>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/pokedex"}>Pokedex</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Nav