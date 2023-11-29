import { useState } from 'react';
import './registerPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        username:undefined,
        email:undefined,
        password:undefined,
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setCredentials((prev)=>({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        try {
            await axios.post("http://localhost:8800/api/auth/register", credentials);
            navigate("/");
        } catch (err) {
            setError(err.response.data);
        }
    };

    return (
        <div className="register">
            <div className="rContainer">
                <span className="rName">Writler</span>
                <input 
                    type="text" 
                    placeholder='username' 
                    id='username'
                    onChange={handleChange}
                    className="rInput" 
                />
                <input 
                    type="text" 
                    placeholder='email' 
                    id='email'
                    onChange={handleChange}
                    className="rInput" 
                />
                <input 
                    type="password" 
                    placeholder='password' 
                    id='password'
                    onChange={handleChange}
                    className="rInput" 
                />
                <button onClick={handleClick} className="rButton">Register</button>
                {error && <span>{error.message}</span>}
                <span className="rLogin" onClick={()=>navigate("/")}>Login here</span>
            </div>
        </div>
    );
};

export default RegisterPage;
