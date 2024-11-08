import RestroomImage from '../../textures/restroom.png';

function Restroom({ changeScene }) {
    return (<div>
        <img src={RestroomImage} className="main" />
        <button className="pathWay pathReturn" onClick={() => changeScene('Reception')}></button>
    </div>)
};

export default Restroom;