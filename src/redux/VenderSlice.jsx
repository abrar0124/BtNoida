import { createSlice } from "@reduxjs/toolkit";
import vendorsData from "../Components/Detailpage/VendorsData";

const initialState = {
  vendors: vendorsData,
  search: "",
  countryname: "All Countries",
  continent: "All Continents",
};

const vendorSlice = createSlice({
  name: "vendor",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setCountryname: (state, action) => {
      state.countryname =
        action.payload === "All Countries" ? "All Countries" : action.payload;
    },
    setContinent: (state, action) => {
      state.continent =
        action.payload === "All Continents" ? "All Continents" : action.payload;
    },
  },
});

export const { setSearch, setCountryname, setContinent } = vendorSlice.actions;
export default vendorSlice.reducer;
