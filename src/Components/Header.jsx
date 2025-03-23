import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import HeaderArray from "./HeaderArray";
const Header = () => {
  const [hoveredDiv, setHoveredDiv] = useState(null);
  return (
    <>
      <Navbar
        className="bg-dark p-3"
        variant="dark"
        style={{
          position: "fixed",
          bottom: "89%",
          width: "100%",
          zIndex: "1000",
          cursor: "pointer",
        }}
      >
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <img src="/Images/logo.png" alt="Logo" height="40" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto gap-2">
              {HeaderArray.map((item) => (
                <div
                  key={item.path}
                  className="nav-item position-relative"
                  onMouseEnter={() => setHoveredDiv(item.name)}
                  onMouseLeave={() => setHoveredDiv(null)}
                >
                  <Nav.Link
                    as={NavLink}
                    to={item.path}
                    className="nav-link-custom "
                  >
                    {item.name}
                  </Nav.Link>
                  {hoveredDiv === item.name && item.subMenu && (
                    <div
                      className=" position-absolute bg-dark text-white p-4"
                      style={{ width: "280px", marginTop: "19%" }}
                    >
                      {item.subMenu.map((sub) => (
                        <Nav.Link
                          key={sub.path}
                          as={NavLink}
                          to={sub.path}
                          className="d-block text-white subMenu "
                        >
                          {sub.name}
                        </Nav.Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
