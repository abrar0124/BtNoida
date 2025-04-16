import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Text from "./Components/Text";

const Contactform = () => {
  return (
    <Container style={{ marginTop: "10%" }}>
      <Row>
        {/* Left Side Text */}
        <Col md={6} className="mb-4">
          <Text type={"h1"} content={"Contact us"} />

          <Text
            type={"p"}
            content={
              <>
                Fill this form to get in touch with our experts, discuss your
                issues, and have them solved by addressing your challenges. All
                fields marked with an <span className="text-danger">*</span> are
                required.
              </>
            }
            className="fs-5"
          />
        </Col>
        {/* Right Side Form */}
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Control type="text" placeholder="* Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Control type="email" placeholder="* Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSubject">
              <Form.Control type="text" placeholder="* Subject" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Control as="textarea" rows={4} placeholder="* Message" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formFile">
              <Form.Control type="file" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contactform;
