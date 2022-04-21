import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProductPage from './pages/ProductPage'
import ProfilePage from './pages/ProfilePage'
import RegisterPage from './pages/RegisterPage'
import PlaceOrderPage from './pages/PlaceOrderPage'
import ShippingPage from './pages/ShippingPage'
import CartPage from './pages/CartPage'
import PaymentPage from './pages/PaymentPage'
import OrderPage from './pages/OrderPage'
import UserListPage from './pages/UserListPage'
import UserEditPage from './pages/UserEditPage'
import ProductListPage from './pages/ProductListPage'
import ProductEditPage from './pages/ProductEditPage'
import OrderListPage from './pages/OrderListPage'
import CategoryPage from './pages/CategoryPage'

function App() {
  return (
    <Router>
      <Container>
        <Header />
          <div className="px-md-5 main-container shadow-lg">
            <main className='py-3'>
              <Routes>
                <Route path='/' element={<HomePage />} />  
                <Route path='/categories/:name' element={<CategoryPage/>}></Route>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/shipping' element={<ShippingPage />} />
                <Route path='/payment' element={<PaymentPage />} />
                <Route path='/product/:id' element={<ProductPage/>} />
                <Route path='/placeorder' element={<PlaceOrderPage />} />
                <Route path='/order/:id' element={<OrderPage />} />
                <Route path='/admin/userlist' element={<UserListPage />} />
                <Route path='/admin/user/:id/edit' element={<UserEditPage />} />
                <Route path='/admin/productlist' element={<ProductListPage />} />
                <Route path='/admin/product/:id/edit' element={<ProductEditPage />} />
                <Route path='/admin/orderlist' element={<OrderListPage />} />
                <Route path="/cart">
              <Route path=":id" element={<CartPage />} />
              <Route path="" element={<CartPage />} />
            </Route>
              </Routes>
          </main>
        </div>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
