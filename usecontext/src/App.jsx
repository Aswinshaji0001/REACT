import { useState } from 'react'
import ThemeProvider from './ThemeProvider'
import Header from './Header'
import Body from './Body'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <ThemeProvider>
          <Header/>
          <Body/>
        </ThemeProvider>
    </>
  )
}

export default App
