import React from "react";
import ApiComponent from "./component/api";
import VideoComponent from "./component/video";

const App = () => {
  return (
    <div>
      <h1>API 요청</h1>
      <ApiComponent />

      <h1>동영상 재생</h1>
      <VideoComponent />
    </div>
  );
};

export default App;
