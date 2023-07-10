import React from "react";
import { fetchCookie } from "./cookie";
import "../styles/Card.css";

const Card = ({ value }) => {
  const handleCardClick = () => {
    fetchCookie(value); // cookie.js의 fetchCookie 함수를 호출하여 값을 전달합니다.
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <img
        src="https://thumb.mt.co.kr/06/2023/05/2023053111324385625_1.jpg/dims/optimize/"
        alt="Image"
        className="card-image"
      />
      <p>{value}</p>
    </div>
  );
};

export default Card;
