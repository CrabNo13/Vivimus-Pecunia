import { useContext } from "react";
import { Context } from "../App";
import { getImage } from '../textures/ImageMaps';

function Hotbar() {
    const { equippedItem, inventoryVisible, setInventoryVisible } = useContext(Context);

    const image = getImage(equippedItem);

    const handleHotbarClick = (event) => {
        event.stopPropagation();
        setInventoryVisible(!inventoryVisible);
    }

    return <div className="hotbar">
        <button className="inventoryButton" onClick={handleHotbarClick}></button>
        <div className="equippedItem">
            <img className="equippedItemImage" src={image} />
        </div>
    </div>
};

export default Hotbar;