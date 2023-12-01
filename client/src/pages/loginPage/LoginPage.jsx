import './loginPage.css';
import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

const LoginPage = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        username:undefined,
        password:undefined,
    });

    const { loading, error, dispatch } = useContext(AuthContext);

    const handleChange = (e) => {
        setCredentials((prev)=>({ ...prev, [e.target.id]: e.target.value }));
    };


    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type:"LOGIN_START"});
        try {
            const res = await axios.post("https://writler-api.onrender.com/api/auth/login", credentials);
            dispatch({ type:"LOGIN_SUCCESS", payload: res.data.details });
            console.log(res.data.details);
            navigate("/home");
        } catch (err) {
            dispatch({ type:"LOGIN_FAILURE", payload: err.response.data });
        }
    };

    return (
        <div className="login">
            <div className='lContainer'>
                <span className="lNome">Writler</span>
                <input 
                    type="text"
                    placeholder='username'
                    id='username'
                    onChange={handleChange}
                    className="lInput" 
                />
                <input 
                    type="password" 
                    placeholder='password'
                    id='password'
                    onChange={handleChange}
                    className="lInput" 
                />
                <button disabled={loading} onClick={handleClick} className="lButton">Login</button>
                {error && <span>{error.message}</span>}
                <span className="lregiter" onClick={()=>navigate("/register")}>Register here</span>
            </div>
        </div>
    );
};

export default LoginPage;
