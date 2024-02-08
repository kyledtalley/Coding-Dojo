import React, { useState } from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Nav from './components/Nav'
import Pokedex from './views/Pokedex'
import Home from './views/Home'
const App = () => {
  return (
    <div>

      <BrowserRouter>

        <Nav/>
        <Routes>
          <Route path = "/" element = { <Home/> }/>
          <Route path = "/pokedex" element = { <Pokedex/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
