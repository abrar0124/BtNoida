import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Get Products
export const fetchProduct1 = createAsyncThunk("products/fetch1", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  console.log("get products:", response.data);
  return response.data;
});

// Search Products from API
export const searchProducts = createAsyncThunk(
  "products/search",
  async (query) => {
    const response = await axios.get("https://fakestoreapi.com/products");
    const filtered = response.data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    console.log("searching products from api:", filtered);
    return filtered;
  }
);

// Delete product
export const deleteProduct = createAsyncThunk("products/delete", async (id) => {
  await axios.delete(`https://fakestoreapi.com/products/${id}`);
  return id;
});

// Update product
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

  reducers: {
    sortManually: (state, action) => {
      state.items1 = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      // Fetch Products
      .addCase(fetchProduct1.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProduct1.fulfilled, (state, action) => {
        state.items1 = action.payload;
        state.loading = false;
      })
      .addCase(fetchProduct1.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch products";
      })

      // Search Products
      .addCase(searchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.items1 = action.payload;
        state.loading = false;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Search failed";
      })

      // Delete Product
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items1 = state.items1.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(deleteProduct.rejected, (action) => {
        console.log("Delete failed:", action.payload);
      })

      // Update Product
      .addCase(updateProduct.fulfilled, (state, action) => {
        const updated = action.payload;
        const updatedList = (list) =>
          list.map((item) => (item.id === updated.id ? { ...updated } : item));
        state.items1 = updatedList(state.items1);
      })

      .addCase(updateProduct.rejected, (action) => {
        console.log("Update failed:", action.payload);
      });
  },
});
export const { sortManually } = productSlice.actions;

export default productSlice.reducer;
