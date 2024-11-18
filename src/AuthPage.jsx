import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Context } from './App';
import { ContractText } from './Text';
import Background from './textures/background.png'

function AuthPage() {
    const { setIsAuthenticated, setUserData, modifyPlayerInventory, modifyPlayerXp
    } = useContext(Context);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            setErrorMessage('Please fill in all fields.');
            return;
        }
        try {
            // const response = await axios.post('http://localhost:5000/login', { username, password });
            const response = await axios.post('https://vivimuspecuniaserver.onrender.com/login', { username, password });
            localStorage.setItem('authToken', response.data.token);
            setIsAuthenticated(true);
            setUserData(response.data.user);
            modifyPlayerInventory(response.data.user.inventory);
            modifyPlayerXp(response.data.user.xp);
            navigate('/');
        } catch (error) {
            setErrorMessage('Login failed.');
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            setErrorMessage('Please fill in all fields.');
            return;
        }
        console.log('Register payload:', { username, password });
        try {
            // const response = await axios.post('http://localhost:5000/register', { username, password });
            const response = await axios.post('https://vivimuspecuniaserver.onrender.com/register', { username, password });
            localStorage.setItem('authToken', response.data.accessToken);
            setIsAuthenticated(true);
            setUserData(response.data.user);
            modifyPlayerInventory(response.data.user.inventory);
            modifyPlayerXp(response.data.user.xp);
            navigate('/');
        } catch (error) {
            console.error('Registration failed', error);
            setErrorMessage('Registration failed.');
        }
    };
    return (
        <div className='landPageBackground'>
            <img src={Background} className='authBackgroundImage' />

            <div className={`authBox ${isRegistering ? 'contract' : 'checkin'}`}>
                <h1 className='contractTitle'>{isRegistering ? 'Sign contract' : 'Check-in'}</h1>
                {isRegistering ? <p className='contractText'>{ContractText}</p> : ''}

                <form className='authForm' onSubmit={isRegistering ? handleRegister : handleLogin}>
                    <input
                        className={isRegistering ? 'inputOne' : 'inputTwo'}
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                    />
                    <input
                        className={isRegistering ? 'inputOne' : 'inputTwo'}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <button className='authButton' type='submit'>
                        {isRegistering ? 'Register' : 'Login'}
                    </button>
                </form>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>

            <p className='authChange'>
                {isRegistering ? 'Do you already work here? ' : 'Are you new to our company? '}
                <button className='interactionButton' onClick={() => setIsRegistering(!isRegistering)}>
                    {isRegistering ? 'Check-in' : 'Contract'}
                </button>
            </p>
        </div>
    );
}

export default AuthPage;