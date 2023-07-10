import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../styles/ApiComponent.css";

const ApiComponent = () => {
  const [apiData, setApiData] = useState(null);

  const handleApiRequest = async () => {
    try {
      const response = await fetch("http://localhost:5000/test");
      const data = await response.json();

      setApiData(data?.body?.data);
      console.log(data);
    } catch (error) {
      console.error("API 요청 에러:", error);
    }
  };

  useEffect(() => {
    handleApiRequest();
  }, []);

  return (
    <div className="api-component">
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
