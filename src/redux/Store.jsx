import { configureStore } from "@reduxjs/toolkit";
import VenderSlice from "./VenderSlice";

const store = configureStore({
  reducer: {
    vendor: VenderSlice,
  },
});

export default store;
