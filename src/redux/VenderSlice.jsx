// import { createSlice } from "@reduxjs/toolkit";
// import vendorsData from "../Components/Detailpage/VendorsData";

// const initialState = {
//   vendors: vendorsData,
//   search: "",
//   countryname: "All Countries",
//   continent: "All Continents",
//   newVendor: {
//     name: "",
//     continent: "",
//     country: " 🇵🇰",
//     freeTrial: true,
//     clc: false,
//     mobileApp: true,
//     dcs: false,
//     iataPartner: true,
//     image: "/Images/america.jpeg",
//     Details: "➡️",
//   },
// };

// const vendorSlice = createSlice({
//   name: "vendor",
//   initialState,
//   reducers: {
//     setSearch: (state, action) => {
//       state.search = action.payload;
//     },
//     setCountryname: (state, action) => {
//       state.countryname = action.payload;
//     },
//     setContinent: (state, action) => {
//       state.continent = action.payload;
//     },
//     addVendor: (state, action) => {
//       state.vendors.push(action.payload);
//     },
//     updateNewVendor: (state, action) => {
//       state.newVendor[action.payload.name] = action.payload.value;
//     },
//     resetNewVendor: (state) => {
//       state.newVendor = { ...initialState.newVendor };
//     },
//   },
// });

// export const {
//   setSearch,
//   setCountryname,
//   setContinent,
//   addVendor,
//   updateNewVendor,
//   resetNewVendor,
// } = vendorSlice.actions;
// export default vendorSlice.reducer;

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
    { flag: "🇬🇧", name: "Maxico" },
    { flag: "🇦🇺", name: "Barazil" },
  ],
  newVendor: {
    name: "",
    continent: "",
    country: "",
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
    resetNewVendor: (state) => {
      state.newVendor = { ...initialState.newVendor };
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
} = vendorSlice.actions;
export default vendorSlice.reducer;
