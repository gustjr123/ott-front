import React, { useState } from "react";
import { useCookies } from "react-cookie";

const apiUrl = `https://api.showstone.shop/production/cookie`;

function CookieComponent() {
  const [path, setPath] = useState("");
  const [cookies, setCookie] = useCookies([
    "CloudFront-Policy",
    "CloudFront-Signature",
    "CloudFront-Key-Pair-Id",
  ]);

  const handleInputChange = (event) => {
    setPath(event.target.value);
  };

  const handleOkClick = () => {
    const url = apiUrl + `?path=${encodeURIComponent(path)}`;

    fetch(url, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        const { Cookie, Domain, Link, VideoLink } = data.body;

        console.log("fetchfetch!!!!", Cookie);

        setCookie("CloudFront-Policy", Cookie.Policy, {
          domain: ".showstone.shop",
          path: "/",
          secure: true,
        });

        setCookie("CloudFront-Signature", Cookie.Signature, {
          domain: ".showstone.shop",
          path: "/",
          secure: true,
        });

        setCookie("CloudFront-Key-Pair-Id", Cookie.KeyPair, {
          domain: ".showstone.shop",
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
    <div>
      <input type="text" value={path} onChange={handleInputChange} />
      <button onClick={handleOkClick}>OK</button>
    </div>
  );
}

export default CookieComponent;
