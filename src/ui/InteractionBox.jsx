import { useContext, useEffect } from "react";
import { Context } from "../App";
import { ItemsList } from '../ItemsList';

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
};

export default InteractionBox;