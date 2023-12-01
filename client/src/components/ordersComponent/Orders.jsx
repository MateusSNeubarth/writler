import { useContext } from 'react';
import useFetch from '../../hooks/useFetch';
import './orders.css';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
    const { user } = useContext(AuthContext);
    const { data, loading } = useFetch(`https://writler-api.onrender.com/api/orders/`);
    const navigate = useNavigate();

    return (
        <div className="orders">
            {loading ? (
                "loading"
            ) : (
                data ? (
                    <>
                        {data.map((item) => (
                            item._id !== user._id ? (
                                <div className="oContainer">
                                    <h1>{item.title}</h1>
                                    <span>{item.desc}</span>
                                    <button onClick={() => navigate(`/createtext/${item._id}`)}>Answer</button>
                                </div>
                            ) : (
                                <></>
                            )
                        ))}
                    </>
                ) : (
                    "No orders have been created yet"
                )
            )}
        </div>
    );
};

export default Orders;
