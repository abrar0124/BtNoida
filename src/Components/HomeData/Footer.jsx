import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Text from "../Text";

const Footer = () => {
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
              type={"p"}
              content={`As a consulting company, 
              we offer outstanding solutions,`}
              className="fst-italic w-50 mt-1"
            />
          </Col>
          <Col>
            <Text
              type={"h4"}
              content={"Featured Pages"}
              className="ms-4 text-white"
            />
            <div className="d-flex justify-content-between flex-wrap">
              <ul style={{ listStyle: "none", cursor: "pointer" }}>
                <Text type={"li"} content={"Baggage Reconciliation System"} />
              </ul>
              <ul style={{ listStyle: "none", cursor: "pointer" }}>
                <Text type={"li"} content={"Boarding Gate Reader"} />
              </ul>

              {/* Column 3 */}
              <ul style={{ listStyle: "none", cursor: "pointer" }}>
                <Text type={"li"} content={"Company A-Z"} />
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
