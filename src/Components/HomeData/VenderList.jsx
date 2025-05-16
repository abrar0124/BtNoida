import React, { useState, useEffect } from "react";
import vendors from "./FlagArray";

const VendorList = ({ onSelectionChange }) => {
  const [selectedVendors, setSelectedVendors] = useState([]);

  useEffect(() => {
    const storedVendors =
      JSON.parse(localStorage.getItem("selectedVendors")) || [];
    setSelectedVendors(storedVendors);
    onSelectionChange(storedVendors);
  }, []);

  const handleSelection = (vendor) => {
    let updatedSelection = [...selectedVendors];

    if (updatedSelection.some((v) => v.name === vendor.name)) {
      updatedSelection = updatedSelection.filter((v) => v.name !== vendor.name);
    } else {
      if (updatedSelection.length < 3) {
        updatedSelection.push(vendor);
      } else {
        alert("You can select only 3 vendors.");
        return;
      }
    }

    setSelectedVendors(updatedSelection);
    localStorage.setItem("selectedVendors", JSON.stringify(updatedSelection));
    onSelectionChange(updatedSelection);
  };

  return (
    <div className="bg-dark text-white p-3">
      <h2 className="text-center py-3 text-xlg"> DCS Vendors</h2>
      <div className="w-full flex flex-wrap gap-2 justify-center">
        {vendors.map((vendor, index) => (
          <div
            key={index}
            className={` p-1 m-1 flex items-center   cursor-pointer rounded-lg border border-gray-100 transition-all duration-300 ${
              selectedVendors.some((v) => v.name === vendor.name)
                ? " border-white bg-gray-300  bg-opacity-20"
                : ""
            }`}
            onClick={() => handleSelection(vendor)}
          >
            <span className="text-3xl mr-2">{vendor.flag}</span>
            <span>{vendor.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorList;
