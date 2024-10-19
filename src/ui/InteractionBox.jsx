import { useContext, useEffect } from "react";
import { Context } from "../App";
import { ItemsList } from '../ItemsList';

function InteractionBox() {
    const { interactionItem, setInteractionBoxVisible, playerItems, modifyPlayerItems } = useContext(Context);

    const objectPickup = () => {
        if (!playerItems.includes(interactionItem)) {
            modifyPlayerItems([...playerItems, interactionItem]);
        } else {
            alert("You already have this item!")
        }
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

    return <div className="interactionBox">
        <h1>{ItemsList[interactionItem].name}</h1>
        <button onClick={objectPickup}>pick up</button>
        <button>examine</button>
    </div>;
};

export default InteractionBox;