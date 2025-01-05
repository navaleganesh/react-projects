import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)

  //let counter = 5 

  const addValue = () => {

    counter = counter + 1
    counter <= 10 ? setCounter(counter) : counter = 10
  }
  const removeValue = () => {

    counter = counter - 1
    counter >= 0 ? setCounter(counter) : counter = 0
  }


  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>Footer: {counter} </p>
    </>
  )
}

export default App
