import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Breadcrumb, Button } from "react-bootstrap";
import Header from "../Header";
import Productarray from "../HomeData/Productarray"; // ✅ Import Productarray

function ProductDetail() {
  const { id } = useParams();
  const product = Productarray.find((item) => item.id === Number(id)); // ✅ Convert id to Number

  if (!product) {
    return <h2 className="text-center mt-5">Product not found</h2>;
  }
  return (
    <>
      <Header />
      <Container className="mt-5">
        {/* Breadcrumb */}
        <Breadcrumb style={{ marginTop: "7%" }}>
          <Link to="/" className="text-decoration-none text-dark fs-4">
            Home
          </Link>
          <Breadcrumb.Item active className="fs-4 ms-3 ">
            <span className="me-4"> /</span>
            {product.name}
          </Breadcrumb.Item>
        </Breadcrumb>

        <Row className="align-items-center">
          {/* Image Section */}
          <Col md={6} className="text-center">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded"
              style={{ maxWidth: "80%" }}
            />
          </Col>
          <Col md={6}>
            <h1 className="fw-bold">{product.name}</h1>{" "}
            {/* ✅ Changed title to name */}
            <p className="lead">{product.description}</p>
            <p>{product.extraInfo}</p>
            {/* Buttons */}
            <div className="d-flex gap-2">
              {product.buttons.map((btn, index) => (
                <Button key={index} className="w-25" variant={btn.style}>
                  {btn.text}
                </Button>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductDetail;
