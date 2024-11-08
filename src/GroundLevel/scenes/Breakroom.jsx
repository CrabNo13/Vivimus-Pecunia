import BreakroomImage from '../../textures/breakroom.png';

function Breakroom({ changeScene }) {
    return (<div>
        <img src={BreakroomImage} className="main" />
        <button className="pathWay pathReturn" onClick={() => changeScene('Lobby')}></button>
    </div>)
};

export default Breakroom;