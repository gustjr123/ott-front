import React, { useState } from "react";
import "../styles/ApiComponent.css"; // CSS 파일 임포트

const Card = ({ value }) => {
  return (
    <div className="card">
      <p>{value}</p>
    </div>
  );
};

const ApiComponent = () => {
  const [apiUrl, setApiUrl] = useState("http://localhost:5000/test");
  const [apiData, setApiData] = useState(null);

  const handleApiUrlChange = (event) => {
    setApiUrl(event.target.value);
  };

  const handleApiRequest = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      setApiData(data?.body?.data);
      console.log(data);
    } catch (error) {
      console.error("API 요청 에러:", error);
    }
  };

  return (
    <div className="api-component">
      <div className="input-container">
        <input type="text" value={apiUrl} onChange={handleApiUrlChange} />
        <button onClick={handleApiRequest}>OK</button>
      </div>
      <div className="data-list-container">
        {apiData ? (
          Array.isArray(apiData) ? (
            <ul className="data-list">
              {apiData.map((value, index) => (
                <li key={index}>
                  <Card value={value} />
                </li>
              ))}
            </ul>
          ) : (
            <div>
              <p>Data is Something wrong</p>
            </div>
          )
        ) : (
          <div>
            <p>Can't Get items. Check your URL!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApiComponent;
