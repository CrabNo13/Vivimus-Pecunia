import { useContext } from "react";
import { Context } from "../App";
import { getImage } from '../textures/ImageMaps';

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

export default Hotbar;