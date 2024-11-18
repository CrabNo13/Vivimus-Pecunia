import { useContext } from 'react';
import ReceptionImage from '../../textures/reception.png';
import { Context } from '../../App';
import imageMap from '../../textures/ImageMaps';
import bell from '../../sounds/bellSound.mp3';

function Reception({ changeScene }) {
    const { setInteractionBoxVisible, setInteractionItem, inventoryVisible } = useContext(Context);

    const bellSound = new Audio(bell)

    function playSoundBell() {
        bellSound.play();
    }

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
                <Bell playSoundBell={playSoundBell} />
                <Apple handleItemClick={handleItemClick} />
            </div>
        </div>
    )
};

function Apple({ handleItemClick }) {

    const item = 3;

    return <button className='item apple' onClick={() => handleItemClick(item)}>
        <img className='itemImage' src={imageMap[item]} />
    </button>
}

function Bell({ playSoundBell }) {
    return <button className='item bell' onClick={playSoundBell}>
        <img className='itemImage' src={imageMap[7]} />
    </button>
}

export default Reception;