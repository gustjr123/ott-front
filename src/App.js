import React, { useState } from "react";
import ApiComponent from "./component/api";
import LoginComponent from "./component/LoginComponent";
import logo from "./assets/images/logo.png";
import "./styles/App.css";

const App = () => {
  const [accessToken, setAccessToken] = useState("");

  const handleLogin = (token) => {
    setAccessToken(token);
  };

  return (
    <div className="app-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <div className="content-container">
        {accessToken ? (
          <ApiComponent accessToken={accessToken} />
        ) : (
          <LoginComponent onLogin={handleLogin} />
        )}
      </div>
    </div>
  );
};

export default App;
