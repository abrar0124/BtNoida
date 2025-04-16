import { Breadcrumb, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Mobiledata from "./Selfcomponents/Mobiledata";
import Text from "./Text";

function Mobileapp() {
  return (
    <>
      <Container className="p-2">
        <Breadcrumb style={{ marginTop: "7%" }}>
          <Link to="/" className="text-decoration-none text-dark fs-4">
            Home
          </Link>
          <Breadcrumb.Item active className="fs-4 ms-3 ">
            <span className="me-4"> /</span>
            Mobile Application
          </Breadcrumb.Item>
        </Breadcrumb>
        <Text
          type={"p"}
          content={"Mobile Applications"}
          className="fs-1 fw-medium my-4"
        />

        <Text
          type={"p"}
          content={`Mobile applications have improved passenger experience dramatically
          over recent years. Travellers that are willing to handle their travel
          cycle at their convenience can check-in, get boarding passes, and
          choose desired seats by using Mobile applications. Meanwhile, airline
          and airport authorities/agents use mobile technology to streamline
          their processes, reduce costs and enhance efficiencies. On this page,
          DCS.aero provides some new, innovative, and robust mobile applications
          that are useful for airlines, and ground handlers.`}
          className="fs-5  lh-lg"
        />
        <div className="d-flex gap-2">
          <Text
            type={"Link"}
            content={"See more info"}
            className="p-3 fs-5 rounded custom-button"
          />
          <Text
            type={"Link"}
            content={"See FAQ"}
            className="p-3 fs-5 rounded custom-buttons"
          />
        </div>
      </Container>
      <Mobiledata />
    </>
  );
}
export default Mobileapp;
