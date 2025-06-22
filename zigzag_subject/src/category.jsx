// category.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

export default function Category() {
  const { type } = useParams();

  return (
    <div style={{ padding: '100px 20px' }}>
      <h1>카테고리 페이지</h1>
      <p>선택된 카테고리: <b>{type}</b></p>
    </div>
  );
}
