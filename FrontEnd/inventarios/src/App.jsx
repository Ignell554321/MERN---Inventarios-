import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { increment,decrement,incrementBy } from './store/slices/counter'

function App() {


  const {counter}=  useSelector(state=>state.counter);
  const dispatch= useDispatch();

  return (
    <div className="App">

      <h1>Vite + React</h1>
      <div className="card">
        <button type='button' onClick={ ()=>dispatch(increment()) }>
          count is {counter}
        </button>

        <button type='button' onClick={ ()=>dispatch(decrement()) }>
          Decrement {counter}
        </button>

        <button type='button' onClick={ ()=>dispatch(incrementBy(2)) }>
          Increment by 2 {counter}
        </button>
      </div>
    </div>
  )
}

export default App
