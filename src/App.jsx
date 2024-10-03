import React, { useState } from 'react';
import './App.css';
import GroundLevel from './GroundLevel/GroundLevel';
import Layout from './Layout';

export const Context = React.createContext();

function App() {
  const [items, modifyItem] = useState([{ id: 1, name: 'key' }, { id: 2, name: 'thing' }])

  return (
    <Context.Provider value={[items, modifyItem]} >
      <Layout>
        <GroundLevel />
      </Layout>
    </Context.Provider >
  )
}

export default App
