import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  loginUsers,
  restoreSession,
  setPassword,
  setUsername,
} from "../Authslice/Authslice";
import Footer from "../HomeData/Footer";

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
    const resultAction = await dispatch(loginUsers({ username, password }));
    if (loginUsers.fulfilled.match(resultAction)) {
      navigate("/bgpic");
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
      <Footer />
    </>
  );
};

export default Login;
