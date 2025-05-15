import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
    <div className="w-full text-white p-2 flex items-center justify-center flex-wrap fixed bottom-0 left-0 bg-black bg-opacity-50">
      <p className="m-0 text-sm">
        This website uses cookies to improve your experience. Click Accept to
        allow us to use cookies
      </p>

      <Link className="text-white underline ml-1">settings</Link>

      <div>
        <Button
          className="m-1"
          variant="primary"
          onClick={() => handleConsent("accepted")}
        >
          Accept
        </Button>
        <Button
          className="m-1 "
          variant="primary"
          onClick={() => handleConsent("rejected")}
        >
          Reject
        </Button>
        <Button
          className="p-0 border border-white rounded-full w-8 h-8"
          variant="light"
          onClick={() => handleConsent("close")}
        >
          ✕
        </Button>
      </div>
    </div>
  );
};

export default CookieConsent;
