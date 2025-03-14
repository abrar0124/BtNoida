import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Productarray from "./Productarray";

const backgroundColors = [
  "orange",
  "gray",
  "seagreen",
  "red",
  "lightgray",
  "black",
  "orange",
  "lightgray",
  "skyblue",
  "purple",
  "seagreen",
  "orange",
  "skyblue",
  "black",
  "blue",
  "pink",
  "purple",
  "skyblue",
  "blue",
];
function Products() {
  return (
    <>
      {/* First Row with 2 Products */}
      <Row className="g-0">
        {Productarray.slice(0, 2).map((product, index) => (
          <Col key={product.id} md={6} className="p-0">
            <Link
              className="text-decoration-none"
              to={`/details/${product.id}`}
            >
              <div
                className="d-flex align-items-center justify-content-center text-white text-center"
                style={{
                  backgroundColor:
                    backgroundColors[index % backgroundColors.length],
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                }}
              >
                <p className="fs-3">{product.name}</p>
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid"
                  style={{
                    height: "300px",
                  }}
                />
              </div>
            </Link>
          </Col>
        ))}
      </Row>

      {/* Second Row with 3 Products */}
      <Row className="g-0">
        {Productarray.slice(2, 5).map((product, index) => (
          <Col key={product.id} md={4} className="p-0">
            <Link
              className="text-decoration-none"
              to={`/details/${product.id}`}
            >
              <div
                className="d-flex align-items-center justify-content-center text-white text-center"
                style={{
                  backgroundColor:
                    backgroundColors[(index + 2) % backgroundColors.length],
                  minHeight: "300px",
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                }}
              >
                <p className="fs-3">{product.name}</p>
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid"
                  style={{
                    maxWidth: "80%",
                    height: "auto",
                  }}
                />
              </div>
            </Link>
          </Col>
        ))}
      </Row>
      <Row className="g-0">
        {Productarray.slice(5, 7).map((product, index) => (
          <Col key={product.id} md={6} className="p-0">
            <Link
              className="text-decoration-none"
              to={`/details/${product.id}`}
            >
              <div
                className="d-flex align-items-center justify-content-center text-white text-center"
                style={{
                  backgroundColor:
                    backgroundColors[(index + 5) % backgroundColors.length],
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                }}
              >
                <p className="fs-3">{product.name}</p>
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid"
                  style={{
                    height: "300px",
                  }}
                />
              </div>
            </Link>
          </Col>
        ))}
      </Row>
      <Row className="g-0">
        {Productarray.slice(7, 10).map((product, index) => (
          <Col key={product.id} md={4} className="p-0">
            <Link
              className="text-decoration-none"
              to={`/details/${product.id}`}
            >
              <div
                className="d-flex align-items-center justify-content-center text-white text-center"
                style={{
                  backgroundColor:
                    backgroundColors[(index + 7) % backgroundColors.length],
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                }}
              >
                <p className="fs-3">{product.name}</p>
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid"
                  style={{
                    height: "300px",
                  }}
                />
              </div>
            </Link>
          </Col>
        ))}
      </Row>
      <Row className="g-0">
        {Productarray.slice(10, 12).map((product, index) => (
          <Col key={product.id} md={6} className="p-0">
            <Link
              className="text-decoration-none"
              to={`/details/${product.id}`}
            >
              <div
                className="d-flex align-items-center justify-content-center text-white text-center"
                style={{
                  backgroundColor:
                    backgroundColors[(index + 10) % backgroundColors.length],
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                }}
              >
                <p className="fs-3">{product.name}</p>
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid"
                  style={{
                    height: "300px",
                  }}
                />
              </div>
            </Link>
          </Col>
        ))}
      </Row>
      <Row className="g-0">
        {Productarray.slice(12, 15).map((product, index) => (
          <Col key={product.id} md={4} className="p-0">
            <Link
              className="text-decoration-none"
              to={`/details/${product.id}`}
            >
              <div
                className="d-flex align-items-center justify-content-center text-white text-center"
                style={{
                  backgroundColor:
                    backgroundColors[(index + 12) % backgroundColors.length],
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                }}
              >
                <p className="fs-3">{product.name}</p>
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid"
                  style={{
                    height: "300px",
                  }}
                />
              </div>
            </Link>
          </Col>
        ))}
      </Row>
      <Row className="g-0">
        {Productarray.slice(15, 17).map((product, index) => (
          <Col key={product.id} md={6} className="p-0">
            <Link
              className="text-decoration-none"
              to={`/details/${product.id}`}
            >
              <div
                className="d-flex align-items-center justify-content-center text-white text-center"
                style={{
                  backgroundColor:
                    backgroundColors[(index + 15) % backgroundColors.length],
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                }}
              >
                <p className="fs-3">{product.name}</p>
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid"
                  style={{
                    height: "300px",
                  }}
                />
              </div>
            </Link>
          </Col>
        ))}
      </Row>
      <Row className="g-0">
        {Productarray.slice(17, 19).map((product, index) => (
          <Col key={product.id} md={6} className="p-0">
            <Link
              className="text-decoration-none"
              to={`/details/${product.id}`}
            >
              <div
                className="d-flex align-items-center justify-content-center text-white text-center"
                style={{
                  backgroundColor:
                    backgroundColors[(index + 17) % backgroundColors.length],
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                }}
              >
                <p className="fs-3">{product.name}</p>
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid"
                  style={{
                    height: "300px",
                  }}
                />
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Products;
