import withLoader from './Hoc'
import BaseComponent from './BaseComponent'
import './App.css'
import { useEffect, useState } from 'react'
import Toast from './Toast'


const EnhancedDataDisplay=withLoader(BaseComponent)
function App() {
  const [data,setData]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setData(["item1","item2","item3"])
      setIsLoading(false)
    },2000)
  },[])
  return <EnhancedDataDisplay isLoading={isLoading} data={data} />
}

export default App
