import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom"; // Import NavLink
import "./Header.scss"; // Custom CSS file

const Header = () => {
  const [activeLink, setActiveLink] = useState("/");

  return (
    <Navbar
      className=" bg-dark p-3"
      variant="dark"
      style={{
        position: "fixed",
        width: "100%",
        zIndex: "1",
        bottom: "89%",
      }}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand as={NavLink} to="/">
          <img src="/Images/logo.png" alt="Logo" height="40" />
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto gap-2">
            {[
              { name: "Home", path: "/" },
              { name: "DCS Solutions", path: "/dcs-solutions" },
              { name: "Solutions", path: "/solutions" },
              { name: "Hardware", path: "/hardware" },
              { name: "BRS Hardware", path: "/brs-hardware" },
              { name: "Company A - Z", path: "/company-a-z" },
              { name: "Events", path: "/events" },
              { name: "Mobile Apps", path: "/mobile-apps" },
              { name: "APIs", path: "/api" },
              { name: "Contact Us", path: "/contact" },
            ].map((item) => (
              <Nav.Link
                key={item.path}
                as={NavLink}
                to={item.path}
                className="nav-link-custom"
                activeClassName="active" // Bootstrap will handle the active class
                onClick={() => setActiveLink(item.path)}
              >
                {item.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
