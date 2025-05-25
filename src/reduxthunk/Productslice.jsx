import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Get Products
export const fetchProduct1 = createAsyncThunk("products/fetch1", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

// Delete product
export const deleteProduct = createAsyncThunk("products/delete", async (id) => {
  await axios.delete(`https://fakestoreapi.com/products/${id}`);
  return id;
});

// Updated product
export const updateProduct = createAsyncThunk(
  "products/update",
  async (updatedProduct) => {
    const response = await axios.put(
      `https://fakestoreapi.com/products/${updatedProduct.id}`,
      updatedProduct
    );
    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items1: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      // fetchProduct

      .addCase(fetchProduct1.pending, (state) => {
        state.loading = true;
        console.log("fetchProducts pending...");
      })

      .addCase(fetchProduct1.fulfilled, (state, action) => {
        state.items1 = action.payload;
        state.loading = false;
        console.log("Successfully Get Products:", state.items1);
      })
      .addCase(fetchProduct1.rejected, (state) => {
        state.loading = false;
        state.error = "fetchProducts API Error";
        console.log("fetchProducts error:", state.error);
      })

      // deleteProduct
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items1 = state.items1.filter(
          (item) => item.id !== action.payload
        );

        console.log("Deleted product with id:", action.payload);
      })
      .addCase(deleteProduct.rejected, (action) => {
        console.log("Delete failed:", action.payload);
      })

      // Updated Product
      .addCase(updateProduct.fulfilled, (state, action) => {
        const updated = action.payload;
        const updatedList = (list) =>
          list.map((item) =>
            item.id === updated.id ? { ...updated, rating: item.rating } : item
          );
        state.items1 = updatedList(state.items1);
        console.log("Successfully Updated Product:", updated);
      })

      .addCase(updateProduct.rejected, (action) => {
        console.log("Update failed:", action.payload);
      });
  },
});

export default productSlice.reducer;
