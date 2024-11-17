import { useContext } from 'react';
import { Context } from '../../App';
import LobbyImage from '../../textures/lobby.png';
import { getImage } from '../../textures/ImageMaps';

function Lobby({ changeScene }) {
    const { inventoryVisible, setInteractionItem, setInteractionBoxVisible } = useContext(Context);

    const handleItemClick = (item) => {
        setInteractionItem(item);
        setInteractionBoxVisible(true);
    };

    return (
        <div className={`container ${inventoryVisible ? 'blurred' : ''}`}>
            <div className="scenario">
                <img src={LobbyImage} className="scenarioImage" />
                <button className="pathWay pathReturn" onClick={() => changeScene('Reception')}></button>
                <button className="pathWay pathLobbyOne" onClick={() => changeScene('Office')}></button>
                <button className="pathWay pathLobbyTwo" onClick={() => changeScene('Breakroom')}></button>
                <MugOne handleItemClick={handleItemClick} />
            </div>
        </div>)
};

function MugOne({ handleItemClick }) {

    const item = 2;


    return <button className='item mugOne' onClick={() => handleItemClick(item)}>
        <img className='itemImage' src={getImage(2)} />
    </button>
}

export default Lobby;