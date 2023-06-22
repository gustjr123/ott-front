import React from "react";
import ApiComponent from "./component/api";
import VideoComponent from "./component/video";
import TokenComponent from "./component/token";

const App = () => {
  return (
    <div>
      <h1>영상 List 요청</h1>
      <ApiComponent />

      <h1>Token 및 영상링크 요청</h1>
      <TokenComponent />

      <h1>동영상 재생</h1>
      <VideoComponent />
    </div>
  );
};

export default App;
