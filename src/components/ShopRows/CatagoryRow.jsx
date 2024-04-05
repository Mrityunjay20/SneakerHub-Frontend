import ProductCard from "../ProductCard";
import api from "../../api";
import { useEffect, useState } from "react";

const PRODUCTS_PER_PAGE = 6;

export default function CatagoryRow({ usergender }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    api
      .get("/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const indexOfLastProduct = 1 * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <>
      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-bold py-8 text-white">
        Check out our latest products!
      </h1>
      <div className="flex flex-wrap justify-center">
        {/* {PRODUCTS.map((prod) => (
      <ProductCard
        key={Math.random()}
        productid={prod.ID}
        productName={prod.name}
        productPrice={prod.price}
        shortDescription={prod.shortDecp}
        className="m-4" // Optional: Adjust margin between product cards
      />
    ))} */}
        {currentProducts.map((prod) => (
          <ProductCard
            key={prod.id}
            productid={prod.id}
            productImage={prod.imageURL}
            productName={prod.name}
            productPrice={prod.price}
            shortDescription={prod.brand}
          />
        ))}
      </div>
    </>
  );
}
