import { useState } from "react";

function Arrdata() {
  const [array, setArray] = useState([
    { id: 1, name: "Eman", age: 21 },
    { id: 2, name: "basil", age: 20 },
    { id: 3, name: "Abrar", age: 22 },
    { id: 4, name: "fatima", age: 23 },
  ]);
  const [name, setname] = useState("");
  const [age, setage] = useState(null);
  const [edit, setedit] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortorder, setsortorder] = useState("asc");

  const handlesortorder = () => {
    setsortorder(sortorder === "asc" ? "desc" : "asc");

    setArray((prev) =>
      [...prev].sort((a, b) =>
        sortorder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      )
    );
  };

  const filtereddata = array.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  const handleadd = () => {
    setArray((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: name,
        age: age,
      },
    ]);
  };

  const handledelete = (id) => {
    setArray((prev) => prev.filter((p) => p.id != id));
  };
  const handledit = (id) => {
    const data = array.find((p) => p.id == id);
    setedit(data);
    setname(data.name);
    setage(data.age);
  };

  const handleupdate = () => {
    setArray((prev) =>
      prev.map((p) =>
        p.id == edit.id ? { id: edit, name: name, age: age } : p
      )
    );
    setedit(null);
    setname("");
    setage("");
  };

  return (
    <>
      <div className="mt-5" style={{ marginLeft: "6.5%" }}>
        <input
          className="border p-2 border-black"
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setname(e.target.value)}
        />
        <input
          className=" ms-2 p-2 border border-black"
          type="number"
          value={age}
          placeholder="Enter your age"
          onChange={(e) => setage(e.target.value)}
        />
        <button
          className=" ms-2 p-2 border fw-bold  border-green"
          style={{ backgroundColor: "green", color: "white" }}
          onClick={handleadd}
        >
          Add record
        </button>
      </div>
      <ul>
        <input
          type="text"
          className=" ms-5 p-2 mt-3 border border-black"
          placeholder="Searching record..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {filtereddata.length > 0 ? (
          filtereddata.map((user) => (
            <li
              className="border  border-black mt-5  p-3 ms-5"
              style={{ width: "60%" }}
              key={user.id}
            >
              <div className="d-flex gap-5 flex-wrap ">
                <p className="fw-bold">
                  <span className="fw-normal">Name:{user.name}</span>
                </p>
                <p className="fw-bold">
                  <span className="fw-normal">Age:{user.age}</span>
                </p>
                <button
                  className="border border-green fw-bold p-1"
                  style={{ backgroundColor: "brown", color: "white" }}
                  onClick={() => handledelete(user.id)}
                >
                  Delete record
                </button>
                <button
                  className="border border-purple fw-bold p-1"
                  style={{ backgroundColor: "purple", color: "white" }}
                  onClick={() => handledit(user.id)}
                >
                  Edit record
                </button>
                <button
                  className="border border-black fw-bold p-1"
                  style={{ backgroundColor: "black", color: "white" }}
                  onClick={handleupdate}
                >
                  Update record
                </button>
              </div>
            </li>
          ))
        ) : (
          <p className="text-center col-span-full">No products found.</p>
        )}
      </ul>
      <button
        className=" mt-2 border fw-bold  fs-5 p-3"
        style={{
          backgroundColor: "ThreeDHighlight",
          border: "palegreen",
          color: "white",
          marginLeft: "6%",
          width: "130px",
        }}
        onClick={handlesortorder}
      >
        Sorting
      </button>
    </>
  );
}
export default Arrdata;
