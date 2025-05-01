// src/redux/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API call thunk
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        console.log("Fetching products... Pending state.");
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        console.log(
          "Products fetched successfully! Fulfilled state:",
          action.payload
        );
      })

      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;

        state.error = "API Error";
        console.log("Error occurred while fetching products. Rejected state.");
      });
  },
});

export default productSlice.reducer;
