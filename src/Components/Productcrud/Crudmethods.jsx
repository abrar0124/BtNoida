import { Container, Button, Table } from "react-bootstrap";
import "./Productssass.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../reduxthunk/Productslice";

const Crudmethods = () => {
  const dispatch = useDispatch();

  const { items, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts()); // ✅ Thunk call
  }, [dispatch]);

  if (loading) return <p>Please wait...</p>;

  return (
    <Container style={{ marginTop: "7%", paddingBottom: "30px" }}>
      <h2
        style={{
          width: "180px",
          textTransform: "capitalize",
          marginBottom: "20px",
          borderBottom: "3px solid red",
          paddingBottom: "10px",
          fontSize: "18px",
        }}
      >
        Popular Products
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
          {items.map((item) => (
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
