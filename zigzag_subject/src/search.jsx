import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import './search.css';

export default function Search() {
  const navigate = useNavigate();

  const keywords = ['여름', '반팔', '원피스', '청바지', '스니커즈', '가방', '립틴트', '쿠션', '마스카라', '아이섀도우', '아이라이너', '선케어'];

  return (
    <div className="search-wrapper">
      <header className="search-header">
        <button
          className="back-button"
          onClick={() => navigate(-1)}
          aria-label="뒤로가기"
        >
          &lt;
        </button>

        <div className="search-box">
          <FiSearch className="search-icon" />
        </div>
      </header>

      <div className="keyword-box">
        {keywords.map((word, idx) => (
          <button key={idx} className="keyword-btn">
            <span className="keyword-icon" />
            {word}
          </button>
        ))}
      </div>
    </div>
  );
}
