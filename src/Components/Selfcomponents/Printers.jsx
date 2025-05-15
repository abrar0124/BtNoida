import React, { useState } from "react";
import PrintersArray from "./PrintersArray";

const Printers = () => {
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

  const filteredProducts = PrintersArray.filter(
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
    <div className="flex p-4 border-t border-gray-300">
      {/* Sidebar Filters */}
      <div className="w-1/4 p-4 border-gray-300">
        <p className="text-2xl mb-2">Printers</p>
        <p className="text-2xl border-b border-gray-300 pb-2">Filters</p>

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
          <div key={filter.key} className="border-b border-gray-300 pb-2 mt-4">
            <div
              className="flex justify-between items-center font-semibold cursor-pointer"
              onClick={() => toggleFilter(filter.key)}
            >
              <span className="font-normal text-lg">{filter.label}</span>
              <span>{openFilters[filter.key] ? "▲" : "▼"}</span>
            </div>

            {openFilters[filter.key] && (
              <div className="mt-2 space-y-2">
                {filter.options.map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={option}
                      checked={filters[filter.key].includes(option)}
                      onChange={() => handleCheckboxChange(filter.key, option)}
                      className="form-checkbox text-blue-600"
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
        <div className="flex justify-between mb-6">
          <div className="flex w-1/2 border rounded overflow-hidden">
            <input
              type="text"
              className="flex-grow px-4 py-2 text-lg border-0 focus:outline-none"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="flex items-center px-3 bg-white">
              <img src="/Images/search.png" alt="Search" className="h-5 w-6" />
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Add Your Company
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="bg-white shadow p-4 rounded">
                <div className="text-blue-600 text-center font-bold mb-2 cursor-pointer">
                  ➕ To Compare
                </div>
                <div className="flex justify-center mb-4">
                  <img src="/Images/c.png" alt="Logo" className="w-1/4" />
                </div>
                <h3 className="text-center font-medium text-lg mb-4">
                  {product.name}
                </h3>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain"
                />
              </div>
            ))
          ) : (
            <p className="text-center col-span-full">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Printers;
