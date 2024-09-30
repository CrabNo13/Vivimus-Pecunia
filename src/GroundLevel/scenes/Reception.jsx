import React from 'react'
import ReceptionImage from '../../textures/reception_beta.png'

function Reception({ changeScene }) {
    return (
        <div>
            <img src={ReceptionImage} className="main" />
            <button className="doorHandle" onClick={() => changeScene('Lobby')} style={{
                left: "240px"
            }}></button>
        </div>
    )
};

export default Reception;