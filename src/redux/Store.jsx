import { configureStore } from "@reduxjs/toolkit";
import VenderSlice from "./VenderSlice";
import Authslice from "../Components/Authslice/Authslice";
import Productslice from "../reduxthunk/Productslice";
import Userslice from "../Components/Userslice/Userslice";

const store = configureStore({
  reducer: {
    vendor: VenderSlice,
    auth: Authslice,
    products: Productslice,
    // user: Userslice,
  },
});

export default store;
