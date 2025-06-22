import React, { useEffect, useRef, useState } from 'react';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';
import './home.css';

const categories = [
  { name: '직진배송', link: '/category/express' },
  { name: '뷰티', link: '/category/beauty' },
  { name: '상의', link: '/category/tops' },
  { name: '원피스', link: '/category/dresses' },
  { name: '바지', link: '/category/pants' },
  { name: '스커트', link: '/category/skirts' },
  { name: '아우터', link: '/category/outerwear' },
  { name: '슈즈', link: '/category/shoes' },
  { name: '가방', link: '/category/bags' },
  { name: '이너웨어/파자마', link: '/category/innerwear' },
];

function CategoryBanner() {
  return (
    <nav className="category-banner">
      {categories.map((category, index) => (
        <div key={index} className="category-wrapper">
          <button className="circle-button" />
          <a href={category.link} className="category-item">
            {category.name}
          </a>
        </div>
      ))}
    </nav>
  );
}


function AutoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

  const images = [
    '/images/202406200045353136_065139.jpg',
    '/images/202506110315036782_049057.jpg',
    '/images/202506131148063470_040198.jpg',
    '/images/202506181016030255_052252.jpg',
    '/images/202506200549521422_089342.jpg'
  ];

  const intervalTime = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, intervalTime);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="sliderContainer">
      <div
        ref={slideRef}
        className="sliderTrack"
        style={{ width: `${100 * images.length}%` }}
      >
        {images.map((src, index) => (
          <div key={index} className="slideBox">
            <img src={src} alt={`slide-${index}`} className="image" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div>
        <div className="logo">Zigzag</div>
        <nav className="nav">
          <FiSearch className="icon" title="검색" />
          <FiShoppingBag className="icon" title="장바구니" />
        </nav>
      </div>
    </header>
  );
}
function RecommendationTitle() {
  return (
    <h2 className="recommendation-title">
      당신을 위한 추천 아이템
    </h2>
  );
}
function RecommendationGrid() {
  const items = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <div className="recommendation-grid">
      {items.map((item) => (
        <div key={item} className="product-box">
          <div className="product-image-area">
            <span>상품 {item}</span>
          </div>
          <div className="product-desc">
            상품 설명 {item}
          </div>
        </div>
      ))}
    </div>
  );
}

function CircleButtonBanner() {
  const circleItems = [
    // '추천', '인기', '신상', '여름세일', '브랜드', '이벤트'
  ];

  return (
    <div className="circle-banner">
      {circleItems.map((text, index) => (
        <button key={index} className="circle-button">
          {text}
        </button>
      ))}
    </div>
  );
}


export default function MainComponent() {
  return (
    <div className="layout">
      <Header />
      <AutoSlider />
      <CircleButtonBanner />
      <CategoryBanner />
      <RecommendationTitle />  
      <RecommendationGrid />{/* 슬라이더 아래에 위치. */}
    </div>
  );
}

