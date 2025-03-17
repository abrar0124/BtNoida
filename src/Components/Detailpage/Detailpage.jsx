// import { Link, useParams } from "react-router-dom";
// import { Container, Row, Col, Breadcrumb, Button } from "react-bootstrap";
// import Header from "../Header";
// import Productarray from "../HomeData/Productarray";
// import VendorTable from "./Vendercheckout";
// import ProductsData from "./ProductsData";
// import Footer from "../HomeData/Footer";

// function ProductDetail() {
//   const { id } = useParams();
//   const product = Productarray.find((item) => item.id === Number(id)); // ✅ Convert id to Number
//   if (!product) {
//     return <h2 className="text-center mt-5">Product not found</h2>;
//   }
//   return (
//     <>
//       <Header />
//       <Container className="mt-5">
//         <Breadcrumb style={{ marginTop: "7%" }}>
//           <Link to="/" className="text-decoration-none text-dark fs-4">
//             Home
//           </Link>
//           <Breadcrumb.Item active className="fs-4 ms-3 ">
//             <span className="me-4"> /</span>
//             {product.name}
//           </Breadcrumb.Item>
//         </Breadcrumb>

//         <Row className="align-items-center">
//           <Col md={6} className="text-center">
//             <h2 className=" mt-5 fw-medium" style={{ marginRight: "40%" }}>
//               {product.name}
//             </h2>
//             <img
//               src={product.image}
//               alt={product.name}
//               className="img-fluid rounded"
//               style={{ maxWidth: "80%" }}
//             />
//           </Col>
//           <Col md={6}>
//             <p className="lead">{product.description}</p>
//             <p>{product.extraInfo}</p>
//             <div className="d-flex gap-2">
//               <Link className="p-3 fs-5  rounded  custom-button">
//                 See more info
//               </Link>
//               <Link className="p-3  fs-5 rounded  custom-buttons">See FAQ</Link>
//             </div>
//           </Col>
//         </Row>
//         <VendorTable product={product} />
//         <ProductsData product={product} />
//       </Container>
//       <Footer />
//     </>
//   );
// }

// export default ProductDetail;
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import Header from "../Header";
import Productarray from "../HomeData/Productarray";
import VendorTable from "./Vendercheckout";
import ProductsData from "./ProductsData";
import Footer from "../HomeData/Footer";

function ProductDetail() {
  const { id } = useParams();
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
              <Link className="p-3 fs-5 rounded custom-button">
                See more info
              </Link>
              <Link className="p-3 fs-5 rounded custom-buttons">See FAQ</Link>
            </div>
          </Col>
        </Row>

        {/* Conditionally Render Components Based on ID */}
        {(id == 1 ||
          id == 2 ||
          id == 4 ||
          id == 7 ||
          id == 8 ||
          id == 10 ||
          id == 11 ||
          id == 17 ||
          id == 18 ||
          id == 19) && <VendorTable product={product} />}
        {(id == 3 ||
          id == 5 ||
          id == 6 ||
          id == 9 ||
          id == 12 ||
          id == 13 ||
          id == 14 ||
          id == 15 ||
          id == 16) && <ProductsData product={product} />}
      </Container>
      <Footer />
    </>
  );
}
export default ProductDetail;
