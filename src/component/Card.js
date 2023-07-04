import React from "react";

const Card = ({ value, url }) => {
  return (
    <div className="card">
      <img src={url} alt="Image" className="card-image" />
      <p>{value}</p>
    </div>
  );
};

export default Card;
