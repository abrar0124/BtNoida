import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer2 from "./HomeData/Footer2";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username || !password) {
      setError("Please fill both username and password.");
      return;
    }

    const passwordrequirments =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/;

    if (!passwordrequirments.test(password)) {
      setError(
        "Password must be at least 8 characters, include an uppercase letter, number, and special character."
      );
      return;
    }

    // Validation passed – navigate to /portfolio
    setError("");
    navigate("/portfolio");
  };

  return (
    <>
      <div className="mt-[10%] ml-[30%] p-5">
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-[60%] p-2 mb-2 border border-black"
        />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-[60%] p-2 mb-2 border border-black"
        />
        <br />
        <button
          onClick={handleLogin}
          className="w-[60%] py-2 px-4 text-white font-bold bg-green-600 hover:bg-green-700 transition"
        >
          Login
        </button>

        {error && (
          <p className="text-red-600 font-medium w-[60%] mt-2">{error}</p>
        )}
      </div>
      <Footer2 />
    </>
  );
};

export default Login;
