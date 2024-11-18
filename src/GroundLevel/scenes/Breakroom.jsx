import { useContext } from 'react';
import { Context } from '../../App';
import BreakroomImage from '../../textures/breakroom.png';
import { getImage } from '../../textures/ImageMaps';

function Breakroom({ changeScene }) {
    const { inventoryVisible, setInteractionItem, setInteractionBoxVisible, equippedItem, setInteractionAction } = useContext(Context);

    const handleItemClick = (item) => {
        setInteractionItem(item);
        setInteractionBoxVisible(true);
    };

    const handleMachineClick = (item) => {
        if (equippedItem === 8) {
            setInteractionItem(item);
            setInteractionBoxVisible(true);
        } else {
            setInteractionAction(5);
            setInteractionBoxVisible(true);
        }
    };

    return (
        <div className={`container ${inventoryVisible ? 'blurred' : ''}`}>
            <div className="scenario">
                <img src={BreakroomImage} className="scenarioImage" />
                <button className="pathWay pathReturn" onClick={() => changeScene('Lobby')}></button>
                <BossKey handleItemClick={handleItemClick} />
                <VendingMachine handleMachineClick={handleMachineClick} />
            </div>
        </div>)
};

function BossKey({ handleItemClick }) {

    const item = 1;


    return <button className='item bossKey' onClick={() => handleItemClick(item)}>
        <img className='itemImage' src={getImage(1)} />
    </button>
}

function VendingMachine({ handleMachineClick }) {
    const item = 5;

    return <button className='vendingMachine' onClick={() => handleMachineClick(item)}>
    </button>
}

export default Breakroom;