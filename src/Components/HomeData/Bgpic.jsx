import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../Header";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Authslice/Authslice";
import { Link, useNavigate } from "react-router-dom";
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
        className="bg-center bg-cover "
        style={{
          backgroundImage: "url('Images/bg2.avif')",
        }}
      >
        <section>
          <div className="w-full h-[900px] flex pt-[15%] items-center bg-black/50">
            <Container>
              <Row>
                <Col md={5}>
                  <p className="font-normal text-white leading-snug text-5xl">
                    Departure Control
                    <br />
                    System
                  </p>

                  <p className="text-gray-100 font-normal text-lg leading-9">
                    Departure Control System (DCS) is developed to automate all
                    processes related to the airline management operations,
                    which is introduced as a way of cost reduction and safety
                    growth by connecting check-in functions with load control
                    and aircraft mass and balance.
                  </p>

                  <Link
                    to={""}
                    className=" inline-block    p-3   rounded text-white no-underline bg-blue-500 border-2 border-transparent hover:!text-blue-500  hover:bg-white hover:border-[#0880e2] transition duration-300 ease-in-out"
                  >
                    Discover Venders
                  </Link>

                  <div className="mt-5 p-2 break-words">
                    <h2 className="text-green-500 text-[20px]">
                      Api response:
                    </h2>
                    <p className="text-lg text-white">{token}</p>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="mt-2 px-5 py-3 w-1/2  bg-red-500 text-white  font-bold rounded transition duration-300 hover:bg-red-700 "
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
