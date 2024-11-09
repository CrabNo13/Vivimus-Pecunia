import { useContext } from 'react';
import { Context } from '../../App';
import OfficeImage from '../../textures/office.png';

function Office({ changeScene }) {
    const { inventoryVisible } = useContext(Context);

    return (
        <div className={`container ${inventoryVisible ? 'blurred' : ''}`}>
            <div className="scenario">
                <img src={OfficeImage} className="scenarioImage" />
                <button className="pathWay pathReturn" onClick={() => changeScene('Lobby')}></button>
                <button className="pathWay pathOfficeOne" onClick={() => changeScene('Meetingroom')}></button>
            </div>
        </div>
    )
};

export default Office;