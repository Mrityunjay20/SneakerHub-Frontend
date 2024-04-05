import React, { useEffect } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import confetti from "canvas-confetti";

const OrderPlacedPage = () => {
  const [checkplaced,setCheckPlaced] = localStorage.getItem("orderplaced");
  useEffect(() => {
    // Trigger confetti effect when component mounts
    const duration = 15 * 1000; // 20 seconds
    const animationEnd = Date.now() + duration;

    const frame = () => {
      // Launch confetti
      confetti({
        particleCount: 300, // Adjust particle count
        spread: 3000000, // Adjust spread
        origin: { x: 0.5, y: 1 }, // Start from bottom middle
      });
    };

    frame();
    requestAnimationFrame(frame);

    // Redirect to home after 20 seconds
    const redirectTimer = setTimeout(() => {
      window.location.href = "/"; // Redirect to the home page
    }, duration);

    return () => clearTimeout(redirectTimer); // Clear timeout on unmount
  }, []);

  return (
    <>
      {checkplaced ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="max-w-md p-6 bg-white rounded-md shadow-xl text-center">
            <h1 className="text-3xl font-bold mb-6">
              Order Placed Successfully!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for your purchase.
            </p>
            <div className="w-24 h-24 mb-8 mx-auto">
              <ShoppingBagIcon className="w-24 h-24 text-black" />
            </div>
            <p className="text-gray-500 mb-2">
              You will be redirected to the home page shortly...
            </p>
            <a href="/" className="block text-blue-600 hover:underline mt-4">
              Go back to home page
            </a>
          </div>
        </div>
      ) : (
        <h1>Order Not PLaced</h1>
      )}
    </>
  );
};

export default OrderPlacedPage;
