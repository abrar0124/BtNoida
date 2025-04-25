import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [singleProduct, setSingleProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch all products
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setItems(response.data);
        console.log("Products fetched:", response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      setLoading(false);
    };
    getProducts();
  }, []);

  // Add new product
  const handleAddProduct = async () => {
    const newProduct = {
      title: "New Product",
      price: 20000,
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    };

    try {
      const response = await axios.post(
        "https://fakestoreapi.com/products",
        newProduct
      );
      const addedProduct = { ...response.data, rating: { count: 340 } };
      setItems((prev) => [...prev, addedProduct]);
      console.log("Total Items After Add new item:", [...items, addedProduct]);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  // Get single product
  const handleGetSingleProduct = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products/15");
      setSingleProduct(response.data);
      console.log("Single product fetched:", response.data);
    } catch (error) {
      console.error("Error fetching single product:", error);
    }
  };

  // Update product (preserve rating.count)
  const handleUpdateProduct = async () => {
    const updatedProduct = {
      id: 1,
      title: "Updated Product Title",
      price: 39.99,
      description: "This is an updated description for the product.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    };

    try {
      // find the existing item so we can grab its rating
      const existing = items.find((item) => item.id === updatedProduct.id);
      const response = await axios.put(
        `https://fakestoreapi.com/products/${updatedProduct.id}`,
        updatedProduct
      );
      // merge back in the old rating
      const merged = {
        ...response.data,
        rating: existing?.rating ?? { count: 0 },
      };
      console.log("Updated Product (with original rating):", merged);
      setItems((prev) =>
        prev.map((item) => (item.id === merged.id ? merged : item))
      );
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };
  // *Delete product by ID*
  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`https://fakestoreapi.com/products/${id}`);
      setItems((prev) => prev.filter((item) => item.id !== id));
      console.log(`Deleted product with id ${id}`);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  return (
    <ProductContext.Provider
      value={{
        items,
        singleProduct,
        loading,
        handleAddProduct,
        handleGetSingleProduct,
        handleUpdateProduct,
        handleDeleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
