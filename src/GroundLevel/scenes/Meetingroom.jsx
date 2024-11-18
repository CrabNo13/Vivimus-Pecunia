import { useContext } from 'react';
import { Context } from '../../App';
import MeetingroomImage from '../../textures/meetingroom.png';

function Meetingroom({ changeScene }) {
    const { equippedItem, inventoryVisible, setInteractionBoxVisible, setInteractionAction } = useContext(Context);

    function Access() {
        if (equippedItem === 1) {
            changeScene('BossOffice')
        } else {
            setInteractionAction(4);
            setInteractionBoxVisible(true);
        }
    }

    return (
        <div className={`container ${inventoryVisible ? 'blurred' : ''}`}>
            <div className="scenario">
                <img src={MeetingroomImage} className="scenarioImage" />
                <button className="pathWay pathReturn" onClick={() => changeScene('Office')}></button>
                <button className="pathWay pathMeetingroomOne" onClick={Access}></button>
            </div>
        </div>
    )
};

export default Meetingroom;