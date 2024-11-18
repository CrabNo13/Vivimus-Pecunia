import { useContext, useEffect } from "react";
import axios from "axios";
import { Context } from "../App";
import ProfilePicture from '../textures/profilepicture.png';

function ProfileMenu() {
    const { setProfileMenuVisible, userData,
        setInteractionBoxVisible, setInteractionAction,
        playerInventory, playerXp } = useContext(Context)

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

    const LogoutOption = () => {
        setInteractionAction(2);
        setInteractionBoxVisible(true);
        setProfileMenuVisible(false)
    };

    const DeleteOption = () => {
        setInteractionAction(3);
        setInteractionBoxVisible(true);
        setProfileMenuVisible(false)
    };

    async function SaveProgress() {
        const xp = playerXp;
        const inventory = playerInventory;

        try {
            const response = await axios.post('http://localhost:5000/update-progress', {
                userId: userData._id,
                xp,
                inventory
            });

            setInteractionAction(1);
            setInteractionBoxVisible(true);
            setProfileMenuVisible(false);
        } catch (error) {
            console.error('Failed to save progress:', error);
        }
    }

    return <div className="profileMenu">
        <div className="profileMenuLeft">
            <img src={ProfilePicture} className="profilePicMenu"></img>
            <div className="profileInfoContainerLeft">
                <h2>CONTACT</h2>
                <p className="profileParagraph">Email: totallyprofessional@gmail.com</p>
                <br />
                <h2>EDUCATION</h2>
                <p className="profileParagraph">University of Life and Bad Decisions
                    Graduation: Pending, Eternally
                    Majored in "Learning Things the Hard Way" with a minor in "Googling Everything Last Minute." Honors include perfect attendance in Procrastination 101 and completing several semesters of Overthinking without a break.</p>
                <br />
                <h2>SKILLS</h2>
                <p className="profileParagraph">Multi-Tasking: Can scroll social media while pretending to listen in meetings.</p>
                <p className="profileParagraph">Advanced Problem Solving: Expert in creating solutions for problems that didn’t need solving.</p>
                <p className="profileParagraph">Time Management: Always on time—except when it matters.</p>
                <p className="profileParagraph">Teamwork: Excels at assigning blame diplomatically.</p>
            </div>
            <button className="menuButtonLeft menuButton save" onClick={SaveProgress}>Save</button>
        </div>
        <div className="profileMenuRight">
            <div className="profileInfoContainerRight">
                <h1 style={{ fontWeight: "900", fontSize: "xx-large" }}>{userData.username}</h1>
                <br />
                <h2>{userData.rank}</h2>
                <br />
                <h2>Xp: {playerXp}</h2>
                <br />
                <h2>PROFILE</h2>
                <p className="profileParagraph">A highly adaptable individual specializing in the fine art of overthinking and making unnecessarily complex decisions look effortless. Known for unparalleled expertise in scrolling through streaming platforms for hours without picking a show and the uncanny ability to memorize useless trivia while forgetting what day it is. Offers a unique skill set that includes crafting the perfect sandwich, detecting sarcasm from a mile away, and providing unsolicited yet oddly accurate life advice. While conventional skills may not be present, the sheer creativity in finding new ways to avoid responsibility is unmatched.</p>
                <br />
                <h2>EXPERIENCE</h2>
                <p className="profileParagraph">Professional Coffee Taster (Self-Appointed)
                    2021 - Present
                    Perfected the delicate balance of caffeine intake, ensuring optimal levels for procrastination and daydreaming. Notable achievements include surviving an overly strong espresso and identifying the subtle differences between "cheap" and "budget-friendly" instant coffee.</p>
                <br />
                <p className="profileParagraph">Amateur Fort Builder
                    2015 - 2019
                    Engineered world-class blanket forts using cutting-edge designs involving chairs, bedsheets, and an alarming amount of clothespins. Played a vital role in hosting negotiations for "who gets the last slice" summits.</p>
                <br />
                <p className="profileParagraph">Emergency Dance Floor Starter
                    2020 (New Year’s Eve)
                    Demonstrated leadership during a critical deadlock at a party by initiating a bold interpretive dance to ‘Dancing Queen.’ Successfully raised morale and established a long-standing reputation as "that person who dances first."</p>
            </div>
            <div className="menuButtonsRight">
                <button className="menuButton logout" onClick={LogoutOption}>EndDay</button>
                <button className="menuButton delete" onClick={DeleteOption}>QuitJob</button>
            </div>
        </div>
    </div>
};

export default ProfileMenu;