import { useState } from 'react'
import './App.css'
import GroundLevel from './GroundLevel/GroundLevel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GroundLevel />
    </>
  )
}

export default App
