import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import ProductDetailpage from "./Pages/Productdetailspage";
import Eventspage from "./Pages/Eventspage";
import Mobileapp from "./Pages/MObileapp";
import Api from "./Pages/Api";
import Contactus from "./Pages/Contactus";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<ProductDetailpage />} />
          <Route path="/events" element={<Eventspage />} />
          <Route path="/mobileapps" element={<Mobileapp />} />
          <Route path="/api" element={<Api />} />
          <Route path="/contact" element={<Contactus />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
