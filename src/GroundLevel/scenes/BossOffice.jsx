import { useContext } from 'react';
import BossOfficeImage from '../../textures/bossoffice.png';
import { Context } from '../../App';
import imageMap from '../../textures/ImageMaps';

function BossOffice({ changeScene }) {
    const { inventoryVisible, setInteractionItem, setInteractionBoxVisible } = useContext(Context);

    const handleItemClick = (item) => {
        setInteractionItem(item);
        setInteractionBoxVisible(true);
    };

    return (
        <div className={`container ${inventoryVisible ? 'blurred' : ''}`}>
            <div className="scenario">
                <img src={BossOfficeImage} className="scenarioImage" />
                <button className="pathWay pathReturn" onClick={() => changeScene('Meetingroom')}></button>
                <Coin handleItemClick={handleItemClick} />
            </div>
        </div>)
};

function Coin({ handleItemClick }) {

    const item = 8;


    return <button className='item coin' onClick={() => handleItemClick(item)}>
        <img className='itemImage' src={imageMap[item]} />
    </button>
}

export default BossOffice;