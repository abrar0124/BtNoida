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
  return response.data;
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
      // fetchProduct1
      .addCase(fetchProduct1.pending, (state) => {
        state.loading = true;
        console.log("fetchProduct1 pending...");
      })
      .addCase(fetchProduct1.fulfilled, (state, action) => {
        console.log("Full action object:", action);
        const category = action.meta.arg;
        state.items1 = action.payload.filter(
          (product) => product.category === category
        );
        state.loading = false;
        console.log("first api:", state.items1);
      })
      .addCase(fetchProduct1.rejected, (state) => {
        state.loading = false;
        state.error = "fetchProduct1 API Error";
        console.log("fetchProduct1 error:", state.error);
      })

      // fetchProducts2
      .addCase(fetchProducts2.pending, (state) => {
        state.loading = true;
        console.log("fetchProducts2 pending...");
      })
      .addCase(fetchProducts2.fulfilled, (state, action) => {
        state.items2 = action.payload.slice(0, 10);
        state.loading = false;
        console.log("second api:", state.items2);
      })
      .addCase(fetchProducts2.rejected, (state) => {
        state.loading = false;
        state.error = "fetchProducts2 API Error";
        console.log("fetchProducts2 error:", state.error);
      });
  },
});

export default productSlice.reducer;
