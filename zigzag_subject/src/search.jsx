import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import './search.css';

export default function Search() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const keywords = ['여름', '반팔', '원피스', '청바지', '스니커즈', '가방', '립틴트', '쿠션', '마스카라', '아이섀도우', '아이라이너', '선케어'];

  const popularSearches = [
    { rank: 1, term: '블라우스', trend: 'up' },
    { rank: 2, term: '나시', trend: 'up' },
    { rank: 3, term: '레인부츠', trend: 'down' },
    { rank: 4, term: '원피스', trend: 'up' },
    { rank: 5, term: '반바지', trend: 'same' },
    { rank: 6, term: '수영복', trend: 'up' },
    { rank: 7, term: '하객룩', trend: 'up' },
    { rank: 8, term: '버뮤다팬츠', trend: 'up' },
  ];

  const handleInputChange = (e) => setSearchTerm(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('검색어:', searchTerm);
  };

  return (
    <div className="search-wrapper">
      <header className="search-header">
        <button className="back-button" onClick={() => navigate(-1)} aria-label="뒤로가기">
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

      <div className="popular-search-section">
        <div className="section-title">
          인기 검색어
          <span className="update-time">오전 5:00 업데이트</span>
        </div>

        <div className="popular-search-grid">
          {popularSearches.map((item, idx) => (
            <div key={idx} className="popular-item">
              <span className="rank">{item.rank}.</span>
              <span className="term">{item.term}</span>
              <span className={`trend ${item.trend}`}>
                {item.trend === 'up' ? '▲' : item.trend === 'down' ? '▼' : '—'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
