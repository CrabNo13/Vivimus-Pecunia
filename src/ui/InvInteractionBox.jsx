import { useContext } from "react";
import { Context } from "../App";
import { ItemsList } from "../ItemsList";

function InvInteractionBox({ selectedItem, setSelectedItem }) {
    const { equippedItem, setEquippedItem, playerInventory, modifyPlayerInventory } = useContext(Context);

    const itemObject = ItemsList[selectedItem];

    const handleEquip = () => {
        setEquippedItem(selectedItem);
        setSelectedItem(null);
    };
    const handleDelete = () => {
        modifyPlayerInventory(playerInventory.filter(i => i !== selectedItem));
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
            <div className="invInteractionButtons">
                <button className="invButton" onClick={handleEquip}>Equip</button>
                <button className="invButton" onClick={handleDelete}>Delete</button>
                {itemObject.isConsumable && <button className="invButton" onClick={handleConsume}>Use</button>}
                <button className="invButton" onClick={handleClose}>Close</button>
            </div>
        </div>
    )
}

export default InvInteractionBox;