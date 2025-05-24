import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import About from "../Components/About";
import Education from "../Components/Education";
import Header from "../Components/Header";
import Footer3 from "../Components/Footer2";

const PortfolioPage = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 200) {
          currentSection = section.getAttribute("id");
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      <div className="main-layout d-flex">
        <Sidebar activeSection={activeSection} />
        <div className="content-area p-3">
          <section id="about" className="section-padding">
            <About />
          </section>
          <section id="education" className="section-padding">
            <Education />
          </section>

          <Footer3 />
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
