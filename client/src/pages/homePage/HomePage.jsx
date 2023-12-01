import './homePage.css';
import Header from '../../components/headerComponent/Header';
import Sidebar from '../../components/sidebarComponent/Sidebar';
import COButton from '../../components/createOrderButton/COButton';
import Orders from '../../components/ordersComponent/Orders';

const HomePage = () => {
    return (
        <div className='homepage'>
            <Header />
            <Sidebar />
            <div className="addBtnContainer">
                <COButton />
            </div>
            <Orders key={null}/>
        </div>
    );
};

export default HomePage;
