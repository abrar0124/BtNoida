import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const vendors = [
  { name: "ABOMIS", flag: "🇨🇦" },
  { name: "Accelaero", flag: "🇦🇪" },
  { name: "Airline Choice", flag: "🇺🇸" },
  { name: "Avtra", flag: "🇸🇬" },
  { name: "Bravo", flag: "🇹🇷" },
  { name: "Crane", flag: "🇬🇧" },
  { name: "Damarel", flag: "🇬🇧" },
  { name: "Havatech", flag: "🇹🇷" },
  { name: "Ink Innovation", flag: "🇪🇸" },
  { name: "Kiu", flag: "🇺🇾" },
  { name: "RADIXX", flag: "🇺🇸" },
  { name: "RESA", flag: "🇫🇷" },
  { name: "Zamar", flag: "🇨🇭" },
  { name: "Videcom", flag: "🇬🇧" },
  { name: "Sabre", flag: "🇺🇸" },
  { name: "Arinc", flag: "🇺🇸" },
  { name: "iPort", flag: "🇳🇱" },
  { name: "A-Ice", flag: "🇮🇹" },
  { name: "Amadeus", flag: "🇪🇸" },
  { name: "Integral", flag: "🇩🇪" },
  { name: "Travsys", flag: "🇳🇱" },
  { name: "Flight Solutions", flag: "🇬🇧" },
];

const VendorList = () => {
  return (
    <div
      className="bg-dark"
      style={{
        color: "white",
      }}
    >
      <>
        <h2 className="text-center py-5">DCS Vendors</h2>
        <Row className="w-100">
          {vendors.map((vendor, index) => (
            <Col md={2} className="mb-3">
              <div className="vendor-box">
                <span className="flag-icon ">{vendor.flag}</span>
                <span>{vendor.name}</span>
              </div>
            </Col>
          ))}
        </Row>
      </>

      <style>
        {`
          .vendor-box {

            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 10px;
            padding: 8px 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            
          }
          .flag-icon {
            font-size: 20px;
          }
        `}
      </style>
    </div>
  );
};

export default VendorList;
