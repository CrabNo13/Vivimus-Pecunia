import { useState, useContext } from 'react';
import { Context } from './App';
import ProfileTab from './ui/ProfileTab';
import ProfileMenu from './ui/ProfileMenu';
import Settings from './ui/Settings';
import Hotbar from './ui/Hotbar';
import InteractionBox from './ui/InteractionBox';
import Inventory from './ui/Inventory';

function Layout({ children }) {
    const { interactionBoxVisible } = useContext(Context);
    const [inventoryVisible, setInventoryVisible] = useState(false);
    const [profileMenuVisible, setProfileMenuVisible] = useState(false)

    return (<>
        <ProfileTab profileMenuVisible={profileMenuVisible} setProfileMenuVisible={setProfileMenuVisible} />
        {profileMenuVisible && <ProfileMenu setProfileMenuVisible={setProfileMenuVisible} />}
        <Settings />
        <Hotbar inventoryVisible={inventoryVisible} setInventoryVisible={setInventoryVisible} />
        {inventoryVisible && <Inventory setInventoryVisible={setInventoryVisible} />}
        {interactionBoxVisible && <InteractionBox />}
        {children}
    </>)
};

export default Layout;