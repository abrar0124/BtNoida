import { configureStore } from "@reduxjs/toolkit";
import VenderSlice from "./VenderSlice";
import Authslice from "../Components/Authslice/Authslice";
import Productslice from "../reduxthunk/Productslice";

const store = configureStore({
  reducer: {
    vendor: VenderSlice,
    auth: Authslice,
    products: Productslice,
  },
});

export default store;
