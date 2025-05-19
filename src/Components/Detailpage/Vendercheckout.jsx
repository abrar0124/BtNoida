import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setContinent,
  setCountryname,
  setSearch,
  updateNewVendor,
  setVendors,
} from "../../redux/VenderSlice";
import { Link } from "react-router-dom";

const VendorTable = () => {
  const [show, setShow] = useState(false);
  const [sortBy, setSortBy] = useState(null);
  const [isAscending, setIsAscending] = useState(true);

  const dispatch = useDispatch();
  const { vendors, search, countryname, continent, newVendor, countries } =
    useSelector((state) => state.vendor);

  useEffect(() => {
    const storedVendors = JSON.parse(localStorage.getItem("vendors"));
    if (storedVendors) {
      dispatch(setVendors(storedVendors));
    }
  }, [dispatch]);

  const handleAddVendor = () => {
    if (newVendor.name && newVendor.continent && newVendor.country) {
      const newVendorData = { id: vendors.length + 1, ...newVendor };
      const updatedVendors = [...vendors, newVendorData];
      localStorage.setItem("vendors", JSON.stringify(updatedVendors));
      dispatch(setVendors(updatedVendors));
      setShow(false);
    }
  };

  const countriesname = vendors.map((v) => v.name);
  const continentsname = vendors.map((v) => v.continent);

  const handleSort = (column) => {
    if (sortBy === column) {
      setIsAscending(!isAscending);
    } else {
      setSortBy(column);
      setIsAscending(true);
    }
  };

  const filteredVendors = vendors.filter((v) => {
    const searchLower = search.toLowerCase();
    const matchesSearch =
      v.name.toLowerCase().includes(searchLower) ||
      v.continent.toLowerCase().includes(searchLower);

    const matchesCountry =
      countryname === "All Countries" || v.name === countryname;

    const matchesContinent =
      continent === "All Continents" || v.continent === continent;

    return matchesSearch && matchesCountry && matchesContinent;
  });

  const sortedVendors = [...filteredVendors].sort((a, b) => {
    if (sortBy) {
      if (typeof a[sortBy] === "string") {
        return isAscending
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      } else {
        return isAscending ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy];
      }
    }
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex flex-wrap justify-between items-center mb-4">
        <button
          onClick={() => setShow(true)}
          className="bg-blue-500  text-white px-5 py-3 transition rounded hover:bg-blue-800 text-right"
        >
          Add Your Company
        </button>
      </div>

      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <div className="w-full sm:w-[300px]">
          <div className="flex items-center rounded border-1 border-gray-300 px-3 py-2">
            <input
              type="text"
              placeholder="Search"
              className="w-full font-light   outline-none  text-lg"
              value={search}
              onChange={(e) => dispatch(setSearch(e.target.value))}
            />
            <img
              src="/Images/search.png"
              alt="Search"
              className="w-5 h-5 ml-2"
            />
          </div>
        </div>

        <select
          className="w-full sm:w-1/4 p-3 border font-light text-gray-500 bg-transparent rounded text-lg"
          value={countryname}
          onChange={(e) => dispatch(setCountryname(e.target.value))}
        >
          <option value="All Countries">All Countries</option>
          {vendors.map((v, i) => (
            <option key={i}>{v.name}</option>
          ))}
        </select>

        <select
          className="w-full sm:w-1/4 p-3 border bg-transparent font-light text-gray-500  rounded text-lg"
          value={continent}
          onChange={(e) => dispatch(setContinent(e.target.value))}
        >
          <option value="All Continents">All Continents</option>
          {vendors.map((v, i) => (
            <option key={i}>{v.continent}</option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border text-center text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Logo</th>
              <th
                className="p-2 border cursor-pointer"
                onClick={() => handleSort("id")}
              >
                ID
                <img
                  src={
                    isAscending
                      ? "/Images/logo512.png"
                      : "/Images/down-arrow.png"
                  }
                  alt="Sort"
                  className="w-5 inline-block ml-2"
                />
              </th>
              <th
                className="p-2 border cursor-pointer"
                onClick={() => handleSort("name")}
              >
                Name
              </th>
              <th
                className="p-2 border cursor-pointer"
                onClick={() => handleSort("continent")}
              >
                Continent
              </th>
              <th className="p-2 border">Country</th>
              <th className="p-2 border">Free Trial</th>
              <th className="p-2 border">CLC</th>
              <th className="p-2 border">Mobile App</th>
              <th className="p-2 border">DCS</th>
              <th className="p-2 border">IATA Partner</th>
              <th className="p-2 border">Details</th>
            </tr>
          </thead>
          <tbody>
            {sortedVendors.map((v) => (
              <tr key={v.id} className="hover:bg-gray-50">
                <td className="p-2 border">
                  <img
                    src={v.image}
                    alt={v.name}
                    className="h-12 w-12 object-cover rounded"
                  />
                </td>
                <td className="p-2 border">{v.id}</td>
                <td className="p-2 border">{v.name}</td>
                <td className="p-2 border">{v.continent}</td>
                <td className="p-2 border">{v.country}</td>
                <td className="p-2 border">{v.freeTrial ? "✔️" : "❌"}</td>
                <td className="p-2 border">{v.clc ? "✔️" : "❌"}</td>
                <td className="p-2 border">{v.mobileApp ? "✔️" : "❌"}</td>
                <td className="p-2 border">{v.dcs ? "✔️" : "❌"}</td>
                <td className="p-2 border">{v.iataPartner ? "✔️" : "❌"}</td>
                <td className="p-2 border text-blue-500 underline">
                  <Link>{v.Details}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold">Add Your Company</h2>
              <button onClick={() => setShow(false)} className="text-gray-500">
                ✕
              </button>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="block font-medium mb-1">Name *</label>
                <input
                  type="text"
                  value={newVendor.name}
                  onChange={(e) =>
                    dispatch(
                      updateNewVendor({ name: "name", value: e.target.value })
                    )
                  }
                  className="w-full border p-2 rounded"
                  placeholder="Enter company name"
                  required
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Country *</label>
                <select
                  value={newVendor.country}
                  onChange={(e) =>
                    dispatch(
                      updateNewVendor({
                        name: "country",
                        value: e.target.value,
                      })
                    )
                  }
                  className="w-full border p-2 rounded"
                  required
                >
                  <option value="">Select Country</option>
                  {countriesname.map((c, i) => (
                    <option key={i} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-medium mb-1">Continent *</label>
                <select
                  value={newVendor.continent}
                  onChange={(e) =>
                    dispatch(
                      updateNewVendor({
                        name: "continent",
                        value: e.target.value,
                      })
                    )
                  }
                  className="w-full border p-2 rounded"
                  required
                >
                  <option value="">Select Continent</option>
                  {continentsname.map((c, i) => (
                    <option key={i} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-medium mb-1">
                  Select your country flag
                </label>
                <select
                  value={newVendor.country}
                  onChange={(e) =>
                    dispatch(
                      updateNewVendor({
                        name: "country",
                        value: e.target.value,
                      })
                    )
                  }
                  className="w-full border p-2 rounded"
                  required
                >
                  <option value="">Select Country</option>
                  {countries.map((c, i) => (
                    <option key={i} value={c.flag}>
                      {c.flag} {c.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-end p-4 border-t">
              <button
                onClick={handleAddVendor}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorTable;
