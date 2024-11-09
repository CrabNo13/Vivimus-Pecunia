import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthPage from './AuthPage';
import ProtectedRoute from './ProtectedRoute';

export const Context = React.createContext();

function App() {
  const [userData, setUserData] = useState(null);
  const [playerInventory, modifyPlayerInventory] = useState([]);
  const [playerXp, modifyPlayerXp] = useState(0);
  const [interactionBoxVisible, setInteractionBoxVisible] = useState(false);
  const [interactionItem, setInteractionItem] = useState(null);
  const [equippedItem, setEquippedItem] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inventoryVisible, setInventoryVisible] = useState(false);
  const [profileMenuVisible, setProfileMenuVisible] = useState(false);
  const [interactionAction, setInteractionAction] = useState(0);

  return (
    <Context.Provider value={{
      userData, setUserData,
      playerInventory, modifyPlayerInventory,
      playerXp, modifyPlayerXp,
      interactionBoxVisible, setInteractionBoxVisible,
      interactionItem, setInteractionItem,
      equippedItem, setEquippedItem,
      isAuthenticated, setIsAuthenticated,
      inventoryVisible, setInventoryVisible,
      profileMenuVisible, setProfileMenuVisible,
      interactionAction, setInteractionAction
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
