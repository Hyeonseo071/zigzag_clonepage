import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

function Login() {
  return (
    <div className="login-container">
      <header className="login-header">로그인</header>

      <Link to="/" className="logo">ZIGZAG</Link>

      <div className="signup-promo">
        지금 가입하고<br />
        <span className="highlight">최대 20% 쿠폰 6종</span>을 받아보세요!
      </div>

      <div className="login-buttons">
        <button className="btn kakao">카카오로 3초 만에 시작하기</button>
        <button className="btn phone">휴대폰 번호로 로그인</button>
        <button className="btn email">이메일로 로그인</button>
      </div>

      <div className="divider">또는</div>

      <div className="social-icons">
        <button className="icon apple" />
        <button className="icon google" />
        <button className="icon facebook" />
        <button className="icon naver" />
      </div>

      <div className="footer-links">
        <a href="#">회원가입</a>
        <span>|</span>
        <a href="#">비밀번호 재설정</a>
        <span>|</span>
        <a href="#">계정 찾기</a>
        <span>|</span>
        <a href="#">문의하기</a>
      </div>
    </div>
  );
}

export default Login;
