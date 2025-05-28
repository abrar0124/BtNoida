import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  fetchProduct1,
  updateProduct,
  searchProducts,
} from "../reduxthunk/Productslice";

const About = () => {
  const dispatch = useDispatch();
  const { items1, loading } = useSelector((state) => state.products);

  const [editData, setEditData] = useState({
    id: null,
    title: "",
    category: "",
    price: "",
    image: "",
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [updatingId, setUpdatingId] = useState(null);

  useEffect(() => {
    dispatch(fetchProduct1());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleEdit = (item) => {
    setEditData({
      id: item.id,
      title: item.title,
      category: item.category,
      price: item.price,
    });
  };

  const handleUpdate = async () => {
    setUpdatingId(editData.id);
    await dispatch(updateProduct({ ...editData }));
    setEditData({ id: null, title: "", category: "", price: "" });
    setUpdatingId(null);
  };

  return (
    <section id="about" className="text-black py-10 bg-white min-h-screen">
      <div className="mt-[6%] px-6 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h2 className="text-[30px] font-serif">Welcome to the Admin Panel</h2>
        </div>

        <h2 className="text-xl font-serif font-bold mb-4">Products List</h2>

        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => {
            const query = e.target.value;
            setSearchTerm(query);
            {
              dispatch(searchProducts(query));
            }
          }}
          className="border w-[40%] px-3 py-2 rounded mb-4"
        />
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
        </div>

        {/* 🧾 Table */}
        <div className="overflow-x-auto font-serif rounded-md">
          <table className="min-w-full text-sm border-collapse">
            <thead className="text-gray-800">
              <tr>
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Price ($)</th>
                <th className="border px-4 py-2">Category</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-gray-500">
                    Loading...
                  </td>
                </tr>
              ) : items1.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-gray-500">
                    No products found.
                  </td>
                </tr>
              ) : (
                items1.map((item, index) => (
                  <tr
                    key={item.id}
                    className={index % 2 === 0 ? "bg-white" : "bg-green-100"}
                  >
                    <td className="border px-4 py-2">{item.id}</td>
                    <td className="border px-4 py-2">
                      {updatingId === item.id ? (
                        <p className="text-sm italic text-gray-500">
                          Please wait...
                        </p>
                      ) : (
                        item.title
                      )}
                    </td>
                    <td className="border px-4 py-2">
                      {updatingId === item.id ? (
                        <p className="text-sm italic text-gray-500">
                          Please wait...
                        </p>
                      ) : (
                        item.price
                      )}
                    </td>
                    <td className="border px-4 py-2">
                      {updatingId === item.id ? (
                        <p className="text-sm italic text-gray-500">
                          Please wait...
                        </p>
                      ) : (
                        item.category
                      )}
                    </td>
                    <td className="border px-4 py-2">
                      <div className="flex items-center">
                        {editData.id === item.id ? (
                          <button
                            onClick={handleUpdate}
                            className="bg-yellow-600 text-white px-3 py-1 rounded mr-2"
                          >
                            Update
                          </button>
                        ) : (
                          <button
                            onClick={() => handleEdit(item)}
                            className="bg-green-600 text-white px-3 py-1 rounded mr-2"
                          >
                            Edit
                          </button>
                        )}

                        <button
                          onClick={() => handleDelete(item.id)}
                          className="bg-red-600 text-white px-3 py-1 rounded"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default About;
