import React from "react";

const Contactform = () => {
  return (
    <div className="container mx-auto mt-[10%] px-4">
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="font-serif font-bold">Contact us</h1>

          <p className="text-lg font-serif">
            Fill this form to get in touch with our experts, discuss your
            issues, and have them solved by addressing your challenges. All
            fields marked with an <span className="text-red-600">*</span>
            are required.
          </p>
        </div>
        <div className="md:w-1/2">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="* Name"
              className="w-full border  rounded px-4 py-2 "
            />

            <input
              type="email"
              placeholder="* Email"
              className="w-full border rounded px-4 py-2"
            />

            <input
              type="text"
              placeholder="* Subject"
              className="w-full border rounded px-4 py-2"
            />

            <textarea
              rows="4"
              placeholder="* Message"
              className="w-full border  rounded px-4 py-2"
            />

            <input type="file" className="w-full border" />

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded mb-3"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
