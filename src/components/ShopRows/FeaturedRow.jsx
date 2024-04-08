import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import api from "../../api";

const PRODUCTS_PER_PAGE = 6;
export default function FeaturedRow({usergender}){

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

  const indexOfLastProduct = 5 * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
    return (<>
   <h1 className="text-4xl text-center font-bold py-8 text-white"> Check out our featured products!</h1>
    <div className="flex flex-wrap justify-center">
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
    </>)
}