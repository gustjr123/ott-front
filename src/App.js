// App.js
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ApiComponent from "./component/api";
import LoginComponent from "./component/LoginComponent";
import Header from "./component/Header";
// import logo from "./assets/images/logo.png";
import "./styles/App.css";

const App = () => {
  const [accessToken, setAccessToken] = useState("");

  // 페이지 로드 시 로컬 스토리지에서 액세스 토큰을 가져와 상태로 설정
  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken) {
      setAccessToken(storedToken);
    }
  }, []);

  const handleLogin = (token) => {
    // 액세스 토큰을 상태로 설정하고 로컬 스토리지에 저장
    setAccessToken(token);
    localStorage.setItem("accessToken", token);
  };

  const handleLogout = () => {
    // 액세스 토큰을 제거하고 로컬 스토리지에서 삭제
    setAccessToken("");
    localStorage.removeItem("accessToken");
  };

  return (
    <div className="app-container">
      {/* <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-image" />
      </div> */}
      <Header />
      <div className="content-container">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Home accessToken={accessToken} onLogout={handleLogout} />
              }
            />
            <Route
              path="/login"
              element={<LoginComponent onLogin={handleLogin} />}
            />
            <Route path="/*" element={<Navigate to="/login" />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

const Home = ({ accessToken, onLogout }) => {
  if (!accessToken) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <ApiComponent accessToken={accessToken} />
      <button onClick={onLogout}>로그아웃</button>
    </>
  );
};

export default App;
