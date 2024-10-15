import ProfilePic from '../textures/cat_profile.png';

function ProfileTab({ profileMenuVisible, setProfileMenuVisible }) {

    const handleProfileClick = (event) => {
        event.stopPropagation();
        setProfileMenuVisible(!profileMenuVisible);
    }

    return <button className="profileTab" style={{ position: "fixed" }} onClick={handleProfileClick}>
        <img src={ProfilePic} style={{ width: "90px", height: "90px" }} />
        <div>UserName</div>
    </button>
};

export default ProfileTab;