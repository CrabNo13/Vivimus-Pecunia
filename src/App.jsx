import React, { useState } from 'react';
import './App.css';
import GroundLevel from './GroundLevel/GroundLevel';
import Layout from './Layout';

export const Context = React.createContext();

function App() {
  const [playerItems, modifyPlayerItems] = useState([1, 2, 2, 2, 2, 2, 1])
  const [interactionBoxVisible, setInteractionBoxVisible] = useState(false);
  const [interactionItem, setInteractionItem] = useState(null);
  const [equippedItem, setEquippedItem] = useState({});

  return (
    <Context.Provider value={{ playerItems, modifyPlayerItems, interactionBoxVisible, setInteractionBoxVisible, interactionItem, setInteractionItem, equippedItem, setEquippedItem }} >
      <Layout>
        <GroundLevel />
      </Layout>
    </Context.Provider >
  )
}

export default App
