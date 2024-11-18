import { useContext } from 'react';
import { Context } from '../App';

function ProfileTab() {
    const { profileMenuVisible, setProfileMenuVisible, userData } = useContext(Context);

    const handleProfileClick = (event) => {
        event.stopPropagation();
        setProfileMenuVisible(!profileMenuVisible);
    }

    return <button className="profileTab" onClick={handleProfileClick}>
        <div className='profileTextBoxes'>
            <div className='profileText tabName'>{userData.username}</div>
            <div className='profileText tabRank'>{userData.rank}</div>
        </div>
    </button >
};

export default ProfileTab;