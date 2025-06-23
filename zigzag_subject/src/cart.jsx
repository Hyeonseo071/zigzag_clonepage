import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './cart.css';

export default function Cart() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const goToGoods = () => {
    navigate('/goods');
  };

  return (
    <div>
      {/* 상단 고정 헤더 */}
      <header className="cart-header">
        <div onClick={handleBack} style={{ cursor: 'pointer' }}>
          <FiArrowLeft className="back-icon" />
        </div>
        <div className="cart-title">장바구니</div>
      </header>

      {/* 본문 내용 */}
      <div className="cart-empty-container">
        <h3 className="cart-empty-title">장바구니에 담긴 상품이 없어요</h3>
        <p className="cart-empty-sub">원하는 상품을 담아보세요</p>
        <button className="cart-empty-button" onClick={goToGoods}>
          직잭팟 상품 보러 가기
        </button>
      </div>
    </div>
  );
}
