import { Link, useParams } from "react-router-dom";
import Header from "../Header";
import Productarray from "../HomeData/Productarray";
import VendorTable from "./Vendercheckout";
import ProductsData from "./ProductsData";
import Footer from "../HomeData/Footer";
import Printers from "../Selfcomponents/Printers";
import GateReader from "../Selfcomponents/GateReader";
import OCR from "../Selfcomponents/OCR";
import Selfcheckin from "../Selfcomponents/Selfcheckin";
import Handheld from "../Selfcomponents/Handheld";
import Selfbag from "../Selfcomponents/Selfbag";
import Mobilebarcode from "../Selfcomponents/Mobilebarcode";
import Wearable from "../Selfcomponents/Werable";
import Egate from "../Selfcomponents/Egate";
import { useEffect } from "react";
import Text from "../Text";

function ProductDetail() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = Productarray.find((item) => item.id === Number(id));
  if (!product) {
    return (
      <h2 className="text-center mt-20 text-2xl font-semibold">
        Product not found
      </h2>
    );
  }

  return (
    <>
      <Header />

      <div className="mt-24 px-4 lg:px-20">
        <div className="flex items-center text-sm">
          <Link
            to="/"
            className="text-black no-underline  text-xl hover:underline"
          >
            Home
          </Link>
          <span className="mx-3 text-xl">/</span>
          <span className="text-gray-700 font-light text-xl">
            {product.name}
          </span>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-10">
          {/* Left Column - Image */}

          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="rounded max-w-full h-auto"
            />
          </div>

          {/* Right Column - Description */}
          <div className="w-full lg:w-1/2  lg:text-left">
            <p className="text-lg font-light">{product.description}</p>
            <p className=" font-light">{product.extraInfo}</p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <Link
                to={""}
                className=" inline-block    p-3   rounded text-white no-underline bg-blue-500 border-2 border-transparent hover:!text-blue-500  hover:bg-white hover:border-[#0880e2] transition duration-300 ease-in-out"
              >
                See more info
              </Link>
              <Link
                to=""
                className="p-3 text-lg no-underline  rounded border-2 border-blue-500 text-blue-500 hover:bg-blue-500  hover:!text-white transition"
              >
                See FAQ
              </Link>
            </div>
          </div>
        </div>

        {/* Conditional Rendering for Components */}
        {(id == 1 ||
          id == 2 ||
          id == 5 ||
          id == 7 ||
          id == 8 ||
          id == 10 ||
          id == 11 ||
          id == 17 ||
          id == 18 ||
          id == 19) && <VendorTable product={product} />}
        {product.id === 3 && (
          <>
            <Printers product={product} />
            <ProductsData product={product} />
          </>
        )}
        {product.id === 4 && (
          <>
            <GateReader product={product} />
            <ProductsData product={product} />
          </>
        )}
        {product.id === 6 && (
          <>
            <OCR product={product} />
            <ProductsData product={product} />
          </>
        )}
        {product.id === 9 && (
          <>
            <Selfcheckin product={product} />
            <ProductsData product={product} />
          </>
        )}
        {product.id === 12 && (
          <>
            <Handheld product={product} />
            <ProductsData product={product} />
          </>
        )}

        {product.id === 13 && (
          <>
            <Selfbag product={product} />
            <ProductsData product={product} />
          </>
        )}
        {product.id === 14 && (
          <>
            <Mobilebarcode product={product} />
            <ProductsData product={product} />
          </>
        )}
        {product.id === 15 && (
          <>
            <Wearable product={product} />
            <ProductsData product={product} />
          </>
        )}
        {product.id === 16 && (
          <>
            <Egate product={product} />
            <ProductsData product={product} />
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default ProductDetail;
