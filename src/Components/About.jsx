import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  fetchProduct1,
  updateProduct,
  searchProducts,
  sortManually,
} from "../reduxthunk/Productslice";
import { useNavigate } from "react-router-dom";
import { logout } from "./Authslice/Authslice";

const About = () => {
  const dispatch = useDispatch();
  const { items1, loading } = useSelector((state) => state.products);
  const { username, password } = useSelector((state) => state.auth);
  const [sortAsc, setSortAsc] = useState(true);
  const navigate = useNavigate();

  const [editData, setEditData] = useState({
    id: null,
    title: "",
    category: "",
    price: "",
    image: "",
  });

  const [updatingId, setUpdatingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    dispatch(fetchProduct1());
    dispatch(searchProducts(searchTerm));
  }, [searchTerm, dispatch]);

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

  const handleDelete = (id) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    if (selectedId !== null) {
      dispatch(deleteProduct(selectedId));
      setIsModalOpen(false);
    }
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("loginData");
    dispatch(logout());
    navigate("/login");
  };

  return (
    <section id="about" className="text-black py-10 bg-white min-h-screen">
      <div className="mt-[6%] px-6 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h2 className="text-[30px] font-serif">Welcome to the Admin Panel</h2>
        </div>

        <div className="border border-2 w-[30%] p-3">
          {!username && !password ? (
            <p className="font-serif font-medium text-lg text-red-600">
              User Detail will show after login.
            </p>
          ) : (
            <>
              <p className="font-serif font-medium text-lg text-green-600">
                User Detail has been shown after login:
              </p>
              <p className="text-lg font-serif font-bold text-black">
                UserName:{" "}
                <span className="text-xl text-green-700">{username}</span>
              </p>
              <p className="text-lg font-serif font-bold text-black">
                Password:{" "}
                <span className="ps-2 text-xl text-green-700">{password}</span>
              </p>
            </>
          )}
        </div>

        <button
          onClick={handleLogout}
          className="mt-2 py-2 w-[20%] bg-red-500 text-white text-lg rounded transition duration-300 hover:bg-red-700"
        >
          Logout
        </button>

        <h2 className="text-xl font-serif font-bold my-4">Products List</h2>

        <div className="flex flex-col sm:flex-row gap-4 p-4">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border w-full px-3 py-2 rounded"
          />
        </div>

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

        <div className="overflow-x-auto font-serif rounded-md">
          <table className="min-w-full text-sm border-collapse">
            <thead className="text-gray-800">
              <tr>
                {/* ID Header */}
                <th className="border w-[10%] px-4 py-2">
                  <button
                    onClick={() => {
                      const sorted = [...items1].sort((a, b) =>
                        sortAsc ? a.id - b.id : b.id - a.id
                      );
                      dispatch(sortManually(sorted));
                      setSortAsc(!sortAsc);
                    }}
                    className="flex items-center justify-center w-full"
                  >
                    <span className="flex items-center gap-2">
                      ID
                      <img
                        src={sortAsc ? "Images/bb.png" : "Images/tt.jpeg"}
                        className="w-4 h-4"
                        alt="sort"
                      />
                    </span>
                  </button>
                </th>

                {/* Title Header */}
                <th className="border px-4 py-2">
                  <button
                    onClick={() => {
                      const sorted = [...items1].sort((a, b) =>
                        sortAsc
                          ? a.title.localeCompare(b.title)
                          : b.title.localeCompare(a.title)
                      );
                      dispatch(sortManually(sorted));
                      setSortAsc(!sortAsc);
                    }}
                    className="flex items-center justify-center w-full"
                  >
                    <span className="flex items-center gap-2">
                      Title
                      <img
                        src={sortAsc ? "Images/bb.png" : "Images/tt.jpeg"}
                        className="w-4 h-4"
                        alt="sort"
                      />
                    </span>
                  </button>
                </th>

                {/* Price Header */}
                <th className="border w-[14%] px-4 py-2">
                  <button
                    onClick={() => {
                      const sorted = [...items1].sort((a, b) =>
                        sortAsc ? a.price - b.price : b.price - a.price
                      );
                      dispatch(sortManually(sorted));
                      setSortAsc(!sortAsc);
                    }}
                    className="flex items-center justify-center w-full"
                  >
                    <span className="flex items-center gap-2">
                      Price
                      <img
                        src={sortAsc ? "Images/bb.png" : "Images/tt.jpeg"}
                        className="w-4 h-4"
                        alt="sort"
                      />
                    </span>
                  </button>
                </th>

                {/* Category Header */}
                <th className="border px-4 py-2">
                  <button
                    onClick={() => {
                      const sorted = [...items1].sort((a, b) =>
                        sortAsc
                          ? a.category.localeCompare(b.category)
                          : b.category.localeCompare(a.category)
                      );
                      dispatch(sortManually(sorted));
                      setSortAsc(!sortAsc);
                    }}
                    className="flex items-center justify-center w-full"
                  >
                    <span className="flex items-center gap-2">
                      Category
                      <img
                        src={sortAsc ? "Images/bb.png" : "Images/tt.jpeg"}
                        className="w-4 h-4"
                        alt="sort"
                      />
                    </span>
                  </button>
                </th>

                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-gray-500">
                    Loading products...
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

        {/* Modal for delete confirmation */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
            <div className="bg-white p-6  text-center w-[90%] max-w-md">
              <h3 className="text-xl font-serif font-bold mb-4 text-red-600">
                Confirm Deletion
              </h3>
              <p className="mb-6 text-gray-700">
                Are you sure you want to delete this product?
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={confirmDelete}
                  className="bg-red-600 hover:bg-red-700  text-white px-4 py-2"
                >
                  Yes, Delete
                </button>
                <button
                  onClick={cancelDelete}
                  className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
