import { useContext } from 'react'
import ReceptionImage from '../../textures/reception.png'
import { Context } from '../../App'
import { getImage } from '../../textures/ImageMaps';

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
                <button className="pathWay pathReceptionTwo" onClick={() => changeScene('Restroom')}></button>
                <Apple handleItemClick={handleItemClick} />
            </div>
        </div>
    )
};

function Apple({ handleItemClick }) {

    const item = 3;

    return <button className='item apple' onClick={() => handleItemClick(item)}>
        <img className='itemImage' src={getImage(3)} />
    </button>
}

export default Reception;