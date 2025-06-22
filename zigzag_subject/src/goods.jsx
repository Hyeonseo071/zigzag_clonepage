import React from 'react';
import { FiMenu, FiSearch, FiHeart } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import './goods.css';

export default function Goods() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  const handleBuy = () => {
    alert('구매하기 버튼이 클릭되었습니다!');
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
          <b> 👤198명이 지금 보고있어요.</b>
        </div>
        <div className="description-box">
          <div className="title-text">
            <b>[압도적 판매량🔥, 누적 40만장 기록🌊] 세인트부츠컷데님 - 9color</b>
          </div>
          <div className="review-text">
            ⭐ 4.9 <a href="/reviews" className="review-link">31개의 리뷰 보기</a>
          </div>
          <div className="price-text">
            15,000원
          </div>
          <div className="jackpot-text">
            <span className="jackpot-price">97,000원</span> 직잭팟
          </div>
        </div>
      </div>

      {/* 하단 고정 바 */}
      <div className="fixed-buy-bar">
        <FiHeart size={28} className="fixed-buy-heart" />
        <button className="buy-button" onClick={handleBuy}>
          구매하기
        </button>
      </div>
    </div>
  );
}
