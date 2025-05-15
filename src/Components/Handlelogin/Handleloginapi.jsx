import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import Footer2 from "../HomeData/Footer2";

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
      <div className="mt-[10%] ml-[30%] p-5">
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => dispatch(setUsername(e.target.value))}
          className="w-[60%] p-2 mb-2 border border-black"
        />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => dispatch(setPassword(e.target.value))}
          className="w-[60%] p-2 mb-2 border border-black"
        />
        <br />
        <button
          onClick={handleLogin}
          className="w-[60%] py-2 px-4 text-white font-bold bg-green-600 hover:bg-green-700 transition"
        >
          Login
        </button>
        <p
          className={`mt-4 ${
            message.includes("Success") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      </div>
      <Footer2 />
    </>
  );
};

export default Login;
