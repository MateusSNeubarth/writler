import './homePage.css';
import Header from '../../components/headerComponent/Header';
import Sidebar from '../../components/sidebarComponent/Sidebar';

const HomePage = () => {
    return (
        <div className='homepage'>
            <Header />
            <Sidebar />
        </div>
    );
};

export default HomePage;
