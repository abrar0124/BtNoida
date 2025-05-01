import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

export const addProduct = createAsyncThunk(
  "products/add",
  async (newProduct) => {
    const response = await axios.post(
      "https://fakestoreapi.com/products",
      newProduct
    );
    return { ...response.data, rating: { count: 340 } };
  }
);

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
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.items.push(action.payload);
        console.log(
          "Product added successfully. Updated products list:",
          JSON.parse(JSON.stringify(state.items))
        );
      })

      .addCase(addProduct.rejected, (state, action) => {
        state.error = "Error adding product";
        console.error("Failed to add product:", action.error);
      });
  },
});

export default productSlice.reducer;
