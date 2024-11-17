import { useContext } from 'react';
import { Context } from '../../App';
import OfficeImage from '../../textures/office.png';
import { getImage } from '../../textures/ImageMaps';

function Office({ changeScene }) {
    const { inventoryVisible, setInteractionItem, setInteractionBoxVisible } = useContext(Context);

    const handleItemClick = (item) => {
        setInteractionItem(item);
        setInteractionBoxVisible(true);
    };

    return (
        <div className={`container ${inventoryVisible ? 'blurred' : ''}`}>
            <div className="scenario">
                <img src={OfficeImage} className="scenarioImage" />
                <button className="pathWay pathReturn" onClick={() => changeScene('Lobby')}></button>
                <button className="pathWay pathOfficeOne" onClick={() => changeScene('Meetingroom')}></button>
                <Pencil handleItemClick={handleItemClick} />
            </div>
        </div>
    )
};

function Pencil({ handleItemClick }) {

    const item = 4;


    return <button className='item pencil' onClick={() => handleItemClick(item)}>
        <img className='itemImage' src={getImage(4)} />
    </button>
}

export default Office;