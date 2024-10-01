import ProfilePic from './textures/cat_profile.png'

function Layout({ children }) {
    return (<>
        <Profile />
        <Settings />
        {children}
    </>)
};

function Profile() {
    return (
        <button style={{ position: "fixed" }}>
            <img src={ProfilePic} style={{ width: "90px", height: "90px" }} />
            <div>UserName</div>
        </button>
    )
};

function Settings() {
    return <button className='settingsButton' />
};

function Hotbar() {
    return null
};

export default Layout;