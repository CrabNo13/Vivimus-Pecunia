import ReceptionImage from '../../textures/reception_beta.png'

function Reception({ changeScene }) {
    return (
        <div>
            <img src={ReceptionImage} className="main" />
            <button className="doorHandle" onClick={() => changeScene('Lobby')} style={{
                left: "238px"
            }}></button>
        </div>
    )
};

export default Reception;