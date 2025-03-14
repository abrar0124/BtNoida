import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "../Header";

const Bgpic = () => {
  return (
    <>
      <Header />

      <div
        className="vh-100 d-flex flex-column justify-content-center text-center"
        style={{
          backgroundImage: "url('Images/bg2.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <section className="hero-section">
          <div className="overlay">
            <Container>
              <Row>
                <Col md={5} className="text-white text-start lh-lg fs-5 mt-5">
                  <h1>Departure Control System</h1>
                  <p>
                    Departure Control System (DCS) is developed to automate all
                    processes related to the airline management operations,
                    which is introduced as a way of cost reduction and safety
                    growth by connecting check-in functions with load control
                    and aircraft mass and balance.
                  </p>
                  <Button variant="primary">Discover Vendors</Button>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </div>
    </>
  );
};

export default Bgpic;
