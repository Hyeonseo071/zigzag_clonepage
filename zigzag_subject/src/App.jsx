import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Goods from './goods'; // 방금 만든 goods.jsx

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/goods" element={<Goods />} />
      </Routes>
    </Router>
  );
}

export default App;
