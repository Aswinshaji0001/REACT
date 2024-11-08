import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About'
import Details from './Components/Details'


function App() {

  return (

    <BrowserRouter>
        <Nav/>
      <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/details/:id" Component={Details}/>
      </Routes>
    </BrowserRouter>

  
  )
}

export default App
