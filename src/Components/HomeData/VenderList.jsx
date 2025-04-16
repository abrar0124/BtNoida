import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import vendors from "./FlagArray";
import Text from "../Text";

const VendorList = ({ onSelectionChange }) => {
  const [selectedVendors, setSelectedVendors] = useState([]);

  useEffect(() => {
    const storedVendors =
      JSON.parse(localStorage.getItem("selectedVendors")) || [];
    setSelectedVendors(storedVendors);
    onSelectionChange(storedVendors);
  }, []);

  const handleSelection = (vendor) => {
    let updatedSelection = [...selectedVendors];

    if (updatedSelection.some((v) => v.name === vendor.name)) {
      updatedSelection = updatedSelection.filter((v) => v.name !== vendor.name);
    } else {
      if (updatedSelection.length < 3) {
        updatedSelection.push(vendor);
      } else {
        alert("You can select only 3 vendors.");
        return;
      }
    }

    setSelectedVendors(updatedSelection);
    localStorage.setItem("selectedVendors", JSON.stringify(updatedSelection));
    onSelectionChange(updatedSelection);
  };

  return (
    <div className="bg-dark text-white p-3">
      <Text
        type={"h2"}
        content={"Select DCS Vendors"}
        className="text-center py-3"
      />
      <Row className="w-100">
        {vendors.map((vendor, index) => (
          <Col key={index} md={2} className="mb-3">
            <div
              className={`vendor-box ${
                selectedVendors.some((v) => v.name === vendor.name)
                  ? "selected"
                  : ""
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
            transition: 0.3s;
          }
          .vendor-box.selected {
            border: 2px solid white;
            background-color: rgba(255, 255, 255, 0.1);
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
