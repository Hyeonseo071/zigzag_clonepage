// home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiShoppingBag, FiHome, FiMenu, FiHeart, FiUser } from 'react-icons/fi';
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
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const slideRef = React.useRef(null);

  const images = [
    '/images/202406200045353136_065139.jpg',
    '/images/202506110315036782_049057.jpg',
    '/images/202506131148063470_040198.jpg',
    '/images/202506181016030255_052252.jpg',
    '/images/202506200549521422_089342.jpg'
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
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
  const navigate = useNavigate();
  const items = Array.from({ length: 9 }, (_, i) => i + 1);
  const imageSrc = '/images/goods.jpg';

  const handleClick = () => {
    navigate('/goods');
  };

  return (
    <div className="recommendation-grid">
      {items.map((item) => (
        <div
          key={item}
          className="product-box"
          onClick={handleClick}
          style={{ cursor: 'pointer' }}
        >
          <div className="product-image-area">
            <img src={imageSrc} alt={`상품-${item}`} className="product-image" />
          </div>
          <div className="product-desc">
            <div className="product-brand"><b>니썸</b></div>
            <div className="product-info">
              [압도적 판매량🔥, 누적 40만장 기록🌊]<br />
              세인트부츠컷데님 - 9color {item}
            </div>
            <div className="product-price">
              <span className="discount">50%</span> 15,000원
            </div>
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

function BottomNav() {
  return (
    <nav className="bottom-nav">
      <div className="nav-item">
        <FiHome className="nav-icon" />
        <span>홈</span>
      </div>
      <div className="nav-item">
        <FiMenu className="nav-icon" />
        <span>카테고리</span>
      </div>
      <div className="nav-item">
        <FiHeart className="nav-icon" />
        <span>찜</span>
      </div>
      <div className="nav-item">
        <FiUser className="nav-icon" />
        <span>마이페이지</span>
      </div>
    </nav>
  );
}

export default function Home() {
  return (
    <div className="layout">
      <Header />
      <AutoSlider />
      <CircleButtonBanner />
      <CategoryBanner />
      <RecommendationTitle />
      <RecommendationGrid />
      <BottomNav />
    </div>
  );
}
