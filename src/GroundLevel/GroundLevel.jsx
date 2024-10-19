import { useState } from 'react';
import Reception from './scenes/Reception'
import Lobby from './scenes/Lobby';

function GroundLevel() {
    const [currentScene, setCurrentScene] = useState('Reception')

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

    return (
        <>
            {renderScene()}
        </>
    )
};

export default GroundLevel;