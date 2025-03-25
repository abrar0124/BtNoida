import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem("cookieConsent");
    if (!consentGiven) {
      setShow(true);
    }
  }, []);

  const handleConsent = (consent) => {
    localStorage.setItem("cookieConsent", consent); // ✅ Consent ko store karna
    setShow(false);
  };
  if (!show) return null;
  return (
    <div
      className="w-100 text-white p-2 d-flex align-items-center justify-content-center flex-wrap"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <p className="m-0 fs-6">
        This website uses cookies to improve your experience. Click{" "}
        <strong>Accept</strong> to allow us to use cookies.{" "}
        <a href="#" className="text-white text-decoration-underline">
          settings
        </a>
        .
      </p>
      <div>
        <Button
          className="m-1 "
          variant="primary"
          style={{ borderRadius: "45%" }}
          onClick={() => handleConsent("accepted")}
        >
          Accept
        </Button>
        <Button
          className="m-1 "
          variant="primary"
          style={{ borderRadius: "45%" }}
          onClick={() => handleConsent("accepted")}
        >
          Reject
        </Button>
        <Button
          className="p-0  border"
          variant="light"
          onClick={() => handleConsent("close")}
          style={{
            borderRadius: "50%",
            width: "32px",
            height: "32px",
          }}
        >
          ✕
        </Button>
      </div>
    </div>
  );
};

export default CookieConsent;
