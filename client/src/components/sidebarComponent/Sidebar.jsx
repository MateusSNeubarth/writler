import './sidebar.css';
import useFetch from '../../hooks/useFetch';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const { user } = useContext(AuthContext);
    const { data, loading } = useFetch(`http://localhost:8800/api/users/orders/${user._id}`);
    console.log(data);
    const navigate = useNavigate();


    return (
        <div className='sidebar'>
            <span className="sSpan">My Orders</span>
            <hr />
            <div className="orderContainer">
                {loading ? (
                    "loading"
                ) : (
                    data ? (
                            <>
                                {data.map((item) => (
                                    <button onClick={()=>navigate(`/order/${item._id}`)} key={item._id}>{item.title}</button>
                                ))}
                            </>
                        ) : (
                            "No Orders Yet"
                        )
                    )
                }
            </div>
        </div>
    );
};

export default Sidebar;
