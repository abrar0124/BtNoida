import React from "react";
import { Row, Col } from "react-bootstrap";

const DCSVendors = ({ selectedVendors }) => {
  return (
    <div
      className="vh-100 d-flex flex-column align-items-start text-start p-5"
      style={{
        backgroundImage: "url('/Images/DCS.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
      }}
    >
      {/* Selected Vendors Heading Left-aligned */}
      <p className="fw-bold fs-4 text-start w-100">Selected DCS Vendors</p>

      <Row className="w-100 d-flex flex-column">
        {selectedVendors.length > 0 ? (
          selectedVendors.map((vendor, index) => (
            <Col key={index} className="mb-3" style={{ width: "200px" }}>
              <div
                className="vendor-box p-3"
                style={{
                  border: "2px solid white",
                  borderRadius: "10px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "10px",
                  width: "200px", // Ensures uniform width for all boxes
                }}
              >
                <span
                  className="flag-icon"
                  style={{
                    fontSize: "2em",
                    minWidth: "40px",
                    textAlign: "center",
                  }}
                >
                  {vendor.flag}
                </span>
                <span>{vendor.name}</span>
              </div>
            </Col>
          ))
        ) : (
          <p className="text-start w-100">No vendors selected</p>
        )}
      </Row>
    </div>
  );
};

export default DCSVendors;
