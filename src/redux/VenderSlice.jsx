import { createSlice } from "@reduxjs/toolkit";
import vendorsData from "../Components/Detailpage/VendorsData";

const initialState = {
  vendors: vendorsData,
  search: "",
  countryname: "All Countries",
  continent: "All Continents",
  countries: [
    { flag: "🇵🇰", name: "Pakistan" },
    { flag: "🇺🇸", name: "America" },
    { flag: "🇮🇳", name: "India" },
    { flag: "🇬🇲", name: "Italy" },
    { flag: "🇨🇲", name: "Canada" },
    { flag: "🇨🇿", name: "Germany" },
    { flag: "🇨🇳", name: "France" },
    { flag: "🇦🇺", name: "Australia" },
    { flag: "🇮🇹", name: "England" },
    { flag: "🇬🇧", name: "Mexico" },
    { flag: "🇧🇷", name: "Brazil" },
  ],

  newVendor: {
    name: "",
    continent: "",
    countryName: "", // ✅ Country name alag rakha
    countryFlag: "", // ✅ Country flag alag rakha
    freeTrial: true,
    clc: false,
    mobileApp: true,
    dcs: false,
    iataPartner: true,
    image: "/Images/america.jpeg",
    Details: "➡️",
  },
};

const vendorSlice = createSlice({
  name: "vendor",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setCountryname: (state, action) => {
      state.countryname = action.payload;
    },
    setContinent: (state, action) => {
      state.continent = action.payload;
    },
    addVendor: (state, action) => {
      state.vendors.push(action.payload);
    },
    updateNewVendor: (state, action) => {
      console.log("Updating Vendor:", action.payload);
      state.newVendor[action.payload.name] = action.payload.value;
    },
    setVendors: (state, action) => {
      state.vendors = action.payload;
    },
  },
});

export const {
  setSearch,
  setCountryname,
  setContinent,
  addVendor,
  updateNewVendor,
  resetNewVendor,
  setVendors,
} = vendorSlice.actions;
export default vendorSlice.reducer;
