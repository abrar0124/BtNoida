import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// First API call with category argument
export const fetchProduct1 = createAsyncThunk(
  "products/fetch1",
  async (category) => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return { data: response.data, category };
  }
);

// Second API call
export const fetchProducts2 = createAsyncThunk("products/fetch2", async () => {
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
        const { data, category } = action.payload;
        state.items1 = data.filter((product) => product.category === category);
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
      })

      // deleteProduct
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items1 = state.items1.filter(
          (item) => item.id !== action.payload
        );
        state.items2 = state.items2.filter(
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
        state.items2 = updatedList(state.items2);
        console.log("Successfully Updated Product:", updated);
      })

      .addCase(updateProduct.rejected, (action) => {
        console.log("Update failed:", action.payload);
      });
  },
});

export default productSlice.reducer;
