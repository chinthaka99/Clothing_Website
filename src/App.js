import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import Shop from './pages/Shop.jsx';
import ShopCategory from './pages/ShopCategory.jsx';
import Product from './pages/Product.jsx'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route path='/' element={<Shop/>}></Route>
            <Route path='/mens' element={<ShopCategory category = "mens"/>}></Route>
            <Route path='/womens' element={<ShopCategory category = "womens"/>}></Route>
            <Route path='/womens' element={<ShopCategory category = "kids"/>}></Route>
            <Route path='/product' element={<Product/>}>

            </Route>
          </Routes>

        </Navbar>
      </BrowserRouter>
    </div>
  );
}

export default App;
