import { Breadcrumb, Button } from "react-bootstrap";
import VendorTable from "./Detailpage/Vendercheckout";
import { Link } from "react-router-dom";
import Text from "./Text";

function Api() {
  return (
    <>
      <Breadcrumb style={{ marginTop: "7%", marginLeft: "5%" }}>
        <Link to="/" className="text-decoration-none text-dark fs-4">
          Home
        </Link>
        <Breadcrumb.Item active className="fs-4 ms-3 ">
          <Text type={"span"} content={"/"} className="me-4" />
          Api
        </Breadcrumb.Item>
      </Breadcrumb>

      <Text
        type={"p"}
        content={"Advanced Passenger Information"}
        className="fs-2 fw-medium my-4 ms-5"
      />

      <Text
        type={"p"}
        content={
          <>
            The authorities of certain countries require airlines to transmit
            Advance Passenger Information (API) for all passengers flying to or
            via their country before departure. Passengers can provide their
            Advance Passenger Information data during check-in (Web Check-in or
            Kiosk Check-in in Airport) or using online form. Some airlines such
            as Air Canada, easyjet, emirates, american airlines, singapore
            airlines, air france, qatar airways, etihad, and iberia allow the
            passengers to provide API using online form to enter required
            information before they go to the airport. Passengers won’t be asked
            to provide the passenger information again when checking in. Any
            inaccurate or incomplete data provided could delay the journey,
            either at check-in or with the immigration authorities. Those
            passengers who refuse to supply API will be refused entry to these
            countries and therefore will not be allowed to travel.
          </>
        }
        className="fs-5 lh-sm ms-5"
      />

      <Text type={"Button"} content={"See More info"} className="p-3 ms-5" />

      <Text
        type={"h2"}
        content={"Advanced Passenger Information vendors"}
        className="my-5 ms-5"
      />
      <VendorTable />
    </>
  );
}
export default Api;
