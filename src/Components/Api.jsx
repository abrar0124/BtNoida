import VendorTable from "./Detailpage/Vendercheckout";
import { Link } from "react-router-dom";
import Text from "./Text";

function Api() {
  return (
    <div className="mt-28 ml-10">
      {/* Breadcrumb */}
      <div className="text-3xl font-normal space-x-3">
        <Link to="/" className="text-gray-800  no-underline hover:underline ">
          Home
        </Link>
        <span className="">/</span>
        <span className="text-gray-800">Api</span>
      </div>

      {/* Heading */}
      <p className="text-3xl my-4">Advanced Passenger Information</p>

      {/* Description Paragraph */}
      <p className="text-xxlg leading-9 text-gray-700 mb-6">
        The authorities of certain countries require airlines to transmit
        Advance Passenger Information (API) for all passengers flying to or via
        their country before departure. Passengers can provide their Advance
        Passenger Information data during check-in (Web Check-in or Kiosk
        Check-in in Airport) or using online form. Some airlines such as Air
        Canada, easyjet, emirates, american airlines, singapore airlines, air
        france, qatar airways, etihad, and iberia allow the passengers to
        provide API using online form to enter required information before they
        go to the airport. Passengers won’t be asked to provide the passenger
        information again when checking in. Any inaccurate or incomplete data
        provided could delay the journey, either at check-in or with the
        immigration authorities. Those passengers who refuse to supply API will
        be refused entry to these countries and therefore will not be allowed to
        travel.
      </p>

      {/* Button */}
      <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-200">
        See More info
      </button>

      {/* Vendor Table Title */}
      <h2 className="text-3xl font-normal my-8">
        Advanced Passenger Information vendors
      </h2>

      <VendorTable />
    </div>
  );
}

export default Api;
