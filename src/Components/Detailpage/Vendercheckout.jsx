import React, { useState, useEffect } from "react";
import { Table, Form, InputGroup, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  setContinent,
  setCountryname,
  setSearch,
  updateNewVendor,
  setVendors,
} from "../../redux/VenderSlice";

const VendorTable = () => {
  const [show, setShow] = useState(false);
  const [sortBy, setSortBy] = useState(null);
  const [isAscending, setIsAscending] = useState(true);

  const dispatch = useDispatch();
  const { vendors, search, countryname, continent, newVendor, countries } =
    useSelector((state) => state.vendor);

  useEffect(() => {
    const storedVendors = JSON.parse(localStorage.getItem("vendors"));
    if (storedVendors) {
      dispatch(setVendors(storedVendors));
    }
  }, [dispatch]);

  const handleAddVendor = () => {
    if (newVendor.name && newVendor.continent && newVendor.country) {
      const newVendorData = { id: vendors.length + 1, ...newVendor };
      const updatedVendors = [...vendors, newVendorData];
      localStorage.setItem("vendors", JSON.stringify(updatedVendors));
      dispatch(setVendors(updatedVendors));
      setShow(false);
    }
  };
  const countriesname = vendors.map((v) => v.name);
  const continentsname = vendors.map((v) => v.continent);

  const handleSort = (column) => {
    if (sortBy === column) {
      setIsAscending(!isAscending);
    } else {
      setSortBy(column);
      setIsAscending(true);
    }
  };
  // const sortedVendors = [...vendors].sort((a, b) => {
  //   if (sortBy) {
  //     return isAscending
  //       ? a[sortBy].toString().localeCompare(b[sortBy].toString())
  //       : b[sortBy].toString().localeCompare(a[sortBy].toString());
  //   }
  // });

  const sortedVendors = [...vendors].sort((a, b) => {
    if (sortBy) {
      return isAscending ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy];
    }
  });

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between flex-wrap">
        <Button className="btn btn-primary p-3" onClick={() => setShow(true)}>
          Add Your Company
        </Button>
      </div>
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
          {vendors.map((v, index) => (
            <option key={index}>{v.name}</option>
          ))}
        </Form.Select>

        <Form.Select
          className="w-25 border-0 fs-5 p-3"
          value={continent}
          onChange={(e) => dispatch(setContinent(e.target.value))}
        >
          <option>All Continents</option>
          {vendors.map((v, index) => (
            <option key={index}>{v.continent}</option>
          ))}
        </Form.Select>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Logo</th>
            <button>
              <th
                onClick={() => handleSort("id")}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={
                    isAscending
                      ? "/Images/logo512.png"
                      : "/Images/down-arrow.png"
                  }
                  style={{
                    width: "22px",
                    marginBottom: "10px",
                    marginLeft: "10px",
                  }}
                />
              </th>
            </button>
            <th
              onClick={() => handleSort("name")}
              style={{ cursor: "pointer" }}
            >
              Name
              {/* <img
                src={
                  isAscending ? "/Images/logo512.png" : "/Images/down-arrow.png"
                }
                style={{
                  width: "22px",
                  marginBottom: "10px",
                  marginLeft: "10px",
                }}
              /> */}
            </th>
            <th
              onClick={() => handleSort("continent")}
              style={{ cursor: "pointer" }}
            >
              Continent
              {/* <img
                src={
                  isAscending ? "/Images/logo512.png" : "/Images/down-arrow.png"
                }
                style={{
                  width: "22px",
                  marginBottom: "10px",
                  marginLeft: "10px",
                }}
              /> */}
            </th>
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
          {sortedVendors.map((v) => (
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

      {/* model */}

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
