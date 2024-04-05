import React, { useState, useEffect } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import LoginPagePrompt from '../components/LoginRedirect';
import api from "../api";
const Cart = () => {
  const loggedin = localStorage.getItem('token');


  const [cartItems, setCartItems] = useState([]);

  const fetchData = async () => {
    try {
      const response = await api.get("/cart");
      setCartItems(response.data);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [taxRate] = useState(0.05);
  const [shippingRate] = useState(15.0);

  const updateQuantity = async (id, quantity) => {
    if (!quantity || quantity < 1) {
      return;
    }
    try {
      await api.put(`/cart/update/${id}/${quantity}`);
      // After successful update, fetch data again to get updated cart items
      fetchData();
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const removeItem = async (id) => {
    try {
      await api.delete(`/cart/remove/${id}`);
      // After successful removal, fetch data again to get updated cart items
      fetchData();
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };
  const recalculateCart = () => {
    let subtotal = 0;
    cartItems.forEach((item) => {
      subtotal += item.price * item.quantity;
    });

    const tax = subtotal * taxRate;
    const shipping = subtotal > 0 ? shippingRate : 0;
    const total = subtotal + tax + shipping;

    return {
      subtotal: subtotal.toFixed(2),
      tax: tax.toFixed(2),
      shipping: shipping.toFixed(2),
      total: total.toFixed(2),
    };
  };

  const cartTotal = recalculateCart();

  return (<div className="min-h-[75%] max-h-max">
  {loggedin != null ?<div className="md:p-5 md:mx-20 sm:mx-0 sm:p-0 text-white">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>

      <div className="flex items-center py-2">
        <div className="w-1/6 pl-2">Image</div>
        <div className="w-3/6 pl-2">Product</div>
        <div className="w-1/6 pl-2">Price</div>
        <div className="w-1/12 pl-2 text-center">Quantity</div>{" "}
        {/* Adjusted width */}
        <div className="w-1/6 pl-2 text-center">Remove</div>
        <div className="w-1/6 pl-2 pr-4 text-right">Total</div>
      </div>

      {cartItems.map((item) => (
        <div
          key={item.cart_id}
          className="flex items-center p-1 border-b border-gray-200"
        >
          <div className="w-1/6">
            <img src={item.imageURL} alt="Product" className="w-16 h-auto" />
          </div>
          <div className="w-3/6 pl-2">
            <div className="font-bold">{item.name}</div>
            <p className="text-sm text-gray-600">{item.brand}</p>
          </div>
          <div className="w-1/6 pl-2">${item.price}</div>
          {/* Quantity input with buttons */}
          <div className="relative w-1/12 rounded  pl-2">
            <div className=" flex h- items-center justify-center border-white border rounded-lg shadow-md">
              <button
                className="w-20  h-full text-center text-2xl text-white font-semibold cursor-pointer select-none"
                onClick={() => updateQuantity(item.pid, item.quantity - 1)}
              >
                -
              </button>
              <input
                value={item.quantity}
                min="1"
                onChange={(e) =>
                  updateQuantity(item.pid, parseInt(e.target.value))
                }
                placeholder="1"
                className="w-8 text-center text-white text-l bg-black  border-l border-r  border-white-500"
              />
              <button
                className="w-20 h-full text-center text-xl text-white cursor-pointer select-none"
                onClick={() => updateQuantity(item.pid, item.quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="w-1/6 flex justify-center items-center">
            <button
              onClick={() => removeItem(item.pid)}
              className="text-red-600 hover:text-red-800 focus:outline-none"
            >
              <TrashIcon className="w-5  h-5" />
            </button>
          </div>
          <div className="w-1/6 pr-2 text-right">
            ${(item.price * item.quantity).toFixed(2)}
          </div>
        </div>
      ))}

      <div className="mt-4 ">
        <div className="flex justify-between">
          <div className="font-bold">Subtotal</div>
          <div>${cartTotal.subtotal}</div>
        </div>
        <div className="flex justify-between">
          <div className="font-bold">Tax (5%)</div>
          <div>${cartTotal.tax}</div>
        </div>
        <div className="flex justify-between">
          <div className="font-bold">Shipping</div>
          <div>${cartTotal.shipping}</div>
        </div>
        <div className="flex justify-between">
          <div className="font-bold">Grand Total</div>
          <div>${cartTotal.total}</div>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Checkout
        </button>
      </div>
    </div> :
    <LoginPagePrompt />
    }
  
  </div>
    
  );
};

export default Cart;
