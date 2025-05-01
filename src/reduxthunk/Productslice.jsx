import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
        console.log("pending...");
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        console.log("fetching successfully", action.payload);
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.error = "API Error";
        console.log("error", state.error);
      });
  },
});

export default productSlice.reducer;
