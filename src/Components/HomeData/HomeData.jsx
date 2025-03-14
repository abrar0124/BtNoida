import Bgpic from "./Bgpic";
import CookieConsent from "./CookieConstant";
import DCSVenders from "./DCSVenders";
import Footer from "./Footer";
import Products from "./Products";
import VendorList from "./VenderList";

function HomeData() {
  return (
    <>
      <Bgpic />
      <VendorList />
      <DCSVenders />
      <Products />
      <Footer />
      <CookieConsent />
    </>
  );
}
export default HomeData;
