import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About'


function App() {

  return (

    <BrowserRouter>
        <Nav/>
      <Routes>
          <Route path="/home" Component={Home}/>
          <Route path="/about" Component={About}/>
      </Routes>
    </BrowserRouter>

  
  )
}

export default App
