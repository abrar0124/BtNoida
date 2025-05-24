import React, { useEffect } from "react";
import "./sassfile.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./Userslice/Userslice";
const Education = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section id="education" className="edu-section p-6 text-black">
      <h2 className="text-xl font-serif font-bold mb-4">Users List</h2>
      <table className="table-auto w-full border font-serif">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Password</th>

            <th className="border px-4 py-2">Username</th>
          </tr>
        </thead>
        <tbody>
          {list.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">
                {user.name.firstname} {user.name.lastname}
              </td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.password}</td>
              <td className="border px-4 py-2">{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Education;
