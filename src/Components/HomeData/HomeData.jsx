import Bgpic from "./Bgpic";
import CookieConsent from "./CookieConstant";
import DCSVenders from "./DCSVenders";
import Footer from "./Footer";
import Products from "./Products";
import VendorList from "./VenderList";
import { useState } from "react";

function HomeData() {
  const [selectedVendors, setSelectedVendors] = useState([]); // State is defined in HomeData

  return (
    <>
      <Bgpic />
      <VendorList onSelectionChange={setSelectedVendors} />
      <DCSVenders selectedVendors={selectedVendors} />
      <Products />
      <Footer />
      <CookieConsent />
    </>
  );
}

export default HomeData;
