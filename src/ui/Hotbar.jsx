import { useContext } from "react";
import { Context } from "../App";
import imageMap from "../textures/ImageMaps";

function Hotbar() {
    const { equippedItem, inventoryVisible, setInventoryVisible } = useContext(Context);

    const handleHotbarClick = (event) => {
        event.stopPropagation();
        setInventoryVisible(!inventoryVisible);
    }

    return <div className="hotbar">
        <button className="inventoryButton" onClick={handleHotbarClick}></button>
        <div className="equippedItem">
            {equippedItem && <img className="equippedItemImage" src={imageMap[equippedItem]} />}
        </div>
    </div>
};

export default Hotbar;