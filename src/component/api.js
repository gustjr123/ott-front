// api.js
import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useCookies } from "react-cookie";
import "../styles/ApiComponent.css";

const ApiComponent = ({ accessToken }) => {
  const [apiData, setApiData] = useState(null);
  const [cookies, setCookie] = useCookies([
    "CloudFront-Policy",
    "CloudFront-Signature",
    "CloudFront-Key-Pair-Id",
  ]);

  const handleApiRequest = async () => {
    try {
      const response = await fetch("https://web.sehee.shop/prod/list", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();

      setApiData(data?.body?.data);
      console.log(data);
    } catch (error) {
      setApiData(null);
    }
  };

  useEffect(() => {
    handleApiRequest();
  }, [accessToken]);

  const handleImageClick = (imageInfo) => {
    const { video_path } = imageInfo["value"];
    saveCookie("/" + video_path); // 이미지 클릭 시 쿠키 저장 함수 호출
  };

  const saveCookie = (value) => {
    const apiUrl = "https://web.sehee.shop/prod/cookie";
    const url = `${apiUrl}?path=${encodeURIComponent(value)}`;

    fetch(url, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        const { Cookie, /* Domain, */ Link, VideoLink } = data.body;

        console.log("This is Cookie", Cookie);

        setCookie("CloudFront-Policy", Cookie.Policy, {
          domain: ".sehee.shop",
          path: "/",
          secure: true,
        });

        setCookie("CloudFront-Signature", Cookie.Signature, {
          domain: ".sehee.shop",
          path: "/",
          secure: true,
        });

        setCookie("CloudFront-Key-Pair-Id", Cookie.KeyPair, {
          domain: ".sehee.shop",
          path: "/",
          secure: true,
        });

        const linkpath = encodeURIComponent(VideoLink);
        window.open(`${Link}?link=${linkpath}`);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="api-component">
      <div className="data-list-container">
        {apiData !== null ? (
          Array.isArray(apiData) ? (
            <ul className="data-list">
              {apiData.map((value, index) => (
                <li key={index}>
                  <Card
                    value={value.name}
                    url={value.thumbnail_path}
                    onClick={() => handleImageClick({ value })}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <div>
              <p className="api-error">Data is Something wrong</p>
            </div>
          )
        ) : (
          <div>
            <p className="api-error">Can't Get items. Check your URL!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApiComponent;
