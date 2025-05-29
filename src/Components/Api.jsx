import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginUsers,
  restoreSession,
  setPassword,
  setUsername,
} from "./Authslice/Authslice";
import Footer2 from "./HomeData/Footer2";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username, password, message } = useSelector((state) => state.auth);

  useEffect(() => {
    const storeddata = JSON.parse(localStorage.getItem("loginData"));
    if (storeddata) {
      dispatch(restoreSession(storeddata));
    }
  }, [dispatch]);

  const handleLogin = async () => {
    await dispatch(loginUsers({ username, password }));
    navigate("/portfolio");
  };

  return (
    <>
      <div className="mt-[10%] ml-[30%] p-5">
        <h2 className="font-serif">Login</h2>

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
            message.includes("✅") ? "text-green-600" : "text-red-600"
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
