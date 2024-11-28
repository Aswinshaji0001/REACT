import { Suspense,lazy } from 'react'
import './App.css' 
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  let Ch1=lazy(()=>setData(import('./Child1')))
  let Ch2=lazy(()=>setData(import('./Child2')))


  return (
    <>
     <BrowserRouter>
        <Suspense fallback={<h1>Loading ...</h1>}>
        <Routes>
            <Route path="/" element={<Ch1/>}/>
            <Route path="/child2" element={<Ch2/>}/>
        </Routes>
        </Suspense>
     </BrowserRouter>
    </>
  )
}

export default App

async function setData(comp) {
  await new Promise((res)=>setTimeout(res,3000))
  return comp
}