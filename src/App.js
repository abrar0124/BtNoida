import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import ProductDetailpage from "./Pages/Productdetailspage";
import Eventspage from "./Pages/Eventspage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<ProductDetailpage />} />
          <Route path="/events" element={<Eventspage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
