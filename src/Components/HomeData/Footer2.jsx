import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Text from "../Text";

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
            <Text
              type={"h2"}
              content={
                <>
                  <h2 style={{ color: "#3fa9f5" }}>
                    <strong>DCS</strong>
                    <span style={{ color: "#fff" }}>aero</span>
                  </h2>
                </>
              }
            />

            <Text
              type={"p"}
              content={
                <>
                  <p className="w-50 mt-1" style={{ fontStyle: "italic" }}>
                    As a consulting company, we offer outstanding solutions,
                    operational management,and consultancy services to
                    airlines,airports, and ground handlers in big, middle, or
                    small-sized. DCS.aero is a comprehensive sales and marketing
                    platform in the aviation industry. It aims to help research
                    teams and individuals find the appropriate solutions for
                    their company by connecting them to different trusted
                    vendors around the world.
                  </p>
                </>
              }
            />
          </Col>
          <Col>
            <Text
              type={"h4"}
              content={
                <>
                  <h4 style={{ marginLeft: "10%" }}>Featured Pages</h4>
                </>
              }
              className=" text-white"
            />
            <div className="d-flex justify-content-between flex-wrap">
              <Text
                type={"ul"}
                content={
                  <>
                    <ul style={{ listStyle: "none", cursor: "pointer" }}>
                      <li>Baggage Reconciliation System</li>
                      <li>Common Use Platform</li>
                      <li>Computer Reservation System</li>
                      <li>Departure Control System</li>
                      <li>Turnaround Management</li>
                      <li>Weight and Balance</li>
                    </ul>
                  </>
                }
              />

              <Text
                type={"ul"}
                content={
                  <>
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
                  </>
                }
              />
              {/* Column 3 */}

              <Text
                type={"ul"}
                content={
                  <>
                    <ul style={{ listStyle: "none", cursor: "pointer" }}>
                      <li>Company A-Z</li>
                      <li>Events</li>
                      <li>Mobile App</li>
                    </ul>
                  </>
                }
              />
            </div>
          </Col>
        </Row>

        <Text
          type={"p"}
          content={
            <>
              <p className="fs-4 mt-5 text-white">
                Follow us on Social <span>☎️📱</span>
              </p>
            </>
          }
        />
      </Container>
    </div>
  );
};

export default Footer2;
