import React from 'react';
import LobbyImage from '../../textures/lobby_beta.png';

function Lobby({ changeScene }) {
    return (<div>
        <img src={LobbyImage} className="main" />
        <button className="doorHandle" onClick={() => changeScene('Reception')} style={{
            right: "60px"
        }}></button>
    </div>)
};

export default Lobby;