import { Link } from "react-router-dom";
import Productarray from "./Productarray";

const backgroundColors = [
  "orange",
  "gray",
  "seagreen",
  "red",
  "lightgray",
  "black",
  "orange",
  "lightgray",
  "skyblue",
  "purple",
  "seagreen",
  "orange",
  "skyblue",
  "black",
  "blue",
  "pink",
  "purple",
  "skyblue",
  "blue",
];

function Products() {
  const renderProducts = (start, end, colClass) => (
    <div className="flex flex-wrap w-full">
      {Productarray.slice(start, end).map((product, index) => (
        <div key={product.id} className={`${colClass}`}>
          <Link className="block no-underline " to={`/details/${product.id}`}>
            <div
              className="flex flex-col justify-between text-white text-center h-[450px] w-full"
              style={{
                backgroundColor:
                  backgroundColors[(index + start) % backgroundColors.length],
              }}
            >
              <p className="text-2xl text-start  p-4">{product.name}</p>
              <img
                src={product.image}
                alt={product.name}
                className="cover w-full h-[300px]"
              />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full m-0 p-0">
      {renderProducts(0, 2, "w-full md:w-1/2")}
      {renderProducts(2, 5, "w-full md:w-1/3")}
      {renderProducts(5, 7, "w-full md:w-1/2")}
      {renderProducts(7, 10, "w-full md:w-1/3")}
      {renderProducts(10, 12, "w-full md:w-1/2")}
      {renderProducts(12, 15, "w-full md:w-1/3")}
      {renderProducts(15, 17, "w-full md:w-1/2")}
      {renderProducts(17, 19, "w-full md:w-1/2")}
    </div>
  );
}

export default Products;
