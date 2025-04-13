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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<ProductDetailpage />} />
          <Route path="/events" element={<Eventspage />} />
          <Route path="/Eventsdetail/:id" element={<EventDetail />} />
          <Route path="/mobileapps" element={<Mobileapppage />} />
          <Route path="/api" element={<Apipage />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/Loginapi" element={<Loginapi />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
