import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser,
} from "amazon-cognito-identity-js";
import "../styles/LoginComponent.css";
import logo from "../assets/images/logo.png";

const poolData = {
  UserPoolId: process.env.REACT_APP_USERPOOL_ID,
  ClientId: process.env.REACT_APP_APPCLIENT_ID,
};

const userPool = new CognitoUserPool(poolData);

const LoginComponent = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [cognitoUser, setCognitoUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = {
      Username: username,
      Pool: userPool,
    };
    setCognitoUser(new CognitoUser(userData));
  }, [username]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const userData = {
      Username: username,
      Pool: userPool,
    };
    setCognitoUser(new CognitoUser(userData));

    const authenticationData = {
      Username: username,
      Password: password,
    };
    console.log(authenticationData);
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        console.log("Login success", result);
        const accessToken = result.getAccessToken().getJwtToken();
        console.log(accessToken);

        // Save accessToken to state or localStorage if needed
        onLogin(accessToken);
        localStorage.setItem("accessToken", accessToken);

        navigate("/", { replace: true });
      },
      onFailure: (err) => {
        console.log("auth err: ", err);
      },
      newPasswordRequired: (userAttributes, requiredAttributes) => {
        console.log("newPass callback");
        setError({ code: "NewPasswordRequiredException" });
      },
    });
  };
  const handleNewPassword = (event) => {
    event.preventDefault();

    cognitoUser.completeNewPasswordChallenge(
      newPassword,
      {},
      {
        onSuccess: (result) => {
          console.log(result);
          const accessToken = result.getAccessToken().getJwtToken();
          console.log(accessToken);

          // Save accessToken to state or localStorage if needed
          onLogin(accessToken);
          localStorage.setItem("accessToken", accessToken);

          navigate("/", { replace: true });
        },
        onFailure: (err) => {
          console.log("newpass err: ", err);
        },
      }
    );
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Logo" className="logo-image" />
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          placeholder="아이디를 입력하세요"
        />
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="비밀번호를 입력하세요"
        />
        <button type="submit" className="login-button">
          로그인
        </button>
        {/* {error && <p>{error}</p>} */}
      </form>
      {error && error.code === "NewPasswordRequiredException" && (
        <form className="login-form" onSubmit={handleNewPassword}>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={newPassword}
            onChange={handleNewPasswordChange}
            placeholder="새로운 비밀번호를 입력하세요"
          />
          <button type="submit" className="login-button">
            변경완료
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginComponent;
