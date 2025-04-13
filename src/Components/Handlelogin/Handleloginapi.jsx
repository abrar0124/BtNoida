import React, { useState } from "react";
import axios from "axios";
import Footer2 from "../HomeData/Footer2";

const Login = () => {
  // ✅ Default values set for testing
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
  const [message, setMessage] = useState("");
  const handleLogin = async () => {
    try {
      const credentials = {
        username: username,
        password: password,
      };
      const response = await axios.post(
        "https://fakestoreapi.com/auth/login",
        credentials
      );
      setMessage("✅ Login Successful!");
      localStorage.setItem("token", response.data.token); // Save token if needed
      console.log("Login Success:", response.data);
    } catch (error) {
      console.error(
        "Login Failed:",
        error.response ? error.response.data : error.message
      );
      setMessage("❌ Login Failed! Check username/password.");
    }
  };

  return (
    <>
      <div
        style={{
          marginTop: "10%",
          marginLeft: "30%",
          padding: "20px",
        }}
      >
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: "60%", padding: "10px", marginBottom: "10px" }}
        />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "60%", padding: "10px", marginBottom: "10px" }}
        />
        <br />

        <button
          onClick={handleLogin}
          style={{
            padding: "10px 20px",
            width: "60%",
            fontSize: "16px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            fontWeight: "bold",
          }}
        >
          Login
        </button>

        <p
          style={{
            marginTop: "15px",
            color: message.includes("Success") ? "green" : "red",
          }}
        >
          {message}
        </p>
      </div>
      <Footer2 />
    </>
  );
};

export default Login;
