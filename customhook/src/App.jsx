
import './App.css'
import useCustomHook from './useCustomHook'
function App() {

  const {val,increment,decrement}=useCustomHook(0)
  return (
    <>
        <div>
          <button onClick={increment}>+</button>
          <span>{val}</span>
          <button onClick={decrement}>-</button>

        </div>
    </>
  )
}

export default App
