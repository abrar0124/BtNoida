import React, { useEffect } from "react";
import "./sassfile.scss";
import { FaGraduationCap } from "react-icons/fa";
import { Image } from "react-bootstrap";
import Title from "./layout/Title";
import Body from "./layout/Body";
const Education = () => {
  return (
    <section id="education" className="edu-section p-6 text-black">
      <Title level={2} className="text-black fw-bold text-center">
        <span className="spanish">
          <FaGraduationCap />
        </span>
        Education
      </Title>

      <Body variant={3} className="text-black fw-bold">
        <span className="custom-font-serif">
          Bachelor of Software Engineering (BSSE)
        </span>
        <p className="pic text-black fw-normal">
          University of Gujrat, Punjab, Pakistan
        </p>
      </Body>

      <Body variant={4} className="text-black  fw-bold">
        <span className="custom-font-serif">
          FSC Pre-Engineering (FSC Pre-Eng)
        </span>
        <p className="pic text-black fw-normal">
          Punjab College Gujrat. Gujrat, Pakistan
        </p>
      </Body>
    </section>
  );
};

export default Education;
