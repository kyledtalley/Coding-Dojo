import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './views/Home'
import Pokedex from './views/Pokedex'
import Display from './views/Display'
import './App.css'

function App() {


  return (
    <div className='container'>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/pokedex" element={ <Pokedex/> }/>
          <Route path="/pokeDets/:pokeName" element={ <Display/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
