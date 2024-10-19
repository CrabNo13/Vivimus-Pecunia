import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthPage from './AuthPage';
import ProtectedRoute from './ProtectedRoute';

export const Context = React.createContext();

function App() {
  const [playerItems, modifyPlayerItems] = useState([1, 2, 2, 2, 2, 2, 1])
  const [interactionBoxVisible, setInteractionBoxVisible] = useState(false);
  const [interactionItem, setInteractionItem] = useState(null);
  const [equippedItem, setEquippedItem] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inventoryVisible, setInventoryVisible] = useState(false);
  const [profileMenuVisible, setProfileMenuVisible] = useState(false);

  return (
    <Context.Provider value={{
      playerItems, modifyPlayerItems,
      interactionBoxVisible, setInteractionBoxVisible,
      interactionItem, setInteractionItem,
      equippedItem, setEquippedItem,
      isAuthenticated, setIsAuthenticated,
      inventoryVisible, setInventoryVisible,
      profileMenuVisible, setProfileMenuVisible
    }} >
      <Router>
        <Routes>
          <Route path="/authpage" element={<AuthPage />} />
          <Route path="*" element={<ProtectedRoute />} />
        </Routes>
      </Router>
    </Context.Provider >
  )
}

export default App
