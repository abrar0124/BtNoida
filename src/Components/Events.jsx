import EventsArray from "./Selfcomponents/EventsArray";

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
import { Link } from "react-router-dom";
const Events = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [selectyear, setselectyear] = useState(null);
  const [selectmonth, setselectmonth] = useState(null);
  const [selectcontinent, setselectcontinent] = useState(null);
  const [selectcountry, setselectcountry] = useState(null);
  const [selectcatagory, setselectedcatagory] = useState(null);
  let lastMonth = ""; // Pichle month ko track karne ke liye

  // Filter events based on searchQuery
  const FilteredEvents = EventsArray.filter(
    (e) =>
      (searchQuery === null ||
        e.title.toUpperCase().includes(searchQuery.toUpperCase()) ||
        e.title.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectyear === null || selectyear === "All" || e.year === selectyear) &&
      (selectmonth === null ||
        selectmonth === "All Month" ||
        e.month === selectmonth) &&
      (selectcontinent === null ||
        selectcontinent === "All Continents" ||
        e.continent === selectcontinent) &&
      (selectcountry === null ||
        selectcountry === "All Countires" ||
        e.country === selectcountry) &&
      (selectcatagory === null ||
        selectcatagory === "All Catagories" ||
        e.catagory === selectcatagory)
  );
  return (
    <Container className="p-4" style={{ marginTop: "10%" }}>
      <Row>
        {/* Filters Section */}
        <Col md={4}>
          <h4 className="fs-1 fw-normal">Events</h4>
          <Form>
            <div className="d-flex gap-2">
              <div>
                <Form.Group className="mb-3">
                  <Form.Label>Year</Form.Label>
                  <Form.Select
                    className="bg-light p-3 text-center text-muted"
                    style={{ width: "100px" }}
                    onChange={(e) => setselectyear(e.target.value)}
                  >
                    <option>All </option>
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
              </div>
              <div>
                <Form.Group className="mb-3">
                  <Form.Label>Months</Form.Label>
                  <Form.Select
                    className="bg-light p-3 text-muted text-center"
                    style={{ width: "300px" }}
                    onChange={(e) => setselectmonth(e.target.value)}
                  >
                    <option>All Month</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>Octobar</option>
                    <option>November</option>
                    <option>December</option>
                    <option>Junuary</option>
                    <option>Febraury</option>
                    <option>March</option>
                  </Form.Select>
                </Form.Group>
              </div>
            </div>

            <Form.Group className="mb-3">
              <Form.Label>Continent</Form.Label>
              <Form.Select onChange={(e) => setselectcontinent(e.target.value)}>
                <option> All Continents</option>
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
                <option>All Countires</option>
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
                <option>All Catagories</option>
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
        <Col md={8}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </InputGroup>

          {FilteredEvents.length === 0 ? (
            <p>No events found.</p>
          ) : (
            FilteredEvents.map((p, index) => {
              const showMonthHeading = p.month !== lastMonth;
              lastMonth = p.month; // Update last month
              return (
                <div key={index}>
                  {showMonthHeading && (
                    <p className="fw-medium m-4 fs-3 me-5">{p.month}</p>
                  )}
                  <Card className="mb-3 p-3">
                    <Row className="g-0">
                      <Col md={2}>
                        <Card.Img
                          src={p.image}
                          style={{ height: "px", width: "140px" }}
                        />
                      </Col>
                      <Col md={8}>
                        <Card.Body>
                          <Card.Title>{p.title}</Card.Title>
                          <Card.Text>{p.description}</Card.Text>
                          <p className="text-danger">{p.Days}</p>
                          <Link
                            className="text-decoration-none text-dark"
                            style={{ marginLeft: "78%" }}
                          >
                            Details
                          </Link>
                        </Card.Body>
                      </Col>
                      <Col
                        md={2}
                        className="text-center d-flex flex-column justify-content-center"
                      ></Col>
                    </Row>
                  </Card>
                </div>
              );
            })
          )}
        </Col>
      </Row>
    </Container>
  );
};
export default Events;
