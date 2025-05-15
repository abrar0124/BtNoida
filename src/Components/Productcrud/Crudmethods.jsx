import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct1, fetchProducts2 } from "../../reduxthunk/Productslice";

const Crudmethods = () => {
  const dispatch = useDispatch();
  const { items1, items2, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProduct1("men's clothing"));
  }, []);

  useEffect(() => {
    dispatch(fetchProducts2());
  }, []);

  if (loading)
    return <p className="text-center mt-10 text-lg">Please wait...</p>;

  return (
    <div className="mt-[7%] px-4 pb-10 max-w-7xl mx-auto">
      {/* First API Title */}
      <h2 className="w-[21%] text-[18px] capitalize mb-6 border-b-4 border-red-600 pb-2 mt-6">
        Popular Products from first API
      </h2>

      {/* First API Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border border-gray-300">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Image</th>
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Price ($)</th>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Rating Count</th>
            </tr>
          </thead>
          <tbody>
            {items1.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border">{item.id}</td>
                <td className="px-4 py-2 border">
                  <img
                    src={item.image}
                    alt="product"
                    className="w-[50px] h-[50px] object-contain"
                  />
                </td>
                <td className="px-4 py-2 border">{item.title}</td>
                <td className="px-4 py-2 border">{item.price}</td>
                <td className="px-4 py-2 border">{item.category}</td>
                <td className="px-4 py-2 border">{item.rating?.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Second API Title */}
      <h2 className="w-[23%] text-[18px] capitalize mb-6 border-b-4 border-blue-600 pb-2 mt-10">
        Popular Products from Second API
      </h2>

      {/* Second API Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border border-gray-300">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Image</th>
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Price ($)</th>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Rating Count</th>
            </tr>
          </thead>
          <tbody>
            {items2.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border">{item.id}</td>
                <td className="px-4 py-2 border">
                  <img
                    src={item.image}
                    alt="product"
                    className="w-[50px] h-[50px] object-contain"
                  />
                </td>
                <td className="px-4 py-2 border">{item.title}</td>
                <td className="px-4 py-2 border">{item.price}</td>
                <td className="px-4 py-2 border">{item.category}</td>
                <td className="px-4 py-2 border">{item.rating?.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Crudmethods;
