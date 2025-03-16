import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
function ProductsData({ product }) {
  return (
    <>
      <Row className="mt-5 me-5 border-top pt-4">
        <p className="fw-medium fs-3 pb-1">{product.name} and Bag Tag</p>
        <Col md={3}>
          <img className="w-100" src={product.images} />
        </Col>
        <Col md={9}>
          <p className="fw-medium fs-4">Definition of {product.name}</p>
          <p className="text-muted ">{product.Description}</p>
          <Link
            to={`/details/${product.id}`}
            className="text-primary navbar-brand"
          >
            Read More »
          </Link>
        </Col>
      </Row>
      <Row className="mt-4 border-top pt-4">
        <Col md={3}>
          <img
            className="w-100"
            style={{ maxWidth: "295px" }}
            src={product.Image}
          />
        </Col>
        <Col md={9}>
          <p className="fw-medium fs-4">Benefits of {product.name}</p>
          <ul>
            <li className="text-muted">{product.li1}</li>
            <li className="text-muted ">{product.li2}</li>
          </ul>
        </Col>
      </Row>
      <Row className="mt-5 me-5 border-top pt-4">
        <Col md={3}>
          <img className="w-100" src={product.images} />
        </Col>
        <Col md={9}>
          <p className="fw-medium fs-4">Different Kinds of {product.name}</p>
          <p className="text-muted ">{product.Discriptopn}</p>
          <Link
            to={`/details/${product.id}`}
            className="text-primary navbar-brand"
          >
            Read More »
          </Link>
        </Col>
      </Row>
      <Row className="mt-4 border-top pt-4">
        <Col md={3}>
          <img
            className="w-100"
            style={{ maxWidth: "295px" }}
            src={product.Image}
          />
        </Col>
        <Col md={9}>
          <p className="fw-medium fs-4">Benefits of mobile {product.name}</p>
          <ul>
            <li className="text-muted">{product.li3}</li>
          </ul>
        </Col>
      </Row>
    </>
  );
}
export default ProductsData;
