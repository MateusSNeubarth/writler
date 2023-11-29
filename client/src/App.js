import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import LoginPage from './pages/loginPage/LoginPage';
import UserPage from './pages/userPage/UserPage';
import CreatetextPage from './pages/createtextPage/CreatetextPage';
import OrderPage from './pages/orderPage/OrderPage';
import RegisterPage from './pages/registerPage/RegisterPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/userpage/:id' element={<UserPage />} />
                <Route path='/createtext/:orderid' element={<CreatetextPage />} />
                <Route path='/order/:id' element={<OrderPage />} />
            </Routes>
        </Router>
    );
}

export default App;