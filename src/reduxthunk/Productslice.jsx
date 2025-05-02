import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//first api call
export const fetchProduct1 = createAsyncThunk("products/fetch1", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

//second api call

export const fetchProducts2 = createAsyncThunk("products/fetch2", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  const data = response.data;
  return data.slice(0, 10);
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    items1: [],
    items2: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct1.pending, (state) => {
        state.loading = true;
        console.log("fetchProduct1 pending...");
      })
      .addCase(fetchProduct1.fulfilled, (state, action) => {
        state.items1 = action.payload;
        state.loading = false;
        console.log("fetchProduct1 success:", action.payload);
      })
      .addCase(fetchProduct1.rejected, (state) => {
        state.loading = false;
        state.error = "fetchProduct1 API Error";
        console.log("fetchProduct1 error:", state.error);
      })

      .addCase(fetchProducts2.pending, (state) => {
        state.loading = true;
        console.log("fetchProducts2 pending...");
      })
      .addCase(fetchProducts2.fulfilled, (state, action) => {
        state.items2 = action.payload;
        console.log("fetch products2 success:", action.payload);

        state.loading = false;
      })

      .addCase(fetchProducts2.rejected, (state) => {
        state.loading = false;
        state.error = "fetchProducts2 API Error";
        console.log("fetchProducts2 error:", state.error);
      });
  },
});

export default productSlice.reducer;
