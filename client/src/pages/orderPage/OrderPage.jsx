import './orderPage.css';
import useFetch from '../../hooks/useFetch.js';
import { useLocation } from 'react-router-dom';

const OrderPage = () => {
    const location = useLocation();
    const id = location.pathname.split('/')[2]
    const { data, loading } = useFetch(`http://localhost:8800/api/orders/${id}`);

    console.log(data);
    return (
        <div>
            {loading ? (
                "loading"
            ) : (
                <div className="orderContainer">
                    {data.title}
                </div>
            )
            }
        </div>
    );
};

export default OrderPage;
