import { Container, Button, Table } from "react-bootstrap";
import "./Productssass.scss";
import { ProductContext } from "../Context/ProductContext";
import { useContext } from "react";

const Crudmethods = () => {
  const {
    items,
    singleProduct,
    loading,
    handleAddProduct,
    handleGetSingleProduct,
    handleUpdateProduct,
    handleDeleteProduct, // <-- import delete
  } = useContext(ProductContext);

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

      {/* Product Table */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>id</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price ($)</th>
            <th>Category</th>
            <th>Rating Count</th>
            <th>Actions</th> {/* new column */}
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
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDeleteProduct(item.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Single Product Table */}
      {singleProduct && (
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
            <tr>
              <td>{singleProduct.id}</td>
              <td>
                <img
                  src={singleProduct.image}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "contain",
                  }}
                  alt="product"
                />
              </td>
              <td>{singleProduct.title}</td>
              <td>{singleProduct.price}</td>
              <td>{singleProduct.category}</td>
              <td>{singleProduct.rating?.count}</td>
            </tr>
          </tbody>
        </Table>
      )}

      {/* Action Buttons */}
      <Button
        variant="primary"
        onClick={handleGetSingleProduct}
        className="mb-4 me-2 p-3"
      >
        Get Single Product
      </Button>

      <Button
        variant="success"
        onClick={handleAddProduct}
        className="mb-4 me-2 p-3"
      >
        Add New Product
      </Button>

      <Button
        variant="warning"
        onClick={handleUpdateProduct}
        className="mb-4 p-3"
      >
        Update Product
      </Button>
    </Container>
  );
};

export default Crudmethods;
