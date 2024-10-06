import ProfilePic from './textures/cat_profile.png';
import { useState, useContext, useEffect } from 'react';
import { Context } from './App';
import { getImage } from './textures/ImageMaps'

function Layout({ children }) {
    const [inventoryVisible, setInventoryVisible] = useState(false);
    const { interactionBoxVisible } = useContext(Context);

    return (<>
        <Profile />
        <Settings />
        <Hotbar inventoryVisible={inventoryVisible} setInventoryVisible={setInventoryVisible} />
        {inventoryVisible && <Inventory setInventoryVisible={setInventoryVisible} />}
        {interactionBoxVisible && <InteractionBox />}
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

function Hotbar({ inventoryVisible, setInventoryVisible }) {
    const { equippedItem } = useContext(Context);

    const image = getImage(equippedItem.id);

    const handleHotbarClick = (event) => {
        event.stopPropagation();
        setInventoryVisible(!inventoryVisible);
    }

    return <button className="hotbar" onClick={handleHotbarClick}><img src={image} style={{ height: '90px', width: '90px', imageRendering: 'pixelated' }} /></button>
};

function Inventory({ setInventoryVisible }) {
    const { items, modifyItem } = useContext(Context);
    const [hoveredItem, setHoveredItem] = useState(null);

    const hotbarElement = document.querySelector('.hotbar');

    const handleClickOutside = (event) => {
        if (!event.target.closest('.inventory') &&
            hotbarElement &&
            !hotbarElement.contains(event.target)) {
            setInventoryVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return <>
        <div className="inventory">
            {items.map((item) => (
                <div className="inventoryItem"
                    onMouseEnter={() => { setHoveredItem(item) }} onMouseLeave={() => { setHoveredItem(null) }}>
                    {item.name}
                </div>
            ))}
        </div>
        {hoveredItem && (<div className="hoverBox">
            <h1>{hoveredItem.name}</h1>
            <p>{hoveredItem.description}</p>
            <p>This is a dummy text that will later be filled with useful item information...</p>
        </div>)}
    </>
};

function InteractionBox() {
    const { interactionItem, setInteractionBoxVisible, items, modifyItem } = useContext(Context);

    const objectPickup = () => {
        modifyItem([...items, interactionItem]);
        setInteractionBoxVisible(false);
    }

    const handleClickOutside = (event) => {
        if (!event.target.closest('.interactionBox')) {
            setInteractionBoxVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return <div className="interactionBox"><h1>{interactionItem.name}</h1> <br /> <p>{interactionItem.description}</p> <br />
        <button onClick={objectPickup}>pick up item</button>
    </div>;
}

export default Layout;