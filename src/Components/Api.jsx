import { Breadcrumb, Button } from "react-bootstrap";
import VendorTable from "./Detailpage/Vendercheckout";
import { Link } from "react-router-dom";

function Api() {
  return (
    <>
      <Breadcrumb style={{ marginTop: "7%", marginLeft: "5%" }}>
        <Link to="/" className="text-decoration-none text-dark fs-4">
          Home
        </Link>
        <Breadcrumb.Item active className="fs-4 ms-3 ">
          <span className="me-4"> /</span>
          Api
        </Breadcrumb.Item>
      </Breadcrumb>
      <p className="fs-2 fw-medium my-4" style={{ marginLeft: "5%" }}>
        Advanced Passenger Information
      </p>
      <p className="fs-5 lh-sm" style={{ marginLeft: "5%" }}>
        The authorities of certain countries require airlines to transmit
        Advance Passenger Information (API) for all passengers flying to or via
        their country before departure. Passengers can provide their Advance
        Passenger Information data during check-in (Web Check-in or Kiosk
        Check-in in Airport) or using online form. Some airlines such as Air
        Canada, easyjet, emirates, american airlines, singapore airlines, air
        france, qatar airways, etihad, and iberia allow the passengers to
        provide API using online form to enter required information before they
        go to the airport. Passengers won’t be asked to provide the passenger
        information again when checking in. Any inaccurate or incomplete data
        provided could delay the journey, either at check-in or with the
        immigration authorities. Those passengers who refuse to supply API will
        be refused entry to these countries and therefore will not be allowed to
        travel.
      </p>
      <Button className="p-3" style={{ marginLeft: "5%" }}>
        See More info
      </Button>
      <h2 className="my-5" style={{ marginLeft: "5%" }}>
        Advanced Passenger Information vendors
      </h2>
      <VendorTable />
    </>
  );
}
export default Api;
