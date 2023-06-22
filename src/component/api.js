import React, { useState } from "react";
import "./AdiComponent.css"; // CSS 파일 임포트

const AdiComponent = () => {
  const [apiUrl, setApiUrl] = useState("");
  const [apiData, setApiData] = useState(null);

  const handleApiUrlChange = (event) => {
    setApiUrl(event.target.value);
  };

  const handleApiRequest = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setApiData(data);
      console.log(data);
    } catch (error) {
      console.error("API 요청 에러:", error);
    }
  };

  return (
    <div className="adi-component">
      <div className="input-container">
        <input type="text" value={apiUrl} onChange={handleApiUrlChange} />
        <button onClick={handleApiRequest}>OK</button>
      </div>
      <ul className="data-list">
        {apiData && (
          <ul>
            {Object.values(apiData.body).map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        )}
      </ul>
    </div>
  );
};

export default AdiComponent;
