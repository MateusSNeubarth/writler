import './orderPage.css';
import useFetch from '../../hooks/useFetch.js';
import { useLocation } from 'react-router-dom';
import Header from '../../components/headerComponent/Header';
import AnswersList from '../../components/answersList/AnswersList.jsx';

const OrderPage = () => {
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const { data, loading } = useFetch(`http://localhost:8800/api/orders/${id}`);

    console.log(data);
    return (
        <div className="orderPage">
            <Header />
            {loading ? (
                "loading"
            ) : (
                <div className="orderContainer">
                    <h1 className='containerTitle'>Title: {data.title}</h1>
                    <span className='containerDesc'>Description: {data.desc}</span>
                    <div className="answers">
                        <h1 className='answersTitle'>Answers: </h1>
                        <hr />
                        <AnswersList order_id={data._id} />
                    </div>
                </div>
            )
            }
        </div>
    );
};

export default OrderPage;
