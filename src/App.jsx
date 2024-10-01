import { useState } from 'react'
import './App.css'
import GroundLevel from './GroundLevel/GroundLevel'
import Layout from './Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <GroundLevel />
    </Layout>
  )
}

export default App
