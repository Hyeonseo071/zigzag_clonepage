import React from 'react';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './goods.css';

export default function Goods() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="goods-page">
      <header className="goods-header">
        <div className="goods-header-inner">
          <button className="logo-text" onClick={goHome}>
            Zigzag
          </button>
          <div className="goods-header-right">
            <button className="icon-button">
              <FiMenu size={20} />
            </button>
            <button className="icon-button">
              <FiSearch size={20} />
            </button>
          </div>
        </div>
      </header>

      <div className="goods-content">
  <div className="goods-main-image">
    <img src="/images/goods.jpg" alt="상품 이미지" />
  </div>
  <div className="viewing-box">
    <b>  👤198명이 지금 보고있어요.</b>
  </div>
</div>

    </div>
  );
}
