import './createtextPage.css';
import axios from 'axios';
import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Header from '../../components/headerComponent/Header';
import useFetch from '../../hooks/useFetch';

const CreateTextPage = () => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    const orderid = location.pathname.split('/')[2];
    const navigate = useNavigate();
    const { data } = useFetch(`http://localhost:8800/api/orders/${orderid}`)
    const [text, setText] = useState({
        title: undefined,
        body: undefined,
    });

    const handleChange = (e) => {
        setText((prev)=>({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:8800/api/texts/${user._id}/${orderid}`, text);
            console.log(res.data.details);
            navigate('/home');
        } catch (err) {
            console.log(err);
        }
    }
    
    return (
        <div className='createTextPage'>
            <Header />
            <div className="pageContent">
                <div className="orderInfo">
                    <h1>{data.title}</h1>
                    <span>{data.desc}</span>
                </div>
                <div className="formContainer">
                    <input 
                        type="text" 
                        placeholder='title'
                        id='title'
                        onChange={handleChange} 
                        className="formInputTitle" 
                    />
                    <input 
                        type="text" 
                        placeholder='body' 
                        id='body'
                        onChange={handleChange} 
                        className="formInputBody" 
                    />
                    <button className="formButton" onClick={handleClick}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default CreateTextPage;
