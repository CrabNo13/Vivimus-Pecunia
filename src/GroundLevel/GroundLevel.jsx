import { useState, useContext } from 'react';
import Reception from './scenes/Reception'
import Lobby from './scenes/Lobby';
import { Context } from '../App';

function GroundLevel() {
    const [currentScene, setCurrentScene] = useState('Reception')
    const { playerItems, modifyPlayerItems } = useContext(Context)

    const renderScene = () => {
        switch (currentScene) {
            case 'Reception':
                return <Reception changeScene={setCurrentScene} />
            case 'Lobby':
                return <Lobby changeScene={setCurrentScene} />
            default:
                return <Reception changeScene={setCurrentScene} />
        }
    }

    const handleAddItem = () => {
        modifyPlayerItems([...playerItems]);
    };

    return (
        <>
            {renderScene()}
            <button className='doorHandle' onClick={handleAddItem}>this is an apple</button >
        </>
    )
};

export default GroundLevel;