import { Card } from "react-bootstrap";

function ReusableArray({ filteredProducts }) {
  return (
    <>
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <Card className="p-3 shadow-sm">
                <div className="text-primary text-center fw-bold mb-2 cursor-pointer">
                  ➕ To Compare
                </div>
                <Card.Body>
                  <Card.Img
                    src="/Images/c.png"
                    style={{ marginLeft: "40%", width: "29%" }}
                  />
                  <Card.Title className="text-center  fw-medium">
                    {product.name}
                  </Card.Title>
                </Card.Body>
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                  className="w-100 h-50 object-contain"
                />
              </Card>
            </div>
          ))
        ) : (
          <p className="text-center w-100">No products found.</p>
        )}
      </div>
    </>
  );
}
export default ReusableArray;
