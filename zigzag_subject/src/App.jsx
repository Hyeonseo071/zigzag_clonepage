import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Goods from './goods';
import Category from './category';
import Search from './search';
import Cart from './cart'; // ✅ 장바구니 페이지 import
import Login from './login'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/goods" element={<Goods />} />
        <Route path="/category/:type" element={<Category />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />  {/* 추가 */}
      </Routes>
    </Router>
  );
}
export default App;
