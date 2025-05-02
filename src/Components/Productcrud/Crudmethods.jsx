import { Container, Table } from "react-bootstrap";
import "./Productssass.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct1, fetchProducts2 } from "../../reduxthunk/Productslice";

const Crudmethods = () => {
  const dispatch = useDispatch();

  const { items1, items2, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProduct1("men's clothing")); // pass the category
  }, []);

  useEffect(() => {
    dispatch(fetchProducts2()); // ✅ Thunk call for second API
  }, []);

  if (loading) return <p>Please wait...</p>;

  return (
    <Container style={{ marginTop: "7%", paddingBottom: "30px" }}>
      <h2
        style={{
          width: "21%",
          textTransform: "capitalize",
          marginBottom: "3%",
          borderBottom: "3px solid red",

          paddingBottom: "10px",
          fontSize: "18px",
          marginTop: "3%",
        }}
      >
        Popular Products from first API
      </h2>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>id</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price ($)</th>
            <th>Category</th>
            <th>Rating Count</th>
          </tr>
        </thead>
        <tbody>
          {items1.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <img
                  src={item.image}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "contain",
                  }}
                  alt="product"
                />
              </td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>{item.rating?.count}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h2
        style={{
          width: "23%",
          textTransform: "capitalize",
          marginBottom: "3%",
          borderBottom: "3px solid blue",
          paddingBottom: "10px",
          fontSize: "18px",
          marginTop: "3%",
        }}
      >
        Popular Products from Second API
      </h2>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>id</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price ($)</th>
            <th>Category</th>
            <th>Rating Count</th>
          </tr>
        </thead>
        <tbody>
          {items2.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <img
                  src={item.image}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "contain",
                  }}
                  alt="product"
                />
              </td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>{item.rating?.count}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Crudmethods;
