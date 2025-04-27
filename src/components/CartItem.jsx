import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, updateQuantity } from "../features/cart/CartSlice";
import { Minus, Plus, Trash2 } from "lucide-react";

function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div
      key={item.id}
      className="flex flex-col justify-between md:flex-row items-center  py-2 border-b border-gray-200 mb-2"
    >
      <div className="flex flex-col md:flex-row  md:gap-7">
        <Link to={`/product/${item.id}`}>
          <img
            src={item.image}
            alt={item.title}
            className="w-3/3 h-24 md:object-cover md:w-24  rounded"
          />
        </Link>
        <div className="mb-4">
          <Link to={`/product/${item.id}`} className="font-semibold  ">
            {item.title}
          </Link>
          <p className="text-gray-600">${item.price}</p>
          <div className="flex items-center gap-5 mt-2">
            <button
              className="p-1 rounded-full hover:bg-gray-200 cursor-pointer"
              onClick={() =>
                dispatch(updateQuantity({ id: item.id, quantity: Math.max(1, item.quantity - 1) }))
              }
            >
              <Minus size={15} />
            </button>
            <span className="font-semibold">{item.quantity}</span>
            <button
              className=" p-1 rounded-full hover:bg-gray-200 cursor-pointer"
              onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
            >
              <Plus size={15} />
            </button>
            <div
              className="ml-2 text-red-300 hover:text-red-500 cursor-pointer"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              <Trash2 size={20} />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <p className="font-bold"> ${item.price * item.quantity}</p>
      </div>
    </div>
  );
}

export default CartItem;
