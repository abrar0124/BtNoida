import React, { useState } from "react";
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import FilterSidebar from "./FilterSidebar"; // ✅ Import FilterSidebar
import EgateArray from "./EgateArray";

const Egate = ({ product }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    company: [],
    country: [],
    features: [],
    power: [],
    scanningmethod: [],
    readingmethod: [],
    imageCapure: [],
  });
  const [openFilters, setOpenFilters] = useState({
    company: false,
    country: false,
    features: false,
    power: false,
    scanningmethod: false,
    imageCapure: false,
  });

  const filteredProducts = EgateArray.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filters.company.length > 0
        ? filters.company.includes(product.company)
        : true) &&
      (filters.country.length > 0
        ? filters.country.includes(product.country)
        : true) &&
      (filters.features.length > 0
        ? filters.features.some((f) => product.features.includes(f))
        : true) &&
      (filters.power.length > 0
        ? filters.power.includes(product.power)
        : true) &&
      (filters.scanningmethod.length > 0
        ? filters.scanningmethod.includes(product.scanningmethod)
        : true) &&
      (filters.readingmethod.length > 0
        ? filters.readingmethod.includes(product.readingmethod)
        : true) &&
      (filters.imageCapure.length > 0
        ? filters.imageCapure.includes(product.imageCapure)
        : true)
  );

  return (
    <>
      <p className="fs-2">{product.name}</p>
      <div className="d-flex p-4 border-top">
        {/* ✅ Reusable FilterSidebar */}
        <FilterSidebar
          filters={filters}
          setFilters={setFilters}
          openFilters={openFilters}
          setOpenFilters={setOpenFilters}
        />
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
            <Button variant="primary">Add Your Company</Button>
          </div>

          <div className="row">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="col-md-4 mb-4">
                  <Card className="p-3 shadow-sm">
                    <div className="text-primary text-center fw-bold mb-2 cursor-pointer">
                      ➕ To Compare
                    </div>
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
                      className="w-100 h-50 object-contain"
                    />
                  </Card>
                </div>
              ))
            ) : (
              <p className="text-center w-100">No products found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Egate;
