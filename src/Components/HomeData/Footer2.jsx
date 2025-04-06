import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer2 = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#333",
        color: "#ccc",
        padding: "40px 0",
      }}
    >
      <Container>
        <Row>
          <Col md={6}>
            <h2 style={{ color: "#3fa9f5" }}>
              <strong>DCS</strong>
              <span style={{ color: "#fff" }}>aero</span>
            </h2>
            <p className="w-50 mt-1" style={{ fontStyle: "italic" }}>
              As a consulting company, we offer outstanding solutions,
              operational management,and consultancy services to
              airlines,airports, and ground handlers in big, middle, or
              small-sized. DCS.aero is a comprehensive sales and marketing
              platform in the aviation industry. It aims to help research teams
              and individuals find the appropriate solutions for their company
              by connecting them to different trusted vendors around the world.
            </p>
          </Col>
          <Col>
            <h4 className="ms-4 text-white">Featured Pages</h4>
            <div className="d-flex justify-content-between flex-wrap">
              <ul style={{ listStyle: "none", cursor: "pointer" }}>
                <li>Baggage Reconciliation System</li>
                <li>Common Use Platform</li>
                <li>Computer Reservation System</li>
                <li>Departure Control System</li>
                <li>Turnaround Management</li>
                <li>Weight and Balance</li>
              </ul>

              <ul style={{ listStyle: "none", cursor: "pointer" }}>
                <li>Boarding Gate Reader</li>
                <li>Boarding Pass & Bag Tag</li>
                <li>Handheld Scanner</li>
                <li>Mobile Barcode Scanner</li>
                <li>Printer</li>
                <li>Self Bag Drop</li>
                <li>Self Check-in Kiosk</li>
                <li>Wearable Scanner</li>
              </ul>

              {/* Column 3 */}
              <ul style={{ listStyle: "none", cursor: "pointer" }}>
                <li>Company A-Z</li>
                <li>Events</li>
                <li>Mobile App</li>
              </ul>
            </div>
          </Col>
        </Row>
        <p className="fs-4 mt-5 text-white">
          Follow us on Social <span>☎️📱</span>
        </p>
      </Container>
    </div>
  );
};

export default Footer2;
