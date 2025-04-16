import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer2 from "../HomeData/Footer2";
import Text from "../Text";

const Login = () => {
  // ✅ Default values set for testing
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
  const [message, setMessage] = useState("");
  const [userData, setUserData] = useState(null); // Local state for storing the response

  // ✅ Retrieve stored data from localStorage when the component mounts
  useEffect(() => {
    const storedLoginData = JSON.parse(localStorage.getItem("loginData"));
    if (storedLoginData) {
      setUserData(storedLoginData); // Parse and set the login data from localStorage
      setMessage("✅ Logged in from previous session!");
    }
  }, []);

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

      localStorage.setItem("loginData", JSON.stringify(response.data));
      setUserData(response.data); // Save response in local state
      // Save token and entire response in localStorage

      console.log("Login Success:", response.data);
    } catch {
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
        <Text type={"h2"} content={"Login"} />
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

        <Text
          type={"p"}
          content={
            <>
              <p
                style={{
                  marginTop: "15px",
                  color: message.includes("Success") ? "green" : "red",
                }}
              >
                {message}
              </p>
            </>
          }
        />

        {/* Display the response data in UI (if available) */}
        {userData && (
          <Text
            type={"p"}
            content={
              <>
                <p
                  style={{
                    padding: "10px",
                    borderRadius: "5px",
                    marginBottom: "20px",
                    fontSize: "14px",
                    wordBreak: "break-word",
                    width: "60%",
                  }}
                >
                  <strong style={{ color: "green", fontSize: "16px" }}>
                    Api,s Response:
                  </strong>

                  {userData.token}
                </p>
              </>
            }
          />
        )}
      </div>
      <Footer2 />
    </>
  );
};

export default Login;
