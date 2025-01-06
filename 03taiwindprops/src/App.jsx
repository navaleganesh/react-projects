import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
 
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4  '>Tailwind test</h1>
      <Card username = "Ganesh" btnText="Click me" url="https://images.pexels.com/photos/27200898/pexels-photo-27200898/free-photo-of-niels.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      <Card username = "RadhaKrishna" url="https://images.pexels.com/photos/4595294/pexels-photo-4595294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
    </>
  )
}

export default App
