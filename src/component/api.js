import React, { useState, useEffect } from "react";
import Card from "./Card";
import RefreshButton from "./RefreshButton";
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

  const handleRefresh = () => {
    handleApiRequest();
  };

  return (
    <div className="api-component">
      {/* <div className="refresh-button-container">
        <RefreshButton onRefresh={handleRefresh} />
      </div> */}
      <div className="data-list-container">
        {apiData ? (
          Array.isArray(apiData) ? (
            <ul className="data-list">
              {apiData.map((value, index) => (
                <li key={index}>
                  <Card
                    value={value}
                    url="https://thumb.mt.co.kr/06/2023/05/2023053111324385625_1.jpg/dims/optimize/"
                  />
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
