import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "../Header";
import "./customscss.scss";
import Text from "../Text";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Authslice/Authslice";
import { useNavigate } from "react-router-dom";
const Bgpic = () => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("loginData");
    dispatch(logout());
    navigate("/login");
  };

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
                  <Text
                    type={"h1"}
                    content={
                      <>
                        Departure Control
                        <br />
                        System
                      </>
                    }
                  />

                  <Text
                    type="p"
                    content={`Departure Control System (DCS) is developed to automate all                      processes related to the airline management operations
                    which is introduced as a way of cost reduction and safety
                    growth by connecting check-in functions with load control
                    and aircraft mass and balance.`}
                    className="fs-6"
                  />

                  <Text
                    type={"Link"}
                    content={"Discover Venders"}
                    className="p-3  rounded  custom-button"
                  />
                  <div
                    className="mt-5 bg-dark p-2"
                    style={{
                      wordBreak: "break-word",
                    }}
                  >
                    <h2 className=" text-warning" style={{ fontSize: "20px" }}>
                      {" "}
                      Api response:
                    </h2>
                    <p style={{ fontSize: "15px" }}>{token}</p>
                  </div>

                  <button
                    onClick={handleLogout}
                    style={{
                      marginTop: "10px",
                      padding: "10px 20px",
                      width: "60%",
                      fontSize: "16px",
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Logout
                  </button>
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
