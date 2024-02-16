import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import Shop from './pages/Shop.jsx';
import ShopCategory from './pages/ShopCategory.jsx';
import Product from './pages/Product.jsx'
import Cart from './pages/Cart.jsx'
import LoginSignpu from './pages/LoginSignup.jsx'
import Hero from './components/hero/Hero.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Shop/>}></Route>
            <Route path='/mens' element={<ShopCategory category = "mens"/>}></Route>
            <Route path='/womens' element={<ShopCategory category = "womens"/>}></Route>
            <Route path='/kids' element={<ShopCategory category = "kids"/>}></Route>
            <Route path='/product' element={<Product/>}>
              <Route path=':productId' element={<Product/>}></Route>
              
            </Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/login' element={<LoginSignpu/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
