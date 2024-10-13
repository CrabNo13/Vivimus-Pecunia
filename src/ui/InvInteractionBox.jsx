import { useContext } from "react";
import { Context } from "../App";
import { ItemsList } from "../ItemsList";

function InvInteractionBox({ selectedItem, setSelectedItem }) {
    const { equippedItem, setEquippedItem, playerItems, modifyPlayerItems } = useContext(Context);

    const itemObject = ItemsList[selectedItem];

    const handleEquip = () => {
        setEquippedItem(selectedItem);
        setSelectedItem(null);
    };
    const handleDelete = () => {
        modifyPlayerItems(playerItems.filter(i => i !== selectedItem));
        setSelectedItem(null);
        if (equippedItem === selectedItem) {
            setEquippedItem(null);
        };
    };
    const handleConsume = () => {
        return null
    };
    const handleClose = () => {
        setSelectedItem(null);
    };

    return (
        <div className="invInteractionBox">
            <h1>{itemObject.name}</h1>
            <p>{itemObject.description}</p>
            <button onClick={handleEquip}>Equip</button>
            <button onClick={handleDelete}>Delete</button>
            {itemObject.isConsumable && <button onClick={handleConsume}>Use</button>}
            <button onClick={handleClose}>Close</button>
        </div>
    )
}

export default InvInteractionBox;