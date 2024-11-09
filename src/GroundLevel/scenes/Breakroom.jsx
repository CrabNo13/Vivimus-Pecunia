import { useContext } from 'react';
import { Context } from '../../App';
import BreakroomImage from '../../textures/breakroom.png';

function Breakroom({ changeScene }) {
    const { inventoryVisible } = useContext(Context);

    return (
        <div className={`container ${inventoryVisible ? 'blurred' : ''}`}>
            <div className="scenario">
                <img src={BreakroomImage} className="scenarioImage" />
                <button className="pathWay pathReturn" onClick={() => changeScene('Lobby')}></button>
            </div>
        </div>)
};

export default Breakroom;