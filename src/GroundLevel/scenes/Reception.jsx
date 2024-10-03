import { useContext } from 'react'
import ReceptionImage from '../../textures/reception_beta.png'
import { Context } from '../../App'

function Reception({ changeScene }) {
    const { setInteractionBoxVisible, setInteractionItem } = useContext(Context);

    const handleItemClick = (item) => {
        setInteractionItem(item);
        setInteractionBoxVisible(true);
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

    const item = { id: 5, name: 'Apple', description: 'Just your average apple, scares off doctors' }


    return <button className='apple' onClick={() => handleItemClick(item)}>
    </button>
}

export default Reception;