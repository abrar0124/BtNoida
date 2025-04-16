// import { configureStore } from "@reduxjs/toolkit";
// import VenderSlice from "./VenderSlice";

// const store = configureStore({
//   reducer: {
//     vendor: VenderSlice,
//   },
// });

// export default store;

// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import VenderSlice from "./VenderSlice";
import Authslice from "../Components/Authslice/Authslice";

const store = configureStore({
  reducer: {
    vendor: VenderSlice,
    auth: Authslice,
  },
});

export default store;
