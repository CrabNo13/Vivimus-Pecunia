import { useContext } from 'react'
import ReceptionImage from '../../textures/reception.png'
import { Context } from '../../App'

function Reception({ changeScene }) {
    const { setInteractionBoxVisible, setInteractionItem, inventoryVisible } = useContext(Context);

    const handleItemClick = (item) => {
        setInteractionItem(item);
        setInteractionBoxVisible(true);
    };

    return (
        <div className={`container ${inventoryVisible ? 'blurred' : ''}`}>
            <div className="scenario">
                <img src={ReceptionImage} className="scenarioImage" />
                <button className="pathWay pathReceptionOne" onClick={() => changeScene('Lobby')}></button>
                <Apple handleItemClick={handleItemClick} />
            </div>
        </div>
    )
};

function Apple({ handleItemClick }) {

    const item = 3;


    return <button className='apple' onClick={() => handleItemClick(item)}>
    </button>
}

export default Reception;