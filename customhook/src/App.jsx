
import './App.scss'
import useCustomHook from './useCustomHook'
function App() {

  const {val,increment,decrement}=useCustomHook(0)
  return (
    <>
        <div className='container'>
          <button className='btn1' onClick={increment}>+</button>
          <span>{val}</span>
          <button className='btn2' onClick={decrement}>-</button>

        </div>
    </>
  )
}

export default App
