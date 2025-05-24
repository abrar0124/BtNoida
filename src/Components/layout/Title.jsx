function Title({ level, children, className }) {
  return (
    <>
      {level == "1" ? (
        <h2 className={className}>{children}</h2>
      ) : level == "2" ? (
        <h2 className={`fs-custom font-serif mt-4 ${className}`}>{children}</h2>
      ) : level == "3" ? (
        <h2 className={`font-serif fs-17 ${className}`}>{children}</h2>
      ) : level == "4" ? (
        <h2 className={`mt-3 custom-font-serif ${className}`}>{children}</h2>
      ) : level == "5" ? (
        <h2 className={`fs-5 ${className}`}>{children}</h2>
      ) : level == "6" ? (
        <h2
          className={`custom-width-40 fs-4 custom-font-serif custom-border-bottom  pb-1 ${className}`}
        >
          {children}
        </h2>
      ) : level == "7" ? (
        <h2
          className={`custom-width-50 fs-4 custom-font-serif custom-border-bottom  pb-1 ${className}`}
        >
          {children}
        </h2>
      ) : null}
    </>
  );
}

export default Title;

// import React, { useEffect } from "react";
// import "./sassfile.scss";
// import { FaGraduationCap } from "react-icons/fa";
// import { Image } from "react-bootstrap";
// import Title from "./layout/Title";
// import Body from "./layout/Body";
//  import { useDispatch, useSelector } from "react-redux";
//  import { fetchUsers } from "./Userslice/Userslice";
// const Education = () => {
//    const dispatch = useDispatch();
//   const { list, loading, error } = useSelector((state) => state.user);

//   useEffect(() => {
//     dispatch(fetchUsers());
//   }, [dispatch]);

//   if (loading) return <p>Loading users...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <section id="education" className="edu-section p-6 text-black">

//      <h2 className="text-xl font-serif font-bold mb-4">User List</h2>
//       <table className="table-auto w-full border font-serif">
//         <thead>
//           <tr>
//             <th className="border px-4 py-2">ID</th>
//             <th className="border px-4 py-2">Name</th>
//             <th className="border px-4 py-2">Email</th>
//             <th className="border px-4 py-2">Password</th>

//             <th className="border px-4 py-2">Username</th>
//           </tr>
//         </thead>
//         <tbody>
//           {list.map((user) => (
//             <tr key={user.id}>
//               <td className="border px-4 py-2">{user.id}</td>
//               <td className="border px-4 py-2">
//                 {user.name.firstname} {user.name.lastname}
//               </td>
//               <td className="border px-4 py-2">{user.email}</td>
//               <td className="border px-4 py-2">{user.password}</td>

//               <td className="border px-4 py-2">{user.username}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </section>
//   );
// };

// export default Education;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchUsers = createAsyncThunk("users/fetch", async () => {
//   const response = await axios.get("https://fakestoreapi.com/users");
//   return response.data;
// });

// const userSlice = createSlice({
//   name: "users",
//   initialState: {
//     list: [],
//     loading: false,
//     error: null,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUsers.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchUsers.fulfilled, (state, action) => {
//         state.list = action.payload;
//         console.log("Get All Users:", state.list);
//         state.loading = false;
//       })
//       .addCase(fetchUsers.rejected, (state, action) => {
//         state.loading = false;
//         state.error = "Failed to fetch users";
//         console.log("Fetch users error:", action.payload);
//       });
//   },
// });

// export default userSlice.reducer;

// user: Userslice,
