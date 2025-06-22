import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import './search.css';

export default function Search() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const keywords = ['여름', '반팔', '원피스', '청바지', '스니커즈', '가방', '립틴트', '쿠션', '마스카라', '아이섀도우', '아이라이너', '선케어'];

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기서 searchTerm으로 검색 처리 가능
    console.log('검색어:', searchTerm);
  };

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

        <form className="search-box" onSubmit={handleSubmit}>
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            value={searchTerm}
            onChange={handleInputChange}
            className="search-input"
            aria-label="검색어 입력"
          />
        </form>
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
