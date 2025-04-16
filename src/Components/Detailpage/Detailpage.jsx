import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import Header from "../Header";
import Productarray from "../HomeData/Productarray";
import VendorTable from "./Vendercheckout";
import ProductsData from "./ProductsData";
import Footer from "../HomeData/Footer";
import Printers from "../Selfcomponents/Printers";
import GateReader from "../Selfcomponents/GateReader";
import OCR from "../Selfcomponents/OCR";
import Selfcheckin from "../Selfcomponents/Selfcheckin";
import Handheld from "../Selfcomponents/Handheld";
import Selfbag from "../Selfcomponents/Selfbag";
import Mobilebarcode from "../Selfcomponents/Mobilebarcode";
import Wearable from "../Selfcomponents/Werable";
import Egate from "../Selfcomponents/Egate";
import { useEffect } from "react";
import Text from "../Text";

function ProductDetail() {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const product = Productarray.find((item) => item.id === Number(id));
  if (!product) {
    return <h2 className="text-center mt-5">Product not found</h2>;
  }

  return (
    <>
      <Header />
      <Container className="mt-5">
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
          <Col md={6} className="text-center">
            <h2 className="mt-5 fw-medium" style={{ marginRight: "40%" }}>
              {product.name}
            </h2>
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded"
              style={{ maxWidth: "80%" }}
            />
          </Col>
          <Col md={6}>
            <p className="lead">{product.description}</p>
            <p>{product.extraInfo}</p>
            <div className="d-flex gap-2">
              <Text
                type={"Link"}
                content={"See more info"}
                className="p-3 fs-5 rounded custom-button"
              />
              <Text
                type={"Link"}
                content={"See FAQ"}
                className="p-3 fs-5 rounded custom-buttons"
              />
            </div>
          </Col>
        </Row>

        {/* Conditionally Render Components Based on ID */}
        {(id == 1 ||
          id == 2 ||
          id == 5 ||
          id == 7 ||
          id == 8 ||
          id == 10 ||
          id == 11 ||
          id == 17 ||
          id == 18 ||
          id == 19) && <VendorTable product={product} />}
        {product.id == 3 && (
          <>
            <Printers product={product} />
            <ProductsData product={product} />
          </>
        )}
        {product.id == 4 && (
          <>
            <GateReader product={product} />
            <ProductsData product={product} />
          </>
        )}
        {product.id == 6 && (
          <>
            <OCR product={product} />
            <ProductsData product={product} />
          </>
        )}
        {product.id == 9 && (
          <>
            <Selfcheckin product={product} />
            <ProductsData product={product} />
          </>
        )}
        {product.id == 12 && (
          <>
            <Handheld product={product} />
            <ProductsData product={product} />
          </>
        )}
        {product.id == 13 && (
          <>
            <Selfbag product={product} />
            <ProductsData product={product} />
          </>
        )}
        {product.id == 14 && (
          <>
            <Mobilebarcode product={product} />
            <ProductsData product={product} />
          </>
        )}
        {product.id == 15 && (
          <>
            <Wearable product={product} />
            <ProductsData product={product} />
          </>
        )}
        {product.id == 16 && (
          <>
            <Egate product={product} />
            <ProductsData product={product} />
          </>
        )}
      </Container>
      <Footer />
    </>
  );
}
export default ProductDetail;
