import { useContext } from 'react';
import ProfilePic from '../textures/cat_profile.png';
import { Context } from '../App';

function ProfileTab() {
    const { profileMenuVisible, setProfileMenuVisible, userData } = useContext(Context);

    const handleProfileClick = (event) => {
        event.stopPropagation();
        setProfileMenuVisible(!profileMenuVisible);
        console.log(userData.username)
    }

    return <button className="profileTab" onClick={handleProfileClick}>
        <img src={ProfilePic} className='profilePic' />
        <div className='profileTextBoxes'>
            <span className='profileText'>{userData.username}</span>
        </div>
        <div className='profileTextBoxes'>
            <span className='profileText'>{userData.rank}</span>
        </div>
        <div className='profileTextBoxes'>
            <span className='profileText'>{userData.xp} xp</span>
        </div>
    </button >
};

export default ProfileTab;