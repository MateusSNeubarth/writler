import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import './userPage.css';
import Header from '../../components/headerComponent/Header'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.js';
import { useNavigate } from "react-router-dom";

const UserPage = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const iconStyle = {
        position: "sticky",
        fontSize: "18px",
        float: "right",
        padding: "5px",
        margin: "8px 5px",
    }

    const { dispatch } = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        dispatch({ type:"LOGOUT" });
        navigate('/');
    };

    return (
        <div className='userPage'>
            <Header />
            <div className="userInfo">
                <h1 className="info">
                    Username: 
                    <span>{user.username}</span> 
                    <FontAwesomeIcon 
                        icon={faPen} 
                        style={iconStyle}
                    />
                </h1>
                <h1 className='info'>
                    Email: 
                    <span>{user.email}</span>
                    <FontAwesomeIcon 
                        icon={faPen} 
                        style={iconStyle}
                    />
                </h1>
                <h1 className='info'>
                    Logout 
                    <span className="logoutSpan" onClick={handleClick}>X</span>
                </h1>
            </div>
        </div>
    );
};

export default UserPage;
