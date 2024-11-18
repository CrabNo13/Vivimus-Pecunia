import { useContext } from 'react';
import { Context } from '../../App';
import RestroomImage from '../../textures/restroom.png';
import imageMap from '../../textures/ImageMaps';

function Restroom({ changeScene }) {
    const { inventoryVisible, setInteractionItem, setInteractionBoxVisible } = useContext(Context);

    const handleItemClick = (item) => {
        setInteractionItem(item);
        setInteractionBoxVisible(true);
    };

    return (
        <div className={`container ${inventoryVisible ? 'blurred' : ''}`}>
            <div className="scenario">
                <img src={RestroomImage} className="scenarioImage" />
                <button className="pathWay pathReturn" onClick={() => changeScene('Reception')}></button>
                <ToiletPaper handleItemClick={handleItemClick} />
            </div>
        </div>
    )
};


function ToiletPaper({ handleItemClick }) {

    const item = 6;


    return <button className='item toiletPaper' onClick={() => handleItemClick(item)}>
        <img className='itemImage' src={imageMap[item]} />
    </button>
}

export default Restroom;