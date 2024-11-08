import { useState } from 'react';
import Reception from './scenes/Reception'
import Lobby from './scenes/Lobby';
import Restroom from './scenes/Restroom';
import Office from './scenes/Office';
import Breakroom from './scenes/Breakroom';
import Meetingroom from './scenes/Meetingroom';
import BossOffice from './scenes/BossOffice';

function GroundLevel() {
    const [currentScene, setCurrentScene] = useState('Reception')

    const renderScene = () => {
        switch (currentScene) {
            case 'Reception':
                return <Reception changeScene={setCurrentScene} />
            case 'Restroom':
                return <Restroom changeScene={setCurrentScene} />
            case 'Lobby':
                return <Lobby changeScene={setCurrentScene} />
            case 'Office':
                return <Office changeScene={setCurrentScene} />
            case 'Breakroom':
                return <Breakroom changeScene={setCurrentScene} />
            case 'Meetingroom':
                return <Meetingroom changeScene={setCurrentScene} />
            case 'BossOffice':
                return <BossOffice changeScene={setCurrentScene} />
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