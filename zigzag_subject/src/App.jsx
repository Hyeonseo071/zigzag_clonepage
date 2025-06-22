import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Goods from './goods';
import Category from './category';
import Search from './search'; // ✅ 추가

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/goods" element={<Goods />} />
        <Route path="/category/:type" element={<Category />} />
        <Route path="/search" element={<Search />} /> {/* ✅ 추가 */}
      </Routes>
    </Router>
  );
}

export default App;
