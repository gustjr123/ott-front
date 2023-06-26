import React, { useState } from "react";
import "./AdiComponent.css"; // CSS 파일 임포트

const TokenComponent = () => {
  const [apiUrl, setApiUrl] = useState("");
  const [apiData, setApiData] = useState(null);
  const [queryString, setQueryString] = useState("");

  const handleApiUrlChange = (event) => {
    setApiUrl(event.target.value);
  };

  const handleQueryStringChange = (event) => {
    setQueryString(event.target.value);
  };

  const handleApiRequest = async () => {
    try {
      const encodedQueryString = encodeURIComponent(queryString);

      const response = await fetch(`${apiUrl}?path=${encodedQueryString}`);
      const data = await response.json();
      setApiData(data?.body);
      console.log(data?.body);
    } catch (error) {
      console.error("API 요청 에러:", error);
    }
  };

  return (
    <div className="adi-component">
      <div className="input-container">
        <input
          type="text"
          value={apiUrl}
          onChange={handleApiUrlChange}
          placeholder="input api url"
        />
        <input
          type="text"
          value={queryString}
          onChange={handleQueryStringChange}
          placeholder="input video path"
        />
        <button onClick={handleApiRequest}>OK</button>
      </div>
      <ul className="data-list">
        {apiData && (
          <div>
            <p>Access Token: {apiData.accessToken}</p>
            <p>Video Link: {apiData.VideoLink}</p>
          </div>
        )}
      </ul>
    </div>
  );
};

export default TokenComponent;
