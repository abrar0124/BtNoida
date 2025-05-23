const PrimaryButton = ({ button, children, className }) => {
  return (
    <>
      {button == "1" ? (
        <button type="submit" className={className}>
          {children}
        </button>
      ) : null}
    </>
  );
};
export default PrimaryButton;

// export const updateProduct = createAsyncThunk(
//   "products/update",
//   async (updatedProduct) => {
//     const response = await axios.put(
//       https://fakestoreapi.com/products/${updatedProduct.id},
//       updatedProduct
//     );
//     return response.data;
//   }
// );

// .addCase(updateProduct.fulfilled, (state, action) => {
//   const updated = action.payload;
//   // Maintain the rating from existing product
//   const updateInList = (list) =>
//     list.map((item) =>
//       item.id === updated.id ? { ...updated, rating: item.rating } : item
//     );

//   state.items1 = updateInList(state.items1);
//   state.items2 = updateInList(state.items2);

//   console.log("Product updated:", updated);
// })
// .addCase(updateProduct.rejected, (state, action) => {
//   console.log("Update failed:", action.payload);
// });

// const handleUpdate = () => {
//   dispatch(updateProduct({ ...editData }));
//   setEditData({ id: null, title: "", category: "", price: "", image: "" });
// };

// <button
//   onClick={handleUpdate}
//   className="bg-red-900 text-white px-4 py-2 rounded"
// >
//   Update
// </button>
