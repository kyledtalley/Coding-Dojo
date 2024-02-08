import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import CreateObj from './Views/CreateObj'
import HomePage from './Views/HomePage'
import Header from './components/Header'
import Display from './Views/Display'

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <HomePage /> }/>
          <Route path="/create" element={ <CreateObj /> }/>
          <Route path="/display/:username" element={ <Display /> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
