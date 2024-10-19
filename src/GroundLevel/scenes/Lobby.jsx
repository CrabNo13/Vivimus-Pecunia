import LobbyImage from '../../textures/lobby.png';

function Lobby({ changeScene }) {
    return (<div>
        <img src={LobbyImage} className="main" />
        <button className="pathWay pathLobbyOne" onClick={() => changeScene('Reception')}></button>
    </div>)
};

export default Lobby;