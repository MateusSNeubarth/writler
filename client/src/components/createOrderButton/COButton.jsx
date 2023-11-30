import { useNavigate } from 'react-router-dom';
import './coButton.css';

const COButton = () => {
    const navigate = useNavigate();

    return (
        <button className="coButton" onClick={() => navigate('/createorder')}>+</button>
    );
};

export default COButton;
