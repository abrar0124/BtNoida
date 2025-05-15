import React from "react";
import { Form } from "react-bootstrap";

const FilterSidebar = ({
  filters,
  setFilters,
  openFilters,
  setOpenFilters,
}) => {
  const filterOptions = [
    { key: "company", label: "Company", options: ["Custom4U", "Epson"] },
    {
      key: "country",
      label: "Country",
      options: ["USA", "Germany", "China", "Japan"],
    },
    {
      key: "features",
      label: "Features",
      options: ["Audio indicator", "LED Indicator", "Rugged design"],
    },
    { key: "power", label: "Power", options: ["AC", "Battery"] },
    {
      key: "scanningmethod",
      label: "Scanning method",
      options: ["Barcode reader", "OCR", "NFC/RFID"],
    },
    {
      key: "readingmethod",
      label: "Reading method",
      options: ["Full-page", "Swip"],
    },
    {
      key: "imageCapure",
      label: "Image Capture",
      options: ["IR", "UV", "Visible"],
    },
  ];

  const handleCheckboxChange = (key, value) => {
    setFilters((prevFilters) => {
      const updatedFilters = prevFilters[key].includes(value)
        ? prevFilters[key].filter((item) => item !== value)
        : [...prevFilters[key], value];

      return { ...prevFilters, [key]: updatedFilters };
    });
  };
  console.log("Filters State:", filters);
  console.log("Open Filters State:", openFilters);

  const toggleFilter = (key) => {
    setOpenFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-25 p-4 ">
      <p className="fs-2 border-bottom">Filters</p>
      {filterOptions.map((filter) => (
        <div key={filter.key} className="border-bottom pb-2 mt-3">
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
                  key={option}
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
  );
};

export default FilterSidebar;
