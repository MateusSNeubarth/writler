import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './createOrderPage.css';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/headerComponent/Header.jsx';
import axios from 'axios';

const CreateOrderPage = () => {
    const [order, setOrder] = useState({
        title: undefined,
        desc: undefined,
    });
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    
    const handleChange = (e) => {
        setOrder((prev)=>({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`https://writler-api.onrender.com/api/orders/${user._id}`, order);
            console.log(res.data.details);
            navigate('/home');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="createOrder">
            <Header />
            <div className="formContainer">
                <h1>Create your new order</h1>
                <input 
                    type="text" 
                    placeholder='title' 
                    id='title'
                    onChange={handleChange} 
                    className="formInputTitle" 
                />
                <input 
                    type="text" 
                    placeholder='desc'
                    id='desc'
                    onChange={handleChange} 
                    className="formInputBody" 
                />
                <button className="formButton" onClick={handleClick}>Send</button>
            </div>
        </div>
    );
};

export default CreateOrderPage;
