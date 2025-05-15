import React, { useState } from "react";
import FilterSidebar from "./FilterSidebar";
import SelfcheckinArray from "./SelfcheckinArray";

const Selfcheckin = ({ product }) => {
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

  const filteredProducts = SelfcheckinArray.filter(
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
      <p className="text-2xl font-semibold px-4">{product.name}</p>
      <div className="flex border-t border-gray-300 p-4">
        {/* ✅ Reusable FilterSidebar */}
        <FilterSidebar
          filters={filters}
          setFilters={setFilters}
          openFilters={openFilters}
          setOpenFilters={setOpenFilters}
        />

        {/* Main Content */}
        <div className="w-3/4 p-4">
          <div className="flex justify-between mb-6">
            <div className="flex w-1/2 border rounded overflow-hidden">
              <input
                type="text"
                className="flex-grow px-4 py-3 text-lg border-0 focus:outline-none"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="flex items-center px-3 bg-white">
                <img
                  src="/Images/search.png"
                  alt="Search"
                  className="h-5 w-6"
                />
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
    </>
  );
};

export default Selfcheckin;
