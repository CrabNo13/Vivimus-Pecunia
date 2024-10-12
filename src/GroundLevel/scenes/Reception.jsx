import { useContext } from 'react'
import ReceptionImage from '../../textures/reception_beta.png'
import { Context } from '../../App'

function Reception({ changeScene }) {
    const { setInteractionBoxVisible, setInteractionItem, setEquippedItem } = useContext(Context);

    const handleItemClick = (item) => {
        setInteractionItem(item);
        setInteractionBoxVisible(true);
        setEquippedItem(item);
    };

    return (
        <div>
            <img src={ReceptionImage} className="main" />
            <button className="doorHandle" onClick={() => changeScene('Lobby')} style={{
                left: "238px"
            }}></button>
            <Apple handleItemClick={handleItemClick} />
        </div>
    )
};

function Apple({ handleItemClick }) {

    const item = 3;


    return <button className='apple' onClick={() => handleItemClick(item)}>
    </button>
}

export default Reception;