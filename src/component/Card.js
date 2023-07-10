// Card.js
import React from "react";
import "../styles/Card.css";

const Card = ({ value, url, onClick }) => {
  const handleCardClick = () => {
    onClick({ value }); // 클릭 이벤트를 상위 컴포넌트로 전달하면서 이미지 정보도 함께 전달합니다.
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <img src={url} alt="Image" className="card-image" />
      <p>{value}</p>
    </div>
  );
};

export default Card;
