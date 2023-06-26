import React from "react";
import ApiComponent from "./component/api";
// import VideoComponent from "./component/video";
// import TokenComponent from "./component/token";
import CookieComponent from "./component/cookie";

const App = () => {
  return (
    <div>
      <h1>영상 List 요청</h1>
      <ApiComponent />

      {/* <h1>Token 및 영상링크 요청</h1>
      <TokenComponent /> */}

      <h1>Cookie 생성 및 링크 새창</h1>
      <CookieComponent />

      {/* <h1>동영상 재생</h1>
      <VideoComponent /> */}
    </div>
  );
};

export default App;
