import { useContext } from 'react';
import BossOfficeImage from '../../textures/bossoffice.png';
import { Context } from '../../App';

function BossOffice({ changeScene }) {
    const { inventoryVisible } = useContext(Context);
    return (
        <div className={`container ${inventoryVisible ? 'blurred' : ''}`}>
            <div className="scenario">
                <img src={BossOfficeImage} className="scenarioImage" />
                <button className="pathWay pathReturn" onClick={() => changeScene('Meetingroom')}></button>
            </div>
        </div>)
};

export default BossOffice;