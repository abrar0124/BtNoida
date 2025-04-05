import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import EventsArray from "./Selfcomponents/EventsArray";

const Eventsdetails = () => {
  const { id } = useParams();
  const event = EventsArray.find((e) => e.id == id);

  if (!event) return <p className="text-center mt-5">Event not found.</p>;

  return (
    <Container style={{ marginTop: "7.9%" }}>
      {/* Countdown */}
      <Row className="mb-4">
        <Col>
          <h5>
            <strong>Event Start ➝</strong> 00 : 00 : 00 : 00{" "}
            <small className="text-muted">Days Hours Minutes Seconds</small>
          </h5>
        </Col>
      </Row>

      {/* Main Content */}
      <Row className="g-4">
        {/* Left Side Info Card */}
        <Col md={4}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              {/* Dates */}
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-calendar3 me-2"></i>
                <div>
                  <strong>Thu</strong> <br />
                  03 April ➝ <strong>Fri</strong> <br /> 04 April
                </div>
              </div>

              {/* Location */}
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-geo-alt me-2"></i>
                <div>
                  <strong>
                    {event.country}, {event.continent}
                  </strong>
                </div>
              </div>

              {/* Category & Website */}
              <div className="d-flex align-items-center justify-content-between mb-3">
                <span>
                  <i className="bi bi-folder me-1"></i>
                  <span className="text-success">Summit</span>
                </span>
                <Button variant="primary" size="sm">
                  Website
                </Button>
              </div>

              {/* Visit All Events */}
              <div className="mb-3">
                <i className="bi bi-box-arrow-up-right me-2"></i>
                <a href="/events">Visit All Events</a>
              </div>

              {/* Google Calendar */}
              <Button variant="outline-primary" className="w-100">
                <i className="bi bi-plus-lg me-2"></i>To Google Calendar
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Right Content */}
        <Col md={8}>
          <div className="d-flex mb-4">
            <img
              src={event.image}
              alt={event.title}
              style={{ width: "120px", height: "120px", objectFit: "cover" }}
              className="me-3 rounded"
            />
            <div>
              <h3 className="fw-bold">{event.title}</h3>
            </div>
          </div>
          <p>{event.description}</p>
          <p>
            North America’s aviation sector faces disruption with airline
            mergers, bankruptcies, capacity issues, and booming travel,
            potentially reaching record levels in {event.year}.
          </p>
          <p>
            Political changes in the US may drive significant shifts in
            regulations, funding, environmental policies, and trade, impacting
            domestic and international airlines.
          </p>
          <p>
            The summit offers expert insights, high-level panels, and networking
            opportunities, serving as a pivotal event for shaping the future of
            aviation in the Americas.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Eventsdetails;
