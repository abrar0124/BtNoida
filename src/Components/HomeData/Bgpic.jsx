import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "../Header";
import "./customscss.scss";
import { Link } from "react-router-dom";
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
        <section>
          <div className="overlay">
            <Container>
              <Row>
                <Col md={5} className="text-white text-start lh-lg fs-5 mt-5 m">
                  <h1>
                    Departure Control <br /> System
                  </h1>
                  <p style={{ fontSize: "17px" }}>
                    Departure Control System (DCS) is developed to automate all
                    processes related to the airline management operations,
                    which is introduced as a way of cost reduction and safety
                    growth by connecting check-in functions with load control
                    and aircraft mass and balance.
                  </p>
                  <Link className="p-3  rounded  custom-button">
                    Discover Venders
                  </Link>
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
