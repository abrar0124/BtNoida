import React, { useState } from "react";
import { Table, Form } from "react-bootstrap";
import vendorsData from "./VendorsData";
import { Link } from "react-router-dom";

const VendorTable = ({ product }) => {
  const [search, setSearch] = useState("");
  const filteredVendors = vendorsData.filter((vendor) =>
    vendor.name.toLowerCase().includes(search.toLowerCase())
  );
  console.log(search);
  return (
    <div className="container mt-4">
      <h3 className="fw-medium mt-5 ">{product.name}</h3>
      <Form.Control
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
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
          {filteredVendors.map((vendor) => (
            <tr>
              <img
                className="w-100"
                src={vendor.image}
                style={{ height: "60px" }}
              />
              <td>{vendor.id}</td>
              <td>{vendor.name}</td>
              <td>{vendor.continent}</td>
              <td>{vendor.country}</td>
              <td>{vendor.freeTrial ? "✔️" : "❌"}</td>
              <td>{vendor.clc ? "✔️" : "❌"}</td>
              <td>{vendor.mobileApp ? "✔️" : "❌"}</td>
              <td>{vendor.dcs ? "✔️" : "❌"}</td>
              <td>{vendor.iataPartner ? "✔️" : "❌"}</td>
              <td>
                {" "}
                <Link className="ms-2">{vendor.Details}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default VendorTable;
