import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Text from "../Text";

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
      <Text
        type={"p"}
        content={`
        This website uses cookies to improve your experience. Click
      Accept to allow us to use cookies`}
        className="m-0 fs-6"
      />

      <Text
        type={"a"}
        content={"settings"}
        className="text-white text-decoration-underline"
      />
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
