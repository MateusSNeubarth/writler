import './homePage.css';
import Header from '../../components/headerComponent/Header';
import Sidebar from '../../components/sidebarComponent/Sidebar';
import COButton from '../../components/createOrderButton/COButton';

const HomePage = () => {
    return (
        <div className='homepage'>
            <Header />
            <Sidebar />
            <div className="addBtnContainer">
                <COButton />
            </div>
        </div>
    );
};

export default HomePage;
