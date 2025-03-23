import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  Button,
  InputGroup,
} from "react-bootstrap";

const events = [
  {
    title: "Asian GHI Conference 2025",
    description:
      "GHI returns to SE Asia to supercharge aviation growth The Asian...",
    year: "2025",
    month: "March",
    country: "Japan",
    location: "Da Nang, Vietnam",
    image: "/Images/Asian.png",
    link: "#",
    continent: "Africa",
    catagory: "Air show",
  },
  {
    title: "Inter Airport South East Asia 2025",
    description:
      "The premier airport marketplace to buy, sell, and network with...",
    year: "2019",
    month: "April",
    country: "France",
    continent: "Asia",
    location: "Marina Bay Sands, Singapore",
    image: "/Images/InterAirport.png",
    link: "#",
    catagory: "Award",
  },
];

const Events = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [selectyear, setselectyear] = useState(null);
  const [selectmonth, setselectmonth] = useState(null);
  const [selectcontinent, setselectcontinent] = useState(null);
  const [selectcountry, setselectcountry] = useState(null);
  const [selectcatagory, setselectedcatagory] = useState(null);

  // Filter events based on searchQuery
  const FilteredEvents = events.filter(
    (event) =>
      (searchQuery === null ||
        event.title.toLowerCase().includes(searchQuery)) &&
      (selectyear === null || event.year === selectyear) &&
      (selectmonth === null || event.month === selectmonth) &&
      (selectcontinent === null || event.continent === selectcontinent) &&
      (selectcountry === null || event.country === selectcountry) &&
      (selectcatagory === null || event.catagory === selectcatagory)
  );

  return (
    <Container fluid className="p-4" style={{ marginTop: "10%" }}>
      <Row>
        {/* Filters Section */}
        <Col md={3}>
          <h4 className="fs-1 fw-normal">Events</h4>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Year</Form.Label>
              <Form.Select onChange={(e) => setselectyear(e.target.value)}>
                <option>2025</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Month</Form.Label>
              <Form.Select onChange={(e) => setselectmonth(e.target.value)}>
                <option>All Month</option>
                <option>March</option>
                <option>April</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Continent</Form.Label>
              <Form.Select onChange={(e) => setselectcontinent(e.target.value)}>
                <option>Continent</option>
                <option>Africa</option>
                <option>Asia</option>
                <option>Australia</option>
                <option>Europe</option>
                <option>North America</option>
                <option>South America</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Select onChange={(e) => setselectcountry(e.target.value)}>
                <option>All</option>
                <option>Austria</option>
                <option>Japan</option>
                <option>Africa</option>
                <option>Italy</option>
                <option>France</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                onChange={(e) => setselectedcatagory(e.target.value)}
              >
                <option>All</option>
                <option>Air show</option>
                <option>Award</option>
                <option>Conference</option>
                <option>Exibition</option>
                <option>Expo</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Col>

        {/* Events Section */}
        <Col md={9}>
          <h2>Events</h2>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </InputGroup>
          <h5>March 2025</h5>
          {FilteredEvents.length > 0 ? (
            FilteredEvents.map((event, index) => (
              <Card className="mb-3" key={index}>
                <Row className="g-0">
                  <Col md={2}>
                    <Card.Img src={event.image} alt={event.title} />
                  </Col>
                  <Col md={8}>
                    <Card.Body>
                      <Card.Title>{event.title}</Card.Title>
                      <Card.Text>{event.description}</Card.Text>
                      <Button variant="link">Details &gt;</Button>
                    </Card.Body>
                  </Col>
                  <Col
                    md={2}
                    className="text-center d-flex flex-column justify-content-center"
                  >
                    <div>
                      <strong>{event.location}</strong>
                    </div>
                  </Col>
                </Row>
              </Card>
            ))
          ) : (
            <p>No events found.</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Events;
