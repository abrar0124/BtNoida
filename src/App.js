import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import ProductDetailpage from "./Pages/Productdetailspage";
import Eventspage from "./Pages/Eventspage";
import EventDetail from "./Pages/EventDetail";
import Mobileapppage from "./Pages/Mobileapppage";
import Apipage from "./Pages/Apipage";
import Contactpage from "./Pages/Contactpage";
import Loginapi from "./Pages/Loginapi";
import HomeData from "./Components/HomeData/HomeData";
import ProductsCruds from "./Pages/ProductsCruds";
import "./index.css";
import PortfolioPage from "./Pages/PortfolioPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products crud" element={<ProductsCruds />} />
          <Route path="/Products crud" element={<ProductsCruds />} />
          <Route path="/bgpic" element={<HomeData />} />
          <Route path="/login" element={<Loginapi />} />
          <Route path="/details/:id" element={<ProductDetailpage />} />
          <Route path="/events" element={<Eventspage />} />
          <Route path="/Eventsdetail/:id" element={<EventDetail />} />
          <Route path="/mobileapps" element={<Mobileapppage />} />
          <Route path="/api" element={<Apipage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/Loginapi" element={<Loginapi />} />
          <Route path="/portfolio" element={<PortfolioPage />} />{" "}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
