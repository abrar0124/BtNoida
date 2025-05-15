import EventsArray from "./Selfcomponents/EventsArray";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Text from "./Text";

const Events = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [selectyear, setselectyear] = useState(null);
  const [selectmonth, setselectmonth] = useState(null);
  const [selectcontinent, setselectcontinent] = useState(null);
  const [selectcountry, setselectcountry] = useState(null);
  const [selectcatagory, setselectedcatagory] = useState(null);
  let lastMonth = "";

  const FilteredEvents = EventsArray.filter(
    (e) =>
      (searchQuery === null ||
        e.title.toUpperCase().includes(searchQuery.toUpperCase()) ||
        e.title.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectyear === null || selectyear === "All" || e.year === selectyear) &&
      (selectmonth === null ||
        selectmonth === "All Month" ||
        e.month === selectmonth) &&
      (selectcontinent === null ||
        selectcontinent === "All Continents" ||
        e.continent === selectcontinent) &&
      (selectcountry === null ||
        selectcountry === "All Countires" ||
        e.country === selectcountry) &&
      (selectcatagory === null ||
        selectcatagory === "All Catagories" ||
        e.catagory === selectcatagory)
  );

  return (
    <div className="container mx-auto p-4 mt-20">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Filters */}
        <div className="w-full md:w-1/3">
          <h4 className="text-3xl font-normal mb-4">Events</h4>
          <form className="space-y-4">
            <div className="flex gap-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Year
                </label>
                <select
                  className="bg-gray-100 px-3 py-2 text-center text-gray-500 w-24"
                  onChange={(e) => setselectyear(e.target.value)}
                >
                  <option>All</option>
                  <option>2019</option>
                  <option>2020</option>
                  <option>2021</option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Months
                </label>
                <select
                  className="bg-gray-100 px-3 py-2 text-center text-gray-500 w-72"
                  onChange={(e) => setselectmonth(e.target.value)}
                >
                  <option>All Month</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>Octobar</option>
                  <option>November</option>
                  <option>December</option>
                  <option>Junuary</option>
                  <option>Febraury</option>
                  <option>March</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Continent
              </label>
              <select
                className="bg-gray-100 px-3 py-2 w-full text-gray-600"
                onChange={(e) => setselectcontinent(e.target.value)}
              >
                <option>All Continents</option>
                <option>Africa</option>
                <option>Asia</option>
                <option>Australia</option>
                <option>Europe</option>
                <option>North America</option>
                <option>South America</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>
              <select
                className="bg-gray-100 px-3 py-2 w-full text-gray-600"
                onChange={(e) => setselectcountry(e.target.value)}
              >
                <option>All Countires</option>
                <option>Austria</option>
                <option>Japan</option>
                <option>Africa</option>
                <option>Italy</option>
                <option>France</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                className="bg-gray-100 px-3 py-2 w-full text-gray-600"
                onChange={(e) => setselectedcatagory(e.target.value)}
              >
                <option>All Catagories</option>
                <option>Air show</option>
                <option>Award</option>
                <option>Conference</option>
                <option>Exibition</option>
                <option>Expo</option>
              </select>
            </div>
          </form>
        </div>

        {/* Events List */}
        <div className="w-full md:w-2/3 max-h-[430px] overflow-auto">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          {FilteredEvents.length === 0 ? (
            <p>No events found</p>
          ) : (
            FilteredEvents.map((p, index) => {
              const showMonthHeading = p.month !== lastMonth;
              lastMonth = p.month;
              return (
                <div key={index}>
                  {showMonthHeading && (
                    <p className="font-medium text-2xl my-4 ml-4">{p.month}</p>
                  )}

                  <Link
                    to={`/Eventsdetail/${p.id}`}
                    className="text-black no-underline"
                  >
                    <div className="border rounded-lg mb-4 p-3 shadow-md">
                      <div className="flex gap-4">
                        <div className="w-1/5">
                          <img
                            src={p.image}
                            alt={p.title}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                        <div className="w-4/5">
                          <h5 className="text-xl font-semibold">{p.title}</h5>
                          <p className="text-gray-600">{p.description}</p>
                          <p className="text-red-500">{p.Days}</p>
                          <Link
                            to={`/Eventsdetail/${p.id}`}
                            className="text-blue-600 no-underline   font-medium"
                          >
                            Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
