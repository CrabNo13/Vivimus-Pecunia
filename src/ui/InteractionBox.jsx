import { useContext, useEffect, useState } from "react";
import { Context } from "../App";
import { ItemsList } from '../ItemsList';

function InteractionBox() {
    const { interactionItem, setInteractionItem, setInteractionBoxVisible, playerItems, modifyPlayerItems } = useContext(Context);
    const [dialogue, setDialogue] = useState(null);

    const objectPickup = () => {
        if (!playerItems.includes(interactionItem)) {
            modifyPlayerItems([...playerItems, interactionItem]);
            setInteractionBoxVisible(false);
        } else {
            setDialogue('I already have that');
            setInteractionItem(null);
        }
    }

    const objectInspection = () => {
        setDialogue(ItemsList[interactionItem].inspection);
        setInteractionItem(null);
    }

    const handleClickOutside = (event) => {
        if (!event.target.closest('.interactionBox')) {
            setInteractionBoxVisible(false);
            setInteractionItem(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return <div className="interactionBox">
        {interactionItem && (<h1 className="interactionTitle">{ItemsList[interactionItem].name}</h1>)}
        {dialogue && <p className="interactionText">{dialogue}</p>}
        {interactionItem && (<button className="interactionButton" onClick={objectPickup}>pick up</button>)}
        {interactionItem && (<button className="interactionButton" onClick={objectInspection}>examine</button>)}
    </div>
};

export default InteractionBox;