import React, { useEffect, useState } from "react";
import { Table, Form, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  setContinent,
  setCountryname,
  setSearch,
} from "../../redux/VenderSlice";

const VendorTable = ({ product }) => {
  const [filteredVendor, setFilteredVendor] = useState([]);

  const dispatch = useDispatch();
  const { vendors, search, countryname, continent } = useSelector(
    (state) => state.vendor
  );

  // Extract unique country & continent values
  const countriesname = vendors.map((v) => v.name);
  const continentsnme = vendors.map((v) => v.continent);

  // Filter vendors based on search, country, and continent
  useEffect(() => {
    const filteredVendors = vendors.filter(
      (v) =>
        v.name.toLowerCase().includes(search.toLowerCase()) &&
        (countryname === "All Countries" || v.name === countryname) &&
        (continent === "All Continents" || v.continent === continent)
    );
    setFilteredVendor(filteredVendors);
  }, [vendors, search, countryname, continent]);

  return (
    <div className="container mt-4">
      <h3 className="fw-medium my-5">{product.name}</h3>

      {/* Search & Filters */}

      <div className="d-flex align-items-center justify-content-between mb-4">
        {/* Search Input */}
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
          className=" w-25 border-0 fs-5  p-3"
          value={countryname}
          onChange={(e) => dispatch(setCountryname(e.target.value))}
        >
          <option>All Countries</option>
          {countriesname.map((c) => (
            <option>{c}</option>
          ))}
        </Form.Select>
        <Form.Select
          className=" w-25 border-0  fs-5 p-3"
          value={continent}
          onChange={(e) => dispatch(setContinent(e.target.value))}
        >
          <option>All Continents</option>
          {continentsnme.map((c) => (
            <option>{c}</option>
          ))}
        </Form.Select>
      </div>
      {/* Table */}
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
                <img src={v.image} alt={v.name} style={{ height: "50px" }} />
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
    </div>
  );
};

export default VendorTable;
