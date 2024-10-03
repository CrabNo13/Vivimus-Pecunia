import ProfilePic from './textures/cat_profile.png';
import { useState, useContext } from 'react';
import { Context } from './App';

function Layout({ children }) {
    const [inventoryVisibility, setInvVisibility] = useState(false);

    return (<>
        <Profile />
        <Settings />
        <Hotbar inventoryVisibility={inventoryVisibility} setInvVisibility={setInvVisibility} />
        {inventoryVisibility && <Inventory />}
        {children}
    </>)
};

function Profile() {
    return (
        <button style={{ position: "fixed" }}>
            <img src={ProfilePic} style={{ width: "90px", height: "90px" }} />
            <div>UserName</div>
        </button>
    )
};

function Settings() {
    return <button className='settingsButton' />
};

function Hotbar({ inventoryVisibility, setInvVisibility }) {
    return <button className="hotbar" onClick={() => { setInvVisibility(!inventoryVisibility) }}></button>
};

function Inventory() {
    const [items, modifyItem] = useContext(Context)

    return <div className="inventory">
        {items.map((item) => (
            <div>
                {item.name}
            </div>
        ))}
    </div>
}

export default Layout;