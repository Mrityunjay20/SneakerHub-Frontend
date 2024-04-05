import { useState } from "react";
import api from "../api";

export default function ProductCard({productid, productName, productImage, productPrice, shortDescription}) {
  const [loading, setLoading] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [buttonClass, setButtonClass] = useState(''); // State to manage button class

  const addToCart = () => {
    setLoading(true);
    api.post(`/cart/add/${productid}/1`)
      .then(response => {
        console.log("Product added to cart:", response.data);
       setButtonClass('bg-green-500'); // Set button color to green
        setTimeout(() => {
          setButtonClass(''); // Restore button color after a delay
        }, 200); // Adjust the delay as needed
      })
      .catch(error => {
        console.error("Error adding product to cart:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="relative m-3 flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-72">
        <img
          src={productImage}
          alt="card-image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            {productName}
          </p>
          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
            ₹{productPrice}
          </p>
        </div>
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
          {shortDescription}
        </p>
      </div>
      <div className="p-6 pt-0">
        <button
          className={`align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 ${buttonClass}`}
          type="button"
          onClick={addToCart}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
