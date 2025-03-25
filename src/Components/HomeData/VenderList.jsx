import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import vendors from "./FlagArray";

const VendorList = ({ onSelectionChange }) => {
  const [selectedVendors, setSelectedVendors] = useState([]);

  useEffect(() => {
    const storedVendors = JSON.parse(localStorage.getItem("selectedVendors"));
    if (storedVendors) {
      setSelectedVendors(storedVendors);
      onSelectionChange(storedVendors);
    }
  }, []);

  const handleSelection = (vendor) => {
    let updatedSelection = [...selectedVendors];

    if (updatedSelection.includes(vendor)) {
      updatedSelection = updatedSelection.filter((v) => v !== vendor);
    } else {
      if (updatedSelection.length < 5) {
        updatedSelection.push(vendor);
      } else {
        alert("You can select only 5 vendors.");
        return;
      }
    }
    setSelectedVendors(updatedSelection); // ✅ State Update
    localStorage.setItem("selectedVendors", JSON.stringify(updatedSelection)); // ✅ localStorage Update
    onSelectionChange(updatedSelection); // ✅ Callback Function
  };

  return (
    <div className="bg-dark text-white p-3">
      <h2 className="text-center py-3">Select DCS Vendors</h2>
      <Row className="w-100">
        {vendors.map((vendor, index) => (
          <Col key={index} md={2} className="mb-3">
            <div
              className={`vendor-box ${
                selectedVendors.includes(vendor) ? "selected" : ""
              }`}
              onClick={() => handleSelection(vendor)}
              style={{ cursor: "pointer" }}
            >
              <span className="flag-icon">{vendor.flag}</span>
              <span>{vendor.name}</span>
            </div>
          </Col>
        ))}
      </Row>

      <style>
        {`
          .vendor-box {
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 10px;
            padding: 8px 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }
          .selected {
            border: 2px solid white;
          }
          .flag-icon {
            font-size: 2em;
            margin-right: 5px;
          }
        `}
      </style>
    </div>
  );
};

export default VendorList;
