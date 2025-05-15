import React from "react";

const Footer2 = () => {
  return (
    <div className="w-full bg-[#333] text-[#ccc] py-10">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column */}
          <div className="md:w-1/2">
            <h2 className="text-xlg font-bold text-[#3fa9f5]">
              DCS<span className="text-white">aero</span>
            </h2>

            <p className="mt-2 italic w-1/2 text-xlg leading-relaxed">
              As a consulting company, we offer outstanding solutions,
              operational management, and consultancy services to airlines,
              airports, and ground handlers in big, middle, or small-sized.
              DCS.aero is a comprehensive sales and marketing platform in the
              aviation industry. It aims to help research teams and individuals
              find the appropriate solutions for their company by connecting
              them to different trusted vendors around the world.
            </p>
          </div>

          {/* Right column */}
          <div className="md:w-1/2">
            <h4 className="text-white text-xlg  font-semibold ml-14 mb-3">
              Featured Pages
            </h4>

            <div className="flex  flex-wrap">
              <ul className="list-none ml-6 text-xlg space-y-1  cursor-pointer">
                <li>Baggage Reconciliation System</li>
                <li>Common Use Platform</li>
                <li>Computer Reservation System</li>
                <li>Departure Control System</li>
                <li>Turnaround Management</li>
                <li>Weight and Balance</li>
              </ul>

              <ul className="list-none  space-y-1 cursor-pointer">
                <li>Boarding Gate Reader</li>
                <li>Boarding Pass & Bag Tag</li>
                <li>Handheld Scanner</li>
                <li>Mobile Barcode Scanner</li>
                <li>Printer</li>
                <li>Self Bag Drop</li>
                <li>Self Check-in Kiosk</li>
                <li>Wearable Scanner</li>
              </ul>

              <ul className="list-none text-xlg ml-6 space-y-1 cursor-pointer">
                <li>Company A-Z</li>
                <li>Events</li>
                <li>Mobile App</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-white text-lg mt-10">
          Follow us on Social <span>☎️📱</span>
        </p>
      </div>
    </div>
  );
};

export default Footer2;
