import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import vendors from "./FlagArray";

const VendorList = ({ onSelectionChange }) => {
  const [selectedVendors, setSelectedVendors] = useState([]);

  const handleSelection = (vendor) => {
    let updatedSelection = [...selectedVendors];

    if (updatedSelection.includes(vendor)) {
      // Remove if already selected
      updatedSelection = updatedSelection.filter((v) => v !== vendor);
    } else {
      if (updatedSelection.length < 3) {
        // Allow selection only up to 3
        updatedSelection.push(vendor);
      } else {
        alert("You can select only 3 vendors.");
        return;
      }
    }

    setSelectedVendors(updatedSelection);
    onSelectionChange(updatedSelection); // Pass selected vendors to parent
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
            border: 2px solid yellow;
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
