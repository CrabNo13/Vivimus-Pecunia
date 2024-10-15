import { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Context } from './App';

function AuthPage() {
    const { setIsAuthenticated } = useContext(Context);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState(''); // Only needed for registration
    const [isRegistering, setIsRegistering] = useState(false); // Toggle between login and register
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/login', { username, password });
            localStorage.setItem('authToken', response.data.token); // Save the JWT
            setIsAuthenticated(true);
            navigate('/'); // Redirect to the layout (home)
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:5000/register', { username, password, email });
            localStorage.setItem('authToken', response.data.token); // Save the JWT after registration
            setIsAuthenticated(true);
            navigate('/'); // Redirect to the layout (home)
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <div>
            <h1>{isRegistering ? 'Register' : 'Login'}</h1>
            {isRegistering && (
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
            )}
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
            <p>
                {isRegistering ? 'Already have an account?' : "Don't have an account?"}
                <button onClick={() => setIsRegistering(!isRegistering)}>
                    {isRegistering ? 'Login' : 'Register'}
                </button>
            </p>
        </div>
    );
}

export default AuthPage;