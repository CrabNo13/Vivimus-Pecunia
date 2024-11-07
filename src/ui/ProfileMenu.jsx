import { useContext, useEffect } from "react";
import { Context } from "../App";
import ProfilePic from '../textures/cat_profile.png';

function ProfileMenu() {
    const { setProfileMenuVisible, userData } = useContext(Context)

    {/*The following code makes it so when you click outside the profile menu, it closes. I don't know how it works, I don't wanna know how it works, but just don't touch it since it will break.*/ }
    const profileTabElement = document.querySelector('.profileTab');
    const handleClickOutside = (event) => {
        if (!event.target.closest('.profileMenu') &&
            profileTabElement &&
            !profileTabElement.contains(event.target)) {
            setProfileMenuVisible(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return <div className="profileMenu">
        <div className="profileMenuLeft">
            <img src={ProfilePic} className="profilePicMenu"></img>
            <div className="profileInfoContainer">
                <h2>CONTACT</h2>
                <br />
                <p>Email: blah@gmail.com</p>
                <br />
                <br />
                <h2>EDUCATION</h2>
                <br />
                <p>Nothing to show here</p>
                <br />
                <br />
                <h2>SKILLS</h2>
                <br />
                <p>Can touch his elbow with his tongue</p>
            </div>
        </div>
        <div className="profileMenuRight">
            <div className="profileInfoContainer">
                <h1 style={{ fontWeight: "900", fontSize: "xx-large" }}>{userData.username}</h1>
                <br />
                <h2>PROFILE</h2>
                <br />
                <p>As a profesional worker on their first job, they know nothing, only that they are hungry and need money.</p>
                <br />
                <br />
                <h2>EXPERIENCE</h2>
                <br />
                <p>2019: Worked as a self employed professional sleeper. Worked for even 10 hours a day sometimes.</p>
            </div>
        </div>
    </div>
};

export default ProfileMenu;