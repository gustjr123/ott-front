// RefreshButton.js
import React, { useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import "../styles/RefreshButton.css";

const RefreshButton = ({ onRefresh }) => {
  const [rotating, setRotating] = useState(false);

  const handleRefresh = () => {
    if (!rotating) {
      setRotating(true);
      onRefresh();
      setTimeout(() => {
        setRotating(false);
      }, 1000);
    }
  };

  return (
    <button
      className={`refresh-button ${rotating ? "rotating" : ""}`}
      onClick={handleRefresh}
    >
      <FiRefreshCw className="refresh-button-icon" />
    </button>
  );
};

export default RefreshButton;
