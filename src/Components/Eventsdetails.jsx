import React from "react";
import { useParams } from "react-router-dom";
import EventsArray from "./Selfcomponents/EventsArray";

const Eventsdetails = () => {
  const { id } = useParams();
  const event = EventsArray.find((e) => e.id == id);

  if (!event)
    return (
      <p className="text-center mt-20 text-lg font-semibold">
        Event not found.
      </p>
    );

  return (
    <div className="container mx-auto mt-40 px-4">
      {/* Countdown */}
      <div className="mb-6">
        <h5>
          <strong>Event Start ➝</strong> 00 : 00 : 00 : 00{" "}
          <small className="text-gray-500">Days Hours Minutes Seconds</small>
        </h5>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Side Card */}
        <div className="md:w-1/3">
          <div className="shadow-md border border-gray-200 rounded-lg p-5 bg-white">
            {/* Dates */}
            <div className="mb-4">
              <p>
                <strong>Thu</strong> <br />
                03 April ➝ <strong>Fri</strong> <br /> 04 April
              </p>
            </div>

            {/* Location */}
            <div className="mb-4">
              <strong>
                {event.country}, {event.continent}
              </strong>
            </div>

            {/* Category and Website */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-green-600 font-medium">Summit</span>
              <button className="bg-blue-600 text-white text-sm px-3 py-1 rounded">
                Website
              </button>
            </div>

            {/* Visit All Events */}
            <div className="mb-4 text-blue-600 flex items-center space-x-2">
              <i className="bi bi-box-arrow-up-right"></i>
              <a href="/events" className="hover:underline">
                Visit All Events
              </a>
            </div>

            {/* Google Calendar */}
            <button className="border border-blue-600 text-blue-600 px-4 py-2 transition  rounded w-full hover:bg-blue-500 hover:!text-white hover:duration-300 flex items-center justify-center gap-2">
              <i className="bi bi-plus-lg"></i>
              To Google Calendar
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-2/3">
          <div className="flex items-start mb-6">
            <img
              src={event.image}
              alt={event.title}
              className="w-28 h-28 object-cover rounded mr-4"
            />
            <div>
              <h3 className="text-2xl font-bold">{event.title}</h3>
            </div>
          </div>

          <p className="mb-4">{event.description}</p>

          <p className="mb-4">
            North America’s aviation sector faces disruption with airline
            mergers, bankruptcies, capacity issues, and booming travel,
            potentially reaching record levels in <strong>{event.year}</strong>.
          </p>

          <p className="mb-4">
            Political changes in the US may drive significant shifts in
            regulations, funding, environmental policies, and trade, impacting
            domestic and international airlines.
          </p>

          <p>
            The summit offers expert insights, high-level panels, and networking
            opportunities, serving as a pivotal event for shaping the future of
            aviation in the Americas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Eventsdetails;
