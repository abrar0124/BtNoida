import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  fetchProduct1,
  fetchProducts2,
  updateProduct,
} from "../reduxthunk/Productslice";

const About = () => {
  const dispatch = useDispatch();
  const { items1, items2, loading } = useSelector((state) => state.products);
  const [editData, setEditData] = useState({
    id: null,
    title: "",
    category: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    dispatch(fetchProduct1("men's clothing"));
    dispatch(fetchProducts2());
  }, []);
  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };
  const handleEdit = (item) => {
    setEditData({
      id: item.id,
      title: item.title,
      category: item.category,
      price: item.price,
      image: item.image,
    });
  };

  const handleUpdate = () => {
    dispatch(updateProduct({ ...editData }));
    setEditData({ id: null, title: "", category: "", price: "", image: "" });
  };

  if (loading)
    return (
      <p className="text-center mt-10 text-lg  text-gray-700">Please wait...</p>
    );

  return (
    <section id="about" className="text-black py-10 bg-white min-h-screen">
      <div className="mt-[6%] px-6 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h2 className="text-[30px] font-serif">Welcome to the Admin Panel</h2>
        </div>
        <h2 className="text-xl font-serif font-bold mb-4">Products List</h2>

        <div className="flex mb-3 gap-2 flex-wrap">
          <input
            type="text"
            placeholder="Title"
            value={editData.title}
            onChange={(e) =>
              setEditData({ ...editData, title: e.target.value })
            }
            className="border w-[20%] px-3 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Category"
            value={editData.category}
            onChange={(e) =>
              setEditData({ ...editData, category: e.target.value })
            }
            className="border px-3 w-[20%] py-2 rounded"
          />
          <input
            type="number"
            placeholder="Price"
            value={editData.price}
            onChange={(e) =>
              setEditData({ ...editData, price: e.target.value })
            }
            className="border w-[20%] px-3 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={editData.image}
            onChange={(e) =>
              setEditData({ ...editData, image: e.target.value })
            }
            className="border w-[20%] px-3 py-2 rounded"
          />
          <button
            onClick={handleUpdate}
            className="bg-red-900 text-white px-4 py-2 rounded"
          >
            Update
          </button>
        </div>
        {/* First Table */}
        <div className="overflow-x-auto font-serif rounded-md">
          <table className="min-w-full text-sm border-collapse">
            <thead className=" text-gray-800">
              <tr>
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Image</th>
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Price ($)</th>
                <th className="border px-4 py-2">Category</th>
                <th className="border px-4 py-2">Rating Count</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items1.map((item, index) => (
                <tr
                  key={item.id}
                  className={index % 2 === 0 ? "bg-white" : "bg-green-100"}
                >
                  <td className="border px-4 py-2">{item.id}</td>
                  <td className="border px-4 py-2">
                    <img
                      src={item.image}
                      alt="product"
                      className="w-[50px] h-[50px] object-contain"
                    />
                  </td>
                  <td className="border px-4 py-2">{item.title}</td>
                  <td className="border px-4 py-2">${item.price}</td>
                  <td className="border px-4 py-2">{item.category}</td>
                  <td className="border px-4 py-2">{item.rating?.count}</td>
                  <td className="border px-4 py-2">
                    <div className="flex">
                      <button
                        onClick={() => handleEdit(item)}
                        className="bg-green-600 text-white px-3 py-1 rounded mr-2"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Second API Title */}
        <h2 className="w-fit text-[18px] font-serif  capitalize mb-6 border-b-4 border-blue-600 pb-2 mt-12">
          Popular Products from Second API
        </h2>

        {/* Second Table */}
        <div className="overflow-x-auto font-serif rounded-md">
          <table className="min-w-full text-sm border-collapse">
            <thead className=" text-gray-800">
              <tr>
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Image</th>
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Price ($)</th>
                <th className="border px-4 py-2">Category</th>
                <th className="border px-4 py-2">Rating Count</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items2.map((item, index) => (
                <tr
                  key={item.id}
                  className={index % 2 === 0 ? "bg-white" : "bg-green-100"}
                >
                  <td className="border px-4 py-2">{item.id}</td>
                  <td className="border px-4 py-2">
                    <img
                      src={item.image}
                      alt="product"
                      className="w-[50px] h-[50px] object-contain"
                    />
                  </td>
                  <td className="border px-4 py-2">{item.title}</td>
                  <td className="border px-4 py-2">${item.price}</td>
                  <td className="border px-4 py-2">{item.category}</td>
                  <td className="border px-4 py-2">{item.rating?.count}</td>
                  <td className="border px-4 py-2">
                    <div className="flex">
                      <button
                        onClick={() => handleEdit(item)}
                        className="bg-green-600 text-white px-3 py-1 rounded mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default About;
