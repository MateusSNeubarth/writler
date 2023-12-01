import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.js';
import { useNavigate } from "react-router-dom";
import './header.css';

const Header = () => {
    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    return (
        <div className="header">
                <h1 className="title" onClick={()=>navigate('/home')}>Writler</h1>
                <ul className="hList">
                    <li className="hListItem">
                        <button className="hButton" onClick={() => navigate(`/userpage/${user._id}`)}>{user.username || 'user'}</button>
                    </li>
                </ul>
        </div>
    );
};

export default Header;
