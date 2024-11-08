import LobbyImage from '../../textures/lobby.png';

function Lobby({ changeScene }) {
    return (<div>
        <img src={LobbyImage} className="main" />
        <button className="pathWay pathReturn" onClick={() => changeScene('Reception')}></button>
        <button className="pathWay pathLobbyOne" onClick={() => changeScene('Office')}></button>
        <button className="pathWay pathLobbyTwo" onClick={() => changeScene('Breakroom')}></button>
    </div>)
};

export default Lobby;