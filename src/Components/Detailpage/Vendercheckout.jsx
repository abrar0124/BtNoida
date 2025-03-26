import React, { useState, useEffect } from "react";
import { Table, Form, InputGroup, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  setContinent,
  setCountryname,
  setSearch,
  addVendor,
  updateNewVendor,
  setVendors,
} from "../../redux/VenderSlice";

const VendorTable = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { vendors, search, countryname, continent, newVendor, countries } =
    useSelector((state) => state.vendor);

  // Load vendors from localStorage on mount
  useEffect(() => {
    const storedVendors = JSON.parse(localStorage.getItem("vendors"));
    if (storedVendors) {
      dispatch(setVendors(storedVendors)); // Pehle Redux state clear karein aur naye vendors load karein
    }
  }, []);

  const handleAddVendor = () => {
    console.log("Attempting to add vendor:", newVendor);

    if (newVendor.name && newVendor.continent && newVendor.country) {
      const newVendorData = { id: vendors.length + 1, ...newVendor };
      const updatedVendors = [...vendors, newVendorData];
      localStorage.setItem("vendors", JSON.stringify(updatedVendors)); // Local storage update

      dispatch(setVendors(updatedVendors));
      setShow(false); // Modal close karna
    }
  };
  const filteredVendor = vendors.filter(
    (v) =>
      v.name.toLowerCase().includes(search.toLowerCase()) ||
      (v.continent.toLowerCase().includes(search.toLowerCase()) &&
        (countryname === "All Countries" || v.name === countryname) &&
        (continent === "All Continents" || v.continent === continent))
  );

  const countriesname = vendors.map((v) => v.name);
  const continentsname = vendors.map((v) => v.continent);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between flex-wrap">
        <Button className="btn btn-primary p-3" onClick={() => setShow(true)}>
          Add Your Company
        </Button>
      </div>

      {/* Search & Filters */}
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div style={{ flex: 1, maxWidth: "400px" }}>
          <InputGroup className="rounded shadow-sm">
            <Form.Control
              className="p-3 border-0 bg-light fs-5"
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => dispatch(setSearch(e.target.value))}
            />
            <InputGroup.Text className="bg-light border-0">
              <img src="/Images/search.png" alt="Search" height="18" />
            </InputGroup.Text>
          </InputGroup>
        </div>

        <Form.Select
          className="w-25 border-0 fs-5 p-3"
          value={countryname}
          onChange={(e) => dispatch(setCountryname(e.target.value))}
        >
          <option>All Countries</option>
          {countriesname.map((c, index) => (
            <option key={index}>{c}</option>
          ))}
        </Form.Select>

        <Form.Select
          className="w-25 border-0 fs-5 p-3"
          value={continent}
          onChange={(e) => dispatch(setContinent(e.target.value))}
        >
          <option>All Continents</option>
          {continentsname.map((c, index) => (
            <option key={index}>{c}</option>
          ))}
        </Form.Select>
      </div>

      {/* Vendor Table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Logo</th>
            <th>#</th>
            <th>Name</th>
            <th>Continent</th>
            <th>Country</th>
            <th>Free Trial</th>
            <th>CLC</th>
            <th>Mobile App</th>
            <th>DCS</th>
            <th>IATA Partner</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredVendor.map((v) => (
            <tr key={v.id}>
              <td>
                <img
                  src={v.image}
                  alt={v.name}
                  style={{ height: "50px", width: "50px", objectFit: "cover" }}
                />
              </td>
              <td>{v.id}</td>
              <td>{v.name}</td>
              <td>{v.continent}</td>
              <td>{v.country}</td>
              <td>{v.freeTrial ? "✔️" : "❌"}</td>
              <td>{v.clc ? "✔️" : "❌"}</td>
              <td>{v.mobileApp ? "✔️" : "❌"}</td>
              <td>{v.dcs ? "✔️" : "❌"}</td>
              <td>{v.iataPartner ? "✔️" : "❌"}</td>
              <td>
                <Link>{v.Details}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for Adding Vendor */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Your Company</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Name *</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={newVendor.name}
              onChange={(e) =>
                dispatch(
                  updateNewVendor({ name: "name", value: e.target.value })
                )
              }
              placeholder="Enter country name"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Country *</Form.Label>
            <Form.Select
              name="country"
              value={newVendor.country}
              onChange={(e) =>
                dispatch(
                  updateNewVendor({ name: "country", value: e.target.value })
                )
              }
              required
            >
              <option value="">Select Country</option>
              {countriesname.map((c, index) => (
                <option key={index} value={c}>
                  {c}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Continent *</Form.Label>
            <Form.Select
              name="continent"
              value={newVendor.continent}
              onChange={(e) =>
                dispatch(
                  updateNewVendor({ name: "continent", value: e.target.value })
                )
              }
              required
            >
              <option value="">Select Continent</option>
              {continentsname.map((c, index) => (
                <option key={index} value={c}>
                  {c}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Select your country flag</Form.Label>
            <Form.Select
              name="country"
              value={newVendor.country}
              onChange={(e) => {
                console.log("Selected Country:", e.target.value);
                dispatch(
                  updateNewVendor({ name: "country", value: e.target.value })
                );
              }}
              required
            >
              <option value="">Select Country</option>
              {countries.map((c, index) => (
                <option key={index} value={c.flag}>
                  {c.flag} {c.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleAddVendor}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default VendorTable;
