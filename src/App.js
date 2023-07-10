import React from "react";
import ApiComponent from "./component/api";
//import CookieComponent from "./component/cookie";
import logo from "./assets/images/logo.png";
import "./styles/App.css";

const App = () => {
  return (
    <div className="app-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <div className="content-container">
        <h1 className="title">영상 List</h1>
        <ApiComponent />

        {/* <h1 className="title">Cookie 생성 및 링크 새창</h1>
        <CookieComponent /> */}
      </div>
    </div>
  );
};

export default App;
