import React, { useState } from 'react';
import { TrashIcon } from "@heroicons/react/24/outline";
import LoginPagePrompt from '../components/LoginRedirect';

const Cart = () => {
  const loggedin = localStorage.getItem('token');


  const [cartItems, setCartItems] = useState([
    { id: 1, productName: 'Dingo Dog Bones', description: 'The best dog bones of all time...', price: 12.99, quantity: 2, image: 'https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80' },
    { id: 2, productName: 'Nutro™ Adult Lamb and Rice Dog Food', description: 'Who doesn\'t like lamb and rice?...', price: 45.99, quantity: 1, image: 'https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80' }
  ]);

  const [taxRate] = useState(0.05);
  const [shippingRate] = useState(15.00);

  const updateQuantity = (id, quantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems =>
      prevItems.filter(item => item.id !== id)
    );
  };

  const recalculateCart = () => {
    let subtotal = 0;
    cartItems.forEach(item => {
      subtotal += item.price * item.quantity;
    });

    const tax = subtotal * taxRate;
    const shipping = subtotal > 0 ? shippingRate : 0;
    const total = subtotal + tax + shipping;

    return {
      subtotal: subtotal.toFixed(2),
      tax: tax.toFixed(2),
      shipping: shipping.toFixed(2),
      total: total.toFixed(2)
    };
  };

  const cartTotal = recalculateCart();

  return (<>
  {loggedin != null ?<div className="m-10 p-10 text-white">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>

      <div className="border-b border-gray-200 mb-4">
        <div className="flex items-center py-2">
          <div className="w-1/6 pl-2">Image</div>
          <div className="w-3/6 pl-2">Product</div>
          <div className="w-1/6 pl-2">Price</div>
          <div className="w-1/6 pl-2">Quantity</div>
          <div className="w-1/6 pl-2">Remove</div>
          <div className="w-1/6 pl-2 pr-2 text-right">Total</div>
        </div>
      </div>

      {cartItems.map(item => (
        <div key={item.id} className="flex items-center p-1 border-b border-gray-200">
          <div className="w-1/6">
            <img src={item.image} alt="Product" className="w-16 h-auto" />
          </div>
          <div className="w-3/6 pl-2">
            <div className="font-bold">{item.productName}</div>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
          <div className="w-1/6 pl-2">${item.price}</div>
          

          <div className="w-1/6 flex justify-center items-center">
            <button onClick={() => removeItem(item.id)} className="text-red-600 hover:text-red-800 focus:outline-none"><TrashIcon className='w-5  h-5'/></button>
          </div>
          <div className="w-1/6 pr-2 text-right">${(item.price * item.quantity).toFixed(2)}</div>
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
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Checkout</button>
      </div>
    </div> :
    <LoginPagePrompt />
    }
  
  </>
    
  );
};

export default Cart;
