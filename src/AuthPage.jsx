import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Context } from './App';
import { ContractText } from './Text';

function AuthPage() {
    const { setIsAuthenticated, setUserData } = useContext(Context);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const navigate = useNavigate();

    const d = new Date();
    const minute = d.getMinutes();
    const hour = d.getHours();
    const month = d.getMonth();
    const day = d.getDay();
    const fullDate = `${hour}:${minute}-${month}-${day}`

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/login', { username, password });
            localStorage.setItem('authToken', response.data.token);
            setIsAuthenticated(true);
            setUserData(response.data.user);
            navigate('/');
        } catch (error) {
            console.error('Login failed', error);
        }
    };
    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:5000/register', { username, password });
            localStorage.setItem('authToken', response.data.accessToken);
            setIsAuthenticated(true);
            setUserData(response.data.user);
            navigate('/');
        } catch (error) {
            console.error('Registration failed', error);
        }
    };
    return (
        <div className='landPageBackground'>
            <div className='contractBack'></div>
            <div className='contract'>
                <h1 className='contractTitle'>{isRegistering ? 'Sign contract' : 'Check-in'}</h1>
                {isRegistering ? <p className='contractText'>{ContractText}</p> : <p>{fullDate}</p>}
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button onClick={isRegistering ? handleRegister : handleLogin}>
                    {isRegistering ? 'Register' : 'Login'}
                </button>
            </div>
            <p>
                {isRegistering ? 'Do you already work here?' : "Are you new to our company?"}
                <button onClick={() => setIsRegistering(!isRegistering)}>
                    {isRegistering ? 'Check-in' : 'Contract'}
                </button>
            </p>
        </div>
    );
}

export default AuthPage;