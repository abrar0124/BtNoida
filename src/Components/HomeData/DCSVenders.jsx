import React from "react";

const DCSVendors = ({ selectedVendors }) => {
  return (
    <div
      className="h-screen flex flex-col items-start text-start p-5 bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/Images/DCS.png')" }}
    >
      {/* Selected Vendors Heading Left-aligned */}
      <p className="text-2xl text-start w-full">My favourite countries</p>
      <div className="w-full flex flex-col">
        {selectedVendors.length > 0 ? (
          selectedVendors.map((vendor, index) => (
            <div key={index} className="mb-3 w-[200px]">
              <div className="p-1 border-1 border-white rounded-lg bg-gray-100 bg-opacity-20 flex items-center  gap-2 w-[200px]">
                <span className="text-3xl min-w-[40px] text-center">
                  {vendor.flag}
                </span>
                <span>{vendor.name}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-start w-full">No vendors selected</p>
        )}
      </div>
    </div>
  );
};

export default DCSVendors;
