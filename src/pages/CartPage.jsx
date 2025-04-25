
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

function CartPage() {
 
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 my-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-4">Add some products to your cart to see them here</p>
          <Link
            to="/"
            className="inline-block bg-zinc-200 rounded-lg px-6 py-2 hover:bg-zinc-400  active:scale-105 transition-all ease-in"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 md:px-35 mt-10">
      <h2 className="text-2xl text-gray-800 font-bold mb-10">Shopping Cart</h2>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-10 mb-50 ">
        <div className="lg:col-span-2 shadow-md p-4 rounded-md ">
          {cartItems.map((item) => {
            return  <CartItem item={item} key={item.id}/>
          })}
        </div>
        <div className="lg:col-span-1">
          <div className=" shadow-md p-4 rounded-md">
            <h3 className="text-xl font-medium text-gray-800 mb-3">Order Summary</h3>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Sub Total</span>
                <span className="font-bold text-gray-400">${total}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-800 font-semibold">free</span>
              </div>
              <div className="border-t border-gray-400 mt-2 flex justify-between">
                <span className="mt-2">Total</span>
                <span className="font-bold mt-2">${total}</span>
              </div>
            </div>
            <button className="w-full bg-lime-300 py-3 px-4 text-gray-800 rounded cursor-pointer hover:bg-lime-500 hover:text-white active:scale-105 transition-all ease-in">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
