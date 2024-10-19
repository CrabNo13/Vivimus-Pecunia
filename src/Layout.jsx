import { useContext } from 'react';
import { Context } from './App';
import ProfileTab from './ui/ProfileTab';
import ProfileMenu from './ui/ProfileMenu';
import Hotbar from './ui/Hotbar';
import InteractionBox from './ui/InteractionBox';
import Inventory from './ui/Inventory';
import GroundLevel from './GroundLevel/GroundLevel';
import { Route, Routes } from 'react-router-dom';

function Layout() {
    const { interactionBoxVisible, profileMenuVisible, inventoryVisible } = useContext(Context);

    return (<>
        <ProfileTab />
        {profileMenuVisible && <ProfileMenu />}
        <Hotbar />
        {inventoryVisible && <Inventory />}
        {interactionBoxVisible && <InteractionBox />}
        <Routes>
            <Route path="/" element={<GroundLevel />} />
        </Routes>
    </>)
};

export default Layout;