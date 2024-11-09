import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../App";
import { ItemsList } from '../ItemsList';

function InteractionBox() {
    const { interactionItem, setInteractionItem,
        setInteractionBoxVisible,
        playerItems, modifyPlayerItems,
        interactionAction, setInteractionAction,
        userData
    } = useContext(Context);
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
            setInteractionItem(null);
            setInteractionAction(0)
            setInteractionBoxVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (interactionAction === 1) {
            setDialogue('Progress Saved!');
        } else if (interactionAction === 2) {
            setDialogue('Should I finish this day of work and go home?');
        } else if (interactionAction === 3) {
            setDialogue('Do I REALLY want to quit this job?');
        }
    }, [interactionAction]);

    const Keep = () => {
        setInteractionAction(0);
        setInteractionBoxVisible(false)
    };

    const Logout = async () => {
        try {
            await axios.post('http://localhost:5000/logout');
            localStorage.removeItem('authToken');
            window.location.href = '/authpage';
            setInteractionAction(0);
            setInteractionBoxVisible(false);
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    async function DeleteAccount() {
        try {
            const response = await axios.delete('http://localhost:5000/delete-account', {
                data: { userId: userData._id }
            });

            Logout();
        } catch (error) {
            console.error('Failed to delete account:', error);
        }
    }

    return <div className="interactionBox">
        {interactionItem && (<h1 className="interactionTitle">{ItemsList[interactionItem].name}</h1>)}
        {dialogue && <p className="interactionText">{dialogue}</p>}
        {interactionItem && (<button className="interactionButton" onClick={objectPickup}>pick up</button>)}
        {interactionItem && (<button className="interactionButton" onClick={objectInspection}>examine</button>)}
        {(interactionAction === 2) && (<button className="interactionButton" onClick={Logout}>end day of work (logout)</button>)}
        {(interactionAction === 3) && (<button className="interactionButton" onClick={DeleteAccount}>quit job (delete account)</button>)}
        {(interactionAction === 2 || interactionAction === 3) && (<button className="interactionButton" onClick={Keep}>keep working</button>)}
    </div>
};

export default InteractionBox;