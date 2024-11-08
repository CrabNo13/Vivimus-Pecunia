import OfficeImage from '../../textures/office.png';

function Office({ changeScene }) {
    return (<div>
        <img src={OfficeImage} className="main" />
        <button className="pathWay pathReturn" onClick={() => changeScene('Lobby')}></button>
        <button className="pathWay pathOfficeOne" onClick={() => changeScene('Meetingroom')}></button>
    </div>)
};

export default Office;