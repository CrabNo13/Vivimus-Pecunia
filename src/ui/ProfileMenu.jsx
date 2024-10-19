import { useContext, useEffect } from "react";
import { Context } from "../App";

function ProfileMenu() {
    const { setProfileMenuVisible } = useContext(Context)

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
        <h1>This is the profile menu</h1>
    </div>
};

export default ProfileMenu;