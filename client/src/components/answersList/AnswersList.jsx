import useFetch from '../../hooks/useFetch';
import './answersList.css';

const AnswersList = ({ order_id }) => {
    const { data, loading } = useFetch(`https://writler-api.onrender.com/api/orders/${order_id}/texts`);

    return (
        <div className='answersList'>
            {loading ? (
                "loading"
            ) : (
                data ? (
                    <>
                        {data.map((item) => (
                            <div className="alContainer">
                                <h1 className='aTitle'>{item.title}</h1>
                                <span className="aBody">{item.body}</span>
                            </div>
                        ))}
                    </>
                ) : (
                    "No answers for this order yet"
                )
            )}
        </div>
    );
};

export default AnswersList;
