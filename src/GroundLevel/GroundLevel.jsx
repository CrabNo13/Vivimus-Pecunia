import { useState, useContext } from 'react';
import Reception from './scenes/Reception'
import Lobby from './scenes/Lobby';
import { Context } from '../App';

function GroundLevel() {
    const [currentScene, setCurrentScene] = useState('Reception')
    const { items, modifyItem } = useContext(Context)

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
        modifyItem([...items, { id: Date.now(), name: 'drink' }]);
    };
    console.log("this is an apple rendering");

    return (
        <>
            {renderScene()}
            <button className='doorHandle' onClick={handleAddItem}>this is an apple</button >
        </>
    )
};

export default GroundLevel;