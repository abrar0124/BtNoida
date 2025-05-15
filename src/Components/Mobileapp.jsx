import { Link } from "react-router-dom";
import Mobiledata from "./Selfcomponents/Mobiledata";
import Text from "./Text";

function Mobileapp() {
  return (
    <>
      <div className="container mx-auto px-4 py-2">
        {/* Breadcrumb */}
        <nav className="mt-[7%] flex items-center text-2xl">
          <Link
            to="/"
            className="text-gray-800 no-underline hover:underline font-medium"
          >
            Home
          </Link>
          <span className="ml-3 flex items-center text-gray-800">
            <span className="mr-4">/</span> Mobile Application
          </span>
        </nav>

        <p className="text-4xl font-medium my-6">Mobile Applications</p>

        <p
          className="text-lg
          leading-loose text-gray-800"
        >
          Mobile applications have improved passenger experience dramatically
          over recent years. Travellers that are willing to handle their travel
          cycle at their convenience can check-in, get boarding passes, and
          choose desired seats by using Mobile applications. Meanwhile, airline
          and airport authorities/agents use mobile technology to streamline
          their processes, reduce costs and enhance efficiencies. On this page,
          DCS.aero provides some new, innovative, and robust mobile applications
          that are useful for airlines, and ground handlers
        </p>

        {/* Buttons */}
        <div className="flex gap-2 mt-4 flex-wrap">
          <Link
            to={""}
            className="px-4 py-3 text-lg rounded bg-blue-500 text-white no-underline transition transform hover:!text-blue-500 hover:bg-transparent hover:border-2 hover:border-blue-500"
          >
            See more info
          </Link>
          <Link
            to={""}
            className="px-4 py-3 text-lg no-underline transition rounded border-2  border-blue-500 text-blue-500 transform hover:bg-blue-500 hover:!text-white"
          >
            {" "}
            See FAQ
          </Link>
        </div>
      </div>

      <Mobiledata />
    </>
  );
}

export default Mobileapp;
