import React, { useState } from "react";
import { Button } from "react-bootstrap";

const CookieConsent = () => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div
      className=" w-100 bg-white p-2 d-flex align-items-center justify-content-center flex-wrap"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
      }}
    >
      <p className="m-0 text-dark fs-6">
        This website uses cookies to improve your experience. Click{" "}
        <strong>Accept</strong> to allow us to use cookies.{" "}
        <a href="#" className="text-dark text-decoration-underline">
          settings
        </a>
        .
      </p>

      {/* Buttons */}
      <div>
        <Button className="m-1" variant="primary">
          Accept
        </Button>
        <Button className="m-1" variant="primary">
          Reject
        </Button>
        <Button
          className="p-0  border"
          variant="light"
          onClick={() => setShow(false)}
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
