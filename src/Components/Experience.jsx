import React from "react";
import "./sassfile.scss";
import { BriefcaseFill } from "react-bootstrap-icons";
import Title from "./layout/Title";
import { Image } from "react-bootstrap";
import Body from "./layout/Body";

const Experience = () => {
  return (
    <section id="experience" className="exp-section">
      <Title level={2} className="text-black fw-bold text-center">
        <span className="spanish">
          <BriefcaseFill />
        </span>
        Experience
      </Title>

      <Image className="border-img" src="/Images/tik.png" />
      <div className="experience-border">
        <div className="edu2">
          Senior Technical Program Manager
          <Body variant={5}>From Sep 2019</Body>
          <Body variant={6}>Asta CRS Inc - Frisco, TX</Body>
        </div>
      </div>
      <Image className="border-img" src="/Images/tik.png" />
      <div className="experience-border">
        <div className="edu2">
          Software Engineering Associate Manager
          <Body variant={5}>Dec 2010 to Sep 2019</Body>
          <Body variant={6}>Accenture - West Palm Beach, FL</Body>
        </div>
      </div>
      <Image className="border-img" src="/Images/tik.png" />
      <div className="experience-border">
        <div className="edu2">
          Module Lead
          <Body variant={5}>Jun 2008 to Dec 2010</Body>
          <Body variant={6} className="exps3">
            Zenith Infotech Ltd. - Mumbai, India
          </Body>
        </div>
      </div>
      <Image className="border-img" src="/Images/tik.png" />
      <div className="experience-border">
        <div className="edu2">
          Senior Software Engineer
          <Body variant={5}>Jan 2008 to Jun 2008</Body>
          <Body variant={6} className="exps3">
            IDS Software Ltd. - Bangalore, India
          </Body>
        </div>
      </div>
      <Image className="border-img" src="/Images/tik.png" />
      <div className="experience-border">
        <div className="edu2">
          Software Associate
          <Body variant={5}>Dec 2006 to Dec 2007</Body>
          <Body variant={6}>
            SBI Life Insurance Co. Ltd. - Coimbatore, India
          </Body>
        </div>
      </div>
      <Image className="border-img" src="/Images/tik.png" />
      <div className="experience-border">
        <div className="edu2">
          Software Engineer
          <Body variant={5}>May 2006 to Dec 2006</Body>
          <Body variant={6}>India Trimmings Pvt. Ltd. | Coimbatore, India</Body>
        </div>
      </div>
    </section>
  );
};

export default Experience;
