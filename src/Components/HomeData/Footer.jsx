import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-dark text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Left Column */}
          <div className="md:w-1/2">
            <p className="italic w-1/2 mt-1">
              As a consulting company, we offer outstanding solutions
            </p>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 mt-6 md:mt-0">
            <h2 className="ml-8 text-xlg font-normal text-white">
              Featured Pages
            </h2>
            <div className="flex justify-between flex-wrap mt-2">
              <ul className="list-none cursor-pointer">
                <li>Baggage Reconciliation System</li>
              </ul>
              <ul className="list-none cursor-pointer">
                <li>Boarding Gate Reader</li>
              </ul>
              <ul className="list-none cursor-pointer">
                <li>Company A-Z</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
