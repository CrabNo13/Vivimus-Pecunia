import { useContext } from 'react';
import ProfilePic from '../textures/cat_profile.png';
import { Context } from '../App';

function ProfileTab() {
    const { profileMenuVisible, setProfileMenuVisible } = useContext(Context);

    const handleProfileClick = (event) => {
        event.stopPropagation();
        setProfileMenuVisible(!profileMenuVisible);
    }

    return <button className="profileTab" onClick={handleProfileClick}>
        <img src={ProfilePic} className='profilePic' />
        <div className='profileTextBoxes'>
            <span className='profileText'>Username: </span>
        </div>
        <div className='profileTextBoxes'>
            <span className='profileText'>Rank: </span>
        </div>
        <div className='profileTextBoxes'>
            <span className='profileText' s>Level: </span>
        </div>
    </button >
};

export default ProfileTab;