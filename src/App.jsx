import React, { useState } from 'react';
import './App.css';
import GroundLevel from './GroundLevel/GroundLevel';
import Layout from './Layout';

export const Context = React.createContext();

function App() {
  const [items, modifyItem] = useState([{ id: 1, name: 'key', img: './textures/apple.png', description: 'This key opens amazing chests ahead' }, { id: 2, name: 'thing', img: './textures./apple.png', description: 'Just a thing. Nothing more, nothing less' }])
  const [interactionBoxVisible, setInteractionBoxVisible] = useState(false);
  const [interactionItem, setInteractionItem] = useState(null)

  return (
    <Context.Provider value={{ items, modifyItem, interactionBoxVisible, setInteractionBoxVisible, interactionItem, setInteractionItem }} >
      <Layout>
        <GroundLevel />
      </Layout>
    </Context.Provider >
  )
}

export default App
