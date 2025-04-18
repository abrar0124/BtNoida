import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import Footer2 from "../HomeData/Footer2";
import Text from "../Text";

import {
  login,
  restoreSession,
  setMessage,
  setPassword,
  setUsername,
} from "../Authslice/Authslice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { username, password, message } = useSelector((state) => state.auth);

  useEffect(() => {
    const storeddata = JSON.parse(localStorage.getItem("loginData"));
    if (storeddata) {
      dispatch(restoreSession(storeddata));
    }
  }, []);

  // const handleLogin = async () => {
  //   try {
  //     const credentials = { username, password };
  //     const response = await axios.post(
  //       "https://fakestoreapi.com/auth/login",
  //       credentials
  //     );
  //     dispatch(login(response.data));
  //     localStorage.setItem("loginData", JSON.stringify(response.data));
  //     console.log(response.data);
  //     navigate("/bgpic");
  //   } catch {
  //     dispatch(setMessage("❌ Login Failed! Check username/password."));
  //   }
  // };

  const handleLogin = async () => {
    try {
      const credentials = { username, password };
      const response = await axios.post(
        "https://fakestoreapi.com/auth/login",
        credentials
      );
      dispatch(login(response.data));
      localStorage.setItem("loginData", JSON.stringify(response.data));
      console.log(response.data);
      navigate("/bgpic");
    } catch {
      dispatch(setMessage("login failed"));
    }
  };

  return (
    <>
      <div style={{ marginTop: "10%", marginLeft: "30%", padding: "20px" }}>
        <Text type={"h2"} content={"Login"} />
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => dispatch(setUsername(e.target.value))}
          style={{ width: "60%", padding: "10px", marginBottom: "10px" }}
        />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => dispatch(setPassword(e.target.value))}
          style={{ width: "60%", padding: "10px", marginBottom: "10px" }}
        />
        <br />
        <button
          onClick={handleLogin}
          style={{
            padding: "10px 20px",
            width: "60%",
            fontSize: "16px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            fontWeight: "bold",
          }}
        >
          Login
        </button>

        <Text
          type={"p"}
          content={
            <p
              style={{
                marginTop: "15px",
                color: message.includes("Success") ? "green" : "red",
              }}
            >
              {message}
            </p>
          }
        />
      </div>
      <Footer2 />
    </>
  );
};

export default Login;
