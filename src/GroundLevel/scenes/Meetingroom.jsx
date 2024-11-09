import { useContext } from 'react';
import { Context } from '../../App';
import MeetingroomImage from '../../textures/meetingroom.png';

function Meetingroom({ changeScene }) {
    const { inventoryVisible } = useContext(Context);

    return (
        <div className={`container ${inventoryVisible ? 'blurred' : ''}`}>
            <div className="scenario">
                <img src={MeetingroomImage} className="scenarioImage" />
                <button className="pathWay pathReturn" onClick={() => changeScene('Office')}></button>
                <button className="pathWay pathMeetingroomOne" onClick={() => changeScene('BossOffice')}></button>
            </div>
        </div>
    )
};

export default Meetingroom;