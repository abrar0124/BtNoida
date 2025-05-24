import React, { useState } from "react";
import { FaBars, FaUser, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import "./sassfile.scss";
import PrimaryButton from "./layout/PrimaryButton";
import { Image } from "react-bootstrap";
import Body from "./layout/Body";

const sections = [
  { id: "about", label: "Products", icon: <FaUser /> },
  { id: "education", label: "Education", icon: <FaGraduationCap /> },
  { id: "experience", label: "EXPERIENCE", icon: <FaBriefcase /> },
];

const Sidebar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleLinks = () => setIsOpen(!isOpen);

  const handleNavClick = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <div className={`sidebar bg-green-100  ${isOpen ? "mobile-open" : ""}`}>
      <div className="sidebar-header d-flex justify-content-between align-items-center p-3 d-md-none">
        <div className="text-white fw-bold">AdminSidebar</div>
        <PrimaryButton
          button={1}
          className="btn btn-outline-light"
          onClick={toggleLinks}
        >
          <FaBars />
        </PrimaryButton>
      </div>

      {/* Profile section (desktop only) */}
      <div className="profile p-4 d-none d-md-block">
        <Image
          src="/Images/saba.jpeg"
          alt="profile"
          className="w-50"
          style={{ borderRadius: "100%", marginLeft: "25%" }}
        />
        <Body variant={12} className="text-black p1 pt-1 pb-0">
          Admin Sidebar
        </Body>
      </div>

      {/* Links */}
      <div
        className={`sidebar-links ${isOpen ? "d-block" : "d-none"} d-md-block`}
      >
        <div className="m">
          {sections.map((sec) => (
            <div
              key={sec.id}
              className={`link d-flex align-items-center p-2 text-decoration-none cursor-pointer ${
                activeSection === sec.id ? "active-link" : "hover-link"
              }`}
              onClick={() => handleNavClick(sec.id)}
            >
              <span className="icon">{sec.icon}</span>
              <span className="ms-2 label">{sec.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
