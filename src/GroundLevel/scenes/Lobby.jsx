import { useContext } from 'react';
import { Context } from '../../App';
import LobbyImage from '../../textures/lobby.png';

function Lobby({ changeScene }) {
    const { inventoryVisible } = useContext(Context);

    return (
        <div className={`container ${inventoryVisible ? 'blurred' : ''}`}>
            <div className="scenario">
                <img src={LobbyImage} className="scenarioImage" />
                <button className="pathWay pathReturn" onClick={() => changeScene('Reception')}></button>
                <button className="pathWay pathLobbyOne" onClick={() => changeScene('Office')}></button>
                <button className="pathWay pathLobbyTwo" onClick={() => changeScene('Breakroom')}></button>
            </div>
        </div>)
};

export default Lobby;