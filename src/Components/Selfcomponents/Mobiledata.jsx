import React, { useState } from "react";
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { Mobilearray } from "../Mobilearray";
import Text from "../Text";

const Mobiledata = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    company: [],
    country: [],
    type: [],
  });
  const [openFilters, setOpenFilters] = useState({
    company: false,
    country: false,
    type: false,
  });
  const handleCheckboxChange = (key, value) => {
    setFilters((prevFilters) => {
      const updatedFilters = prevFilters[key].includes(value)
        ? prevFilters[key].filter((item) => item !== value)
        : [...prevFilters[key], value];

      return { ...prevFilters, [key]: updatedFilters };
    });
  };

  const toggleFilter = (key) => {
    setOpenFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredProducts = Mobilearray.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filters.company.length > 0
        ? filters.company.includes(product.company)
        : true) &&
      (filters.country.length > 0
        ? filters.country.includes(product.country)
        : true) &&
      (filters.type.length > 0 ? filters.type.includes(product.type) : true)
  );

  return (
    <div className="d-flex p-4 border-top">
      {/* Sidebar Filters */}

      <div className="w-25 p-4 border-end">
        <Text
          type={"p"}
          content={"Mobile Applications"}
          className="fs-2 border-bottom"
        />
        <Text type={"p"} content={"Filters"} className="fs-2 border-bottom" />

        {/* Filter Sections */}
        {[
          { key: "company", label: "Company", options: ["Custom4U", "Epson"] },
          {
            key: "country",
            label: "Country",
            options: ["USA", "Germany", "China", "Japan"],
          },
          {
            key: "type",
            label: "Type",
            options: ["Thermal", "Metal", "Inkjet", "Laser"],
          },
        ].map((filter) => (
          <div className="border-bottom pb-2 mt-3">
            <div
              className="d-flex justify-content-between align-items-center fw-semibold"
              style={{ cursor: "pointer" }}
              onClick={() => toggleFilter(filter.key)}
            >
              <span className="fw-normal fs-5">{filter.label}</span>
              <span>{openFilters[filter.key] ? "▲" : "▼"}</span>
            </div>

            {openFilters[filter.key] && (
              <div className="mt-2">
                {filter.options.map((option) => (
                  <Form.Check
                    type="checkbox"
                    label={option}
                    value={option}
                    checked={filters[filter.key].includes(option)}
                    onChange={() => handleCheckboxChange(filter.key, option)}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="w-75 p-4">
        <div className="d-flex justify-content-between mb-4">
          <InputGroup className="rounded shadow-sm w-50">
            <Form.Control
              className="p-3 border-0 bg-light fs-5"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <InputGroup.Text className="bg-light border-0">
              <img src="/Images/search.png" alt="Search" height="18" />
            </InputGroup.Text>
          </InputGroup>
        </div>

        <div className="row">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="col-md-3 mb-4">
                <Card className="p-3 shadow-sm " style={{ width: "90%" }}>
                  <Text
                    type={"div"}
                    content={<>➕ To Compare</>}
                    className="text-primary text-center fw-bold mb-2 cursor-pointer"
                  />
                  <Card.Body>
                    <Card.Img
                      src="/Images/c.png"
                      style={{ marginLeft: "40%", width: "29%" }}
                    />
                    <Card.Title className="text-center  fw-medium">
                      {product.name}
                    </Card.Title>
                  </Card.Body>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.name}
                    className=" h-50 object-contain"
                    style={{ width: "100%" }}
                  />
                </Card>
              </div>
            ))
          ) : (
            <Text type={"p"} content={"No products found."} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Mobiledata;
