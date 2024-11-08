import MeetingroomImage from '../../textures/meetingroom.png';

function Meetingroom({ changeScene }) {
    return (<div>
        <img src={MeetingroomImage} className="main" />
        <button className="pathWay pathReturn" onClick={() => changeScene('Office')}></button>
        <button className="pathWay pathMeetingroomOne" onClick={() => changeScene('BossOffice')}></button>
    </div>)
};

export default Meetingroom;