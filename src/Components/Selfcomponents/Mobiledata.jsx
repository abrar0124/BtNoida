import React, { useState } from "react";
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
    <div className="flex p-4 border-t">
      {/* Sidebar */}
      <div className="w-1/4 p-4 border-r">
        <Text
          type="p"
          content="Mobile Applications"
          className="text-2xl border-b pb-2"
        />
        <Text
          type="p"
          content="Filters"
          className="text-2xl border-b pb-2 mt-4"
        />

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
          <div key={filter.key} className="border-b pb-2 mt-3">
            <div
              className="flex justify-between items-center font-semibold cursor-pointer"
              onClick={() => toggleFilter(filter.key)}
            >
              <span className="text-lg font-normal">{filter.label}</span>
              <span>{openFilters[filter.key] ? "▲" : "▼"}</span>
            </div>

            {openFilters[filter.key] && (
              <div className="mt-2 space-y-1">
                {filter.options.map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={option}
                      checked={filters[filter.key].includes(option)}
                      onChange={() => handleCheckboxChange(filter.key, option)}
                      className="form-checkbox accent-blue-600"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-4">
        {/* Search */}
        <div className="flex justify-between mb-4">
          <div className="flex items-center w-1/2 bg-white rounded border-2  px-3 py-2">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow  text-lg focus:outline-none"
            />
            <img src="/Images/search.png" alt="Search" className="w-5 h-5" />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="bg-white p-3 border-1 rounded">
                <Text
                  type="div"
                  content="➕ To Compare"
                  className="text-blue-600 text-center font-bold mb-2 cursor-pointer"
                />
                <div className="flex justify-center">
                  <img src="/Images/c.png" alt="" className="w-[30%] mb-2" />
                </div>
                <div className="text-center font-medium text-lg mb-2">
                  {product.name}
                </div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain"
                />
              </div>
            ))
          ) : (
            <Text type="p" content="No products found." />
          )}
        </div>
      </div>
    </div>
  );
};

export default Mobiledata;
