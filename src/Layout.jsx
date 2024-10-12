import ProfilePic from './textures/cat_profile.png';
import { useState, useContext, useEffect } from 'react';
import { Context } from './App';
import { getImage } from './textures/ImageMaps';
import { ItemsList } from './ItemsList';
import InvInteractionBox from './inventory/InvInteractionBox';

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

    const image = getImage(equippedItem);

    const handleHotbarClick = (event) => {
        event.stopPropagation();
        setInventoryVisible(!inventoryVisible);
    }

    return <div className="hotbar">
        <button className="inventoryButton" onClick={handleHotbarClick}></button>
        <button className="equippedItem">
            <img src={image} style={{ height: '90px', width: '90px', imageRendering: 'pixelated' }} />
        </button>
    </div>
};

function Inventory({ setInventoryVisible }) {
    const { playerItems } = useContext(Context);
    const [selectedItem, setSelectedItem] = useState(null);

    const inventoryButtonElement = document.querySelector('.inventoryButton');

    {/*The following code makes it so when you click outside the inventory or interaction boxes, the inventory ui closes. I don't know how it works, I don't wanna know how it works, but just don't touch it since it will break.*/ }
    const handleClickOutside = (event) => {
        if (!event.target.closest('.inventoryUi') &&
            inventoryButtonElement &&
            !inventoryButtonElement.contains(event.target)) {
            setInventoryVisible(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return <div className="inventoryUi">
        <div className="inventoryBox">
            {playerItems.map((itemId) => {
                const item = ItemsList[itemId]
                return (
                    <button className="inventoryItem" onClick={() => setSelectedItem(itemId)}>
                        {item.name}
                    </button>
                )
            })}
        </div>

        {selectedItem && <InvInteractionBox selectedItem={selectedItem} setSelectedItem={setSelectedItem} />}
    </div>
};

function InteractionBox() {
    const { interactionItem, setInteractionBoxVisible, playerItems, modifyPlayerItems } = useContext(Context);

    const objectPickup = () => {
        modifyPlayerItems([...playerItems, interactionItem]);
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

    return <div className="interactionBox"><h1>{ItemsList[interactionItem].name}</h1> <br /> <p>{ItemsList[interactionItem].description}</p> <br />
        <button onClick={objectPickup}>pick up item</button>
    </div>;
}

export default Layout;