import BossOfficeImage from '../../textures/bossoffice.png';

function BossOffice({ changeScene }) {
    return (<div>
        <img src={BossOfficeImage} className="main" />
        <button className="pathWay pathReturn" onClick={() => changeScene('Meetingroom')}></button>
    </div>)
};

export default BossOffice;