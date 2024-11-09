import { useContext } from 'react';
import { Context } from '../../App';
import RestroomImage from '../../textures/restroom.png';

function Restroom({ changeScene }) {
    const { inventoryVisible } = useContext(Context);

    return (
        <div className={`container ${inventoryVisible ? 'blurred' : ''}`}>
            <div className="scenario">
                <img src={RestroomImage} className="scenarioImage" />
                <button className="pathWay pathReturn" onClick={() => changeScene('Reception')}></button>
            </div>
        </div>
    )
};

export default Restroom;